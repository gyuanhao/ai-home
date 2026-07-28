/* ============================================================
 * 寻路器 (src/systems/PathFinder.js)
 * 作用：让角色"自动绕开河流"走到目标点。
 *
 * 原理（通俗说明）：
 *   1. 把整张世界地图按 cellSize 切成一个个小方格（像围棋棋盘）。
 *   2. 每个格子采样一下"这里能不能走"（用 WorldMapScene 生成的河流遮罩），
 *      标记成「可走 / 不可走」。为避免角色半个身子泡在水里，
 *      我们在格子中心四周多采几个点（轻微"膨胀"），任一不可走整格就不可走。
 *   3. 在格子上跑 A* 算法（经典最短路径算法，带 8 个方向），
 *      找到从起点到终点的「只走可走格」的最短路线。
 *   4. 把格子路线转回地图坐标，交给角色一个一个路点走过去。
 *
 * 用法：
 *   const pf = new AIHome.PathFinder(WORLD_WIDTH, WORLD_HEIGHT, 24);
 *   const path = pf.findPath(player.x, player.y, goalX, goalY); // 世界坐标路点数组
 *   if (path) player.moveAlongPath(path);
 * ============================================================ */
window.AIHome = window.AIHome || {};

// —— 内部小工具：最小二叉堆（A* 的"开放列表"用，找最小 f 值最快）——
// 不用自己写也行，但网格较大时线性查找会很慢，堆能保证性能。
class _MinHeap {
  constructor() { this.a = []; }
  get size() { return this.a.length; }
  push(item) { // item: { f, c, r }
    const a = this.a;
    a.push(item);
    let i = a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (a[p].f <= a[i].f) break;
      const tmp = a[p]; a[p] = a[i]; a[i] = tmp;
      i = p;
    }
  }
  pop() {
    const a = this.a;
    const top = a[0];
    const last = a.pop();
    if (a.length > 0) {
      a[0] = last;
      let i = 0;
      const n = a.length;
      while (true) {
        let l = 2 * i + 1, r = 2 * i + 2, m = i;
        if (l < n && a[l].f < a[m].f) m = l;
        if (r < n && a[r].f < a[m].f) m = r;
        if (m === i) break;
        const tmp = a[m]; a[m] = a[i]; a[i] = tmp;
        i = m;
      }
    }
    return top;
  }
}

