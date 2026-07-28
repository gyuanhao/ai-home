/* ============================================================
 * 玩家角色 (src/entities/Player.js)
 * 作用：定义"玩家"这个游戏对象怎么移动、怎么朝向。
 * 实现需求第 7 项"点击移动"——点哪走哪（暗黑式）。
 *
 * 移动方式升级：
 *   - 旧的 moveTo：直线走向目标点（遇到河会被挡住停住）。
 *   - 新的 moveAlongPath：沿着一条"已规划好的可通行路点"逐段走，
 *     也就是 WorldMapScene 用 PathFinder 算出绕开河流的路线后，交给这里执行。
 * 支持 8 方向：素材只有左半边 5 个方向（下/左下/左/左上/上），
 * 右半边（右/右下/右上）通过 flipX 镜像实现。
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.Player = class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    // 默认用待机-下面朝前的那帧作为初始图
    super(scene, x, y, 'player-idle', 0);

    scene.add.existing(this);       // 加到场景显示
    scene.physics.add.existing(this); // 加物理，能移动、能碰撞
    this.setCollideWorldBounds(true); // 不走出世界边界

    // 设置角色在地图上的显示大小（素材单帧 316x308，游戏里缩放到 48x48 左右）
    this.setDisplaySize(48, 48);
    // 锚点居中，方便翻转和移动
    this.setOrigin(0.5, 0.5);

    // —— 路径跟随相关状态 ——
    this._path = null;        // 当前要走的路点数组（世界坐标 {x,y}）
    this._pathIndex = 0;      // 正在走向第几个路点
    this._facing = 'down';    // 当前朝向
    this._isMoving = false;   // 是否在移动中
    this._badFrames = 0;      // 连续不可走帧计数（容忍短暂穿过边缘像素）

    // 初始状态：待机，面朝下
    this.play('idle-down');
  }

  /**
   * 沿一条可通行路径行走（寻路结果交给这里执行）。
   * points: 世界坐标路点数组；内部会从第一个路点开始逐个走到最后一个。
   */
  moveAlongPath(points) {
    if (!points || points.length === 0) return;
    // 复制一份，避免外部修改影响内部状态
    this._path = points.map(p => ({ x: p.x, y: p.y }));
    this._pathIndex = 0;
    this._isMoving = true;
    this._moveToCurrent();
  }

  /**
   * 直线走向单点（退化方案：寻路失败时调用，仍会被河流挡住停下）。
   */
  moveTo(targetX, targetY) {
    if (AIHome.isWalkable && !AIHome.isWalkable(targetX, targetY)) {
      // 点到河里：停下当前动作，播放待机动画，但不移动
      this.setVelocity(0, 0);
      this._path = null;
      this._isMoving = false;
      this.play(`idle-${this._facing}`, true);
      return;
    }
    this._path = [{ x: targetX, y: targetY }];
    this._pathIndex = 0;
    this._isMoving = true;
    this._moveToCurrent();
  }

  // 朝"当前目标路点"设置物理速度 + 朝向动画
  _moveToCurrent() {
    if (!this._path || this._pathIndex >= this._path.length) return;
    const t = this._path[this._pathIndex];
    this.scene.physics.moveTo(this, t.x, t.y, AIHome.CONFIG.PLAYER_SPEED);
    this._setFacing(t.x - this.x, t.y - this.y);
  }

  /**
   * 每帧调用：沿路径推进，到达当前路点就切换到下一个，
   * 全部走完则停下播待机；若连续多帧踩入禁行区则停下（兜底保护）。
   */
  update() {
    if (!this._path || !this._isMoving) return;

    // 河流兜底：容忍短暂穿过禁行区边缘像素（路点间直线可能擦过 1-2px 边缘），
    // 只有连续 8 帧（约 0.13 秒）都不可走才真正停下，避免误触发。
    if (AIHome.isWalkable && !AIHome.isWalkable(this.x, this.y)) {
      this._badFrames++;
      if (this._badFrames > 8) {
        this.setVelocity(0, 0);
        this._path = null;
        this._isMoving = false;
        this.play(`idle-${this._facing}`, true);
        return;
      }
    } else {
      this._badFrames = 0;
    }

    const t = this._path[this._pathIndex];
    const dist = Phaser.Math.Distance.Between(this.x, this.y, t.x, t.y);
    if (dist < 8) {
      // 到达当前路点，前进到下一个
      this._pathIndex++;
      if (this._pathIndex >= this._path.length) {
        // 全部走完，停下播待机
        this.setVelocity(0, 0);
        this._path = null;
        this._isMoving = false;
        this.play(`idle-${this._facing}`, true);
      } else {
        this._moveToCurrent();
      }
    } else {
      // 还没到：每帧重新设定速度方向，转弯更顺滑
      this.scene.physics.moveTo(this, t.x, t.y, AIHome.CONFIG.PLAYER_SPEED);
      this._setFacing(t.x - this.x, t.y - this.y);
    }
  }

  // 根据方向向量设置朝向；只有"方向真的变了"才重播行走动画，避免每帧重头播
  _setFacing(dx, dy) {
    const a = this._dirOf(dx, dy);
    if (a.dir !== this._facing || a.flip !== this.flipX) {
      this._facing = a.dir;
      this.setFlipX(a.flip);
      if (this._isMoving) this.play(`walk-${a.dir}`, true);
    }
  }

  // 方向判断（复用了素材 5 方向 + 右半边 flipX 镜像）
  _dirOf(dx, dy) {
    const angle = Math.atan2(dy, dx) * 180 / Math.PI; // -180 ~ 180
    let dir = 'down', flip = false;
    if (angle >= -22.5 && angle < 22.5) {
      dir = 'left'; flip = true;        // 右
    } else if (angle >= 22.5 && angle < 67.5) {
      dir = 'down-left'; flip = true;   // 右下
    } else if (angle >= 67.5 && angle < 112.5) {
      dir = 'down'; flip = false;       // 下
    } else if (angle >= 112.5 && angle < 157.5) {
      dir = 'down-left'; flip = false;  // 左下
    } else if (angle >= 157.5 || angle < -157.5) {
      dir = 'left'; flip = false;       // 左
    } else if (angle >= -157.5 && angle < -112.5) {
      dir = 'up-left'; flip = false;    // 左上
    } else if (angle >= -112.5 && angle < -67.5) {
      dir = 'up'; flip = false;         // 上
    } else {
      dir = 'up-left'; flip = true;     // 右上
    }
    return { dir, flip };
  }

  // 兼容旧调用：外部若直接传 dx/dy 也能用
  _updateFacing(dx, dy) { this._setFacing(dx, dy); }
};