AIHome.PathFinder = class PathFinder {
  constructor(worldWidth, worldHeight, cellSize) {
    this.cellSize = cellSize;          // 每个格子的边长（像素）
    this.cols = Math.ceil(worldWidth / cellSize);
    this.rows = Math.ceil(worldHeight / cellSize);
    this.grid = [];                    // grid[r][c] = true 表示该格可走
    this._build();
  }

  // 构建可走网格
  _build() {
    const cs = this.cellSize;
    // off 降到 3：只做很轻微的边缘保护，避免角色半个身子踩水，
    // 但不会把窄路（桥/小径）整条封死。
    const off = 3;
    for (let r = 0; r < this.rows; r++) {
      const row = [];
      for (let c = 0; c < this.cols; c++) {
        const cx = c * cs + cs / 2;
        const cy = r * cs + cs / 2;
        const ok =
          this._walkableAt(cx, cy) &&
          this._walkableAt(cx - off, cy) &&
          this._walkableAt(cx + off, cy) &&
          this._walkableAt(cx, cy - off) &&
          this._walkableAt(cx, cy + off);
        row.push(ok);
      }
      this.grid.push(row);
    }
  }

  _walkableAt(x, y) {
    if (x < 0 || y < 0) return false;
    if (AIHome.isWalkable) return AIHome.isWalkable(x, y);
    return true; // 没加载遮罩时默认全可走
  }

  // 世界坐标 → 格子坐标
  worldToGrid(x, y) {
    return {
      c: Phaser.Math.Clamp(Math.floor(x / this.cellSize), 0, this.cols - 1),
      r: Phaser.Math.Clamp(Math.floor(y / this.cellSize), 0, this.rows - 1),
    };
  }

  // 格子坐标 → 世界坐标（返回格子中心）
  gridToWorld(c, r) {
    return { x: c * this.cellSize + this.cellSize / 2, y: r * this.cellSize + this.cellSize / 2 };
  }

  _inBounds(c, r) { return c >= 0 && c < this.cols && r >= 0 && r < this.rows; }

  // 找离 (c,r) 最近的可走格子（目标可能正好点在河里/建筑墙上，拉到最近陆地）
  _nearestWalkable(c, r, maxRadius) {
    if (this._inBounds(c, r) && this.grid[r][c]) return { c, r };
    for (let rad = 1; rad <= maxRadius; rad++) {
      for (let dr = -rad; dr <= rad; dr++) {
        for (let dc = -rad; dc <= rad; dc++) {
          if (Math.max(Math.abs(dr), Math.abs(dc)) !== rad) continue; // 只查这一圈
          const nc = c + dc, nr = r + dr;
          if (this._inBounds(nc, nr) && this.grid[nr][nc]) return { c: nc, r: nr };
        }
      }
    }
    return null;
  }

  /**
   * 主接口：从 (startX,startY) 走到 (goalX,goalY)
   * 返回世界坐标路点数组（含起点、终点）；被河完全隔开找不到路时返回 null。
   */
  findPath(startX, startY, goalX, goalY, avoidPoints) {
    const s = this.worldToGrid(startX, startY);
    const g = this.worldToGrid(goalX, goalY);
    // 起点搜 15 格半径，终点搜 30 格半径（用户可能点到山上/河里，要拉远找最近可走点）
    const start = this._nearestWalkable(s.c, s.r, 15);
    const goal = this._nearestWalkable(g.c, g.r, 30);
    if (!start || !goal) {
      console.warn('[PathFinder] 找不到可走起点或终点', { start, goal, s, g });
      return null;
    }

    const cols = this.cols;
    const key = (c, r) => r * cols + c;
    const startKey = key(start.c, start.r);
    const goalKey = key(goal.c, goal.r);

    // 途经地点回避：把"其他地点触发圈"内的格子设为不可走，
    // 使路径自动绕开，避免自动寻路途中误触途径地点的进入窗口。
    // 终点和起点格恒可达（即便恰好落在某圈内也能进出）。
    const avoidKeys = new Set();
    if (avoidPoints && avoidPoints.length) {
      const trigR = (AIHome.CONFIG && AIHome.CONFIG.TRIGGER_RADIUS) || 60;
      const R = trigR + this.cellSize * 2; // 余量：确保玩家走对角线也不会贴边误触
      const gridR = Math.ceil(R / this.cellSize);
      for (const p of avoidPoints) {
        const ag = this.worldToGrid(p.x, p.y);
        for (let dr = -gridR; dr <= gridR; dr++) {
          for (let dc = -gridR; dc <= gridR; dc++) {
            const nc = ag.c + dc, nr = ag.r + dr;
            if (!this._inBounds(nc, nr)) continue;
            const w = this.gridToWorld(nc, nr);
            if (Phaser.Math.Distance.Between(w.x, w.y, p.x, p.y) < R) {
              avoidKeys.add(key(nc, nr));
            }
          }
        }
      }
      avoidKeys.delete(startKey);
      avoidKeys.delete(goalKey);
    }

    const open = new _MinHeap();
    const gScore = new Map();      // 从起点到某格的实际代价
    const cameFrom = new Map();    // 记录前驱，用于回溯
    gScore.set(startKey, 0);
    const h = (c, r) => Math.hypot(c - goal.c, r - goal.r); // 启发式：直线距离
    open.push({ c: start.c, r: start.r, f: h(start.c, start.r) });

    const closed = new Set();       // 已确定最短的格子
    const MAX_ITER = 40000;         // 安全上限，防止极端情况卡死
    let iter = 0;
    const dirs = [
      [1, 0], [-1, 0], [0, 1], [0, -1],   // 上下左右
      [1, 1], [1, -1], [-1, 1], [-1, -1], // 四个对角
    ];

    while (open.size > 0 && iter < MAX_ITER) {
      iter++;
      const cur = open.pop();
      const ck = key(cur.c, cur.r);
      if (closed.has(ck)) continue; // 懒删除：重复入堆的过期节点跳过
      closed.add(ck);
      if (ck === goalKey) {
        return this._reconstruct(cameFrom, ck, startKey);
      }
      for (const [dc, dr] of dirs) {
        const nc = cur.c + dc, nr = cur.r + dr;
        if (!this._inBounds(nc, nr) || !this.grid[nr][nc]) continue;
        const nk = key(nc, nr);
        if (avoidKeys.has(nk)) continue; // 绕过途中所经地点的触发圈
        // 对角线不能穿过"墙角"：两侧的正交格必须都可走，否则禁止斜穿
        if (dc !== 0 && dr !== 0) {
          if (!this.grid[cur.r][nc] || !this.grid[nr][cur.c]) continue;
        }
        if (closed.has(nk)) continue;
        const step = (dc !== 0 && dr !== 0) ? Math.SQRT2 : 1; // 斜走代价略高
        const t = gScore.get(ck) + step;
        if (!gScore.has(nk) || t < gScore.get(nk)) {
          gScore.set(nk, t);
          cameFrom.set(nk, ck);
          open.push({ c: nc, r: nr, f: t + h(nc, nr) });
        }
      }
    }
    return null; // 没找到路
  }

  // 从终点回溯到起点，得到格子路径，再转成世界坐标路点数组
  _reconstruct(cameFrom, curKey, startKey) {
    const cols = this.cols;
    const path = [];
    let k = curKey;
    while (k !== undefined) {
      const c = k % cols;
      const r = Math.floor(k / cols);
      path.push(this.gridToWorld(c, r));
      if (k === startKey) break;
      k = cameFrom.get(k);
    }
    path.reverse();
    return path;
  }
};
