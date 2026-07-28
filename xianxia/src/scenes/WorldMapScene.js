/* ============================================================
 * 世界地图主场景 (src/scenes/WorldMapScene.js) —— 核心
 * 作用：玩家在完整仙侠地图上走动，地图上已有建筑和河流，
 *       走近地点触发"进入"；点击移动时会被河流阻挡。
 * 实现需求：网状自由探索(6)、点击移动(7)、地面脚印轻引导(10)、不加迷雾(14)。
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.WorldMapScene = class WorldMapScene extends Phaser.Scene {
  constructor() { super('WorldMapScene'); }

  create() {
    const C = AIHome.CONFIG.COLORS;
    const { WORLD_WIDTH, WORLD_HEIGHT } = AIHome.CONFIG;

    // —— 1. 画完整地图背景（替换原来的瓦片平铺）——
    this.cameras.main.setBackgroundColor(C.bg);
    // 完整地图尺寸 = 世界尺寸，原点左上角
    this.add.image(0, 0, 'world-map')
      .setOrigin(0, 0)
      .setDisplaySize(WORLD_WIDTH, WORLD_HEIGHT)
      .setDepth(0);
    // 设世界边界（玩家走不出地图范围）
    this.physics.world.setBounds(0, 0, WORLD_WIDTH, WORLD_HEIGHT);

    // —— 2. 初始化河流禁区遮罩（白=可走，黑=河流）——
    this._initWalkMask();

    // —— 2.5 构建寻路网格：让点击移动能自动绕开河流 ——
    // 靠上面生成的遮罩判断哪格能走；cellSize 取自 config.NAV_CELL
    this.pathFinder = new AIHome.PathFinder(WORLD_WIDTH, WORLD_HEIGHT, AIHome.CONFIG.NAV_CELL);

    // —— 3. 画网状路径（地点之间的小路）——
    // 暂时不绘制地点之间的连线（用户要求去掉），如需恢复把下一行注释解除即可：
    // this._drawPaths();

    // —— 4. 创建地点（小光点 + 名字 + 触发圈）——
    this._createLocations();

    // —— 5. 创建玩家：如果刚从某地点返回，停在那位置；否则放在配置好的出生点 ——
    // （出生点 spawn 已用脚本确认在陆地、不会落在河里；不再用"地图正中心"避免落入河流）
    const startPos = AIHome._lastPos
      || AIHome.MAP_CONFIG.spawn
      || { x: WORLD_WIDTH / 2, y: WORLD_HEIGHT / 2 };
    this.player = new AIHome.Player(this, startPos.x, startPos.y);
    this.player.setDepth(10); // 显示在地点上面
    // 刚从某地点返回时，玩家在那个地点触发圈内，设它"已在圈内"防止立即再触发
    if (AIHome._lastLocId) {
      const lastL = this.locations.find(l => l.config.id === AIHome._lastLocId);
      if (lastL) lastL._inside = true;
    }

    // 相机跟随玩家，并限制在世界范围内
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
    this.cameras.main.setBounds(0, 0, WORLD_WIDTH, WORLD_HEIGHT);

    // —— 6. 点击移动：点画布某处，自动规划绕开河流的路线再走过去 ——
    this.input.on('pointerdown', (pointer) => {
      // 进入确认弹窗打开时，吞掉地图点击，避免误触移动
      if (AIHome.EnterPrompt && AIHome.EnterPrompt.isOpen) return;
      // 用户主动点击移动：放弃当前自动寻路目标，恢复自由触发（路过地点仍可进入）
      this._guideTarget = null;
      // 把屏幕坐标转成世界坐标（相机在动，所以要转换）
      const wp = pointer.positionToCamera(this.cameras.main);
      console.log(`[点击] 屏幕(${pointer.x.toFixed(0)},${pointer.y.toFixed(0)}) → 世界(${wp.x.toFixed(0)},${wp.y.toFixed(0)}) 玩家(${this.player.x.toFixed(0)},${this.player.y.toFixed(0)}) 可走=${AIHome.isWalkable(wp.x, wp.y)}`);
      if (this.pathFinder) {
        const path = this.pathFinder.findPath(this.player.x, this.player.y, wp.x, wp.y);
        if (path && path.length > 1) {
          console.log(`[寻路] 成功，${path.length} 个路点`);
          // 第一点是玩家当前所在格子（已基本重合），去掉，从下一个路点开始走
          path.shift();
          this.player.moveAlongPath(path);
          return;
        }
        // 只有 1 个点（起点≈终点）或规划失败：退化成直接走向该点（仍受河流保护）
        if (path && path.length === 1) {
          console.log('[寻路] 仅1个路点，退化 moveTo');
          this.player.moveTo(wp.x, wp.y);
          return;
        }
        console.warn('[寻路] 失败，退化 moveTo');
      }
      // 寻路器不可用时的兜底
      this.player.moveTo(wp.x, wp.y);
    });

    // —— 7. 地面脚印：画一串发光点指引最近未访地点 ——
    this.footprints = this.add.group();
    this._updateFootprints();

    // —— 8. 顶部提示文字（固定在屏幕不动）——
    this.add.text(20, 20, '点击地面走动，走近建筑进入（河流不可通行）', {
      fontSize: '16px', color: '#fff', backgroundColor: '#00000088', padding: { x: 8, y: 6 },
    }).setScrollFactor(0).setDepth(100); // setScrollFactor(0)=固定屏幕

    // —— 9. 初始化内容面板 + AI 论剑指南 ——
    AIHome.ContentPanel.init();
    AIHome.GuideSystem.init(this);
    AIHome.GuideSystem.show();
    AIHome.EnterPrompt.init();

    // 世界地图显示"返回主站"按钮
    const backToMain = document.getElementById('back-to-main');
    if (backToMain) backToMain.style.display = 'inline-flex';

    this._guideTarget = null;   // 自动寻路目标地点（途中用于抑制途经地点误触发）
    this._frame = 0;
  }

  update() {
    this.player.update();      // 玩家每帧更新（判断到达停下，也检测是否滑入河流）
    this._checkTriggers();     // 检查是否进入某地点触发区
    // 每隔 30 帧（约半秒）刷新脚印指引（跟着玩家移动更新）
    this._frame++;
    if (this._frame % 30 === 0) this._updateFootprints();
  }

  // 读取 world-map-mask 像素到全局，供玩家移动判断
  _initWalkMask() {
    const tex = this.textures.get('world-map-mask');
    const source = tex.getSourceImage();
    const canvas = document.createElement('canvas');
    canvas.width = source.width;
    canvas.height = source.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(source, 0, 0);
    AIHome._walkMaskData = ctx.getImageData(0, 0, source.width, source.height);
    AIHome._walkMaskWidth = source.width;
    AIHome._walkMaskHeight = source.height;

    // 全局工具函数：判断坐标是否可行走（白=可，黑=不可）
    AIHome.isWalkable = (x, y) => {
      if (!AIHome._walkMaskData) return true;
      const ix = Math.floor(x);
      const iy = Math.floor(y);
      if (ix < 0 || ix >= AIHome._walkMaskWidth || iy < 0 || iy >= AIHome._walkMaskHeight) {
        return false;
      }
      const idx = (iy * AIHome._walkMaskWidth + ix) * 4;
      // 红色通道 > 128 表示白色（可走）
      return AIHome._walkMaskData.data[idx] > 128;
    };

    // 诊断信息：打印 mask 尺寸和可走像素比例，方便排查缓存问题
    let walkable = 0;
    const d = AIHome._walkMaskData.data;
    for (let i = 0; i < d.length; i += 4) {
      if (d[i] > 128) walkable++;
    }
    const total = source.width * source.height;
    console.log(`[WalkMask] 尺寸=${source.width}x${source.height}, 可走像素=${walkable}/${total} (${(walkable/total*100).toFixed(1)}%)`);
  }

  // 画地点之间的路径线（半透明，不压过真实地图）
  _drawPaths() {
    const C = AIHome.CONFIG.COLORS;
    const byId = {};
    AIHome.MAP_CONFIG.locations.forEach(l => { byId[l.id] = l; });
    const g = this.add.graphics();
    g.lineStyle(4, C.path, 0.4);
    AIHome.MAP_CONFIG.paths.forEach(([a, b]) => {
      const la = byId[a], lb = byId[b];
      if (la && lb) {
        g.beginPath();
        g.moveTo(la.x, la.y);
        g.lineTo(lb.x, lb.y);
        g.strokePath();
      }
    });
  }

  // 创建地点：小光点 + 名字 + 触发圈（地图上已有建筑，不再额外显示大图标）
  _createLocations() {
    const C = AIHome.CONFIG.COLORS;
    this.locations = [];
    AIHome.MAP_CONFIG.locations.forEach(loc => {
      const visited = AIHome.SaveSystem.isVisited(loc.id);
      // 用一个小圆点标记可交互位置，已访变暗，未访高亮；待开发点用灰色
      const color = loc.placeholder ? C.locationTBD
        : (visited ? C.locationVisited : C.location);
      const sprite = this.add.circle(loc.x, loc.y, 8, color)
        .setDepth(5)
        .setAlpha(loc.placeholder ? 0.9 : (visited ? 0.5 : 1.0));

      // 名字（标记上方）
      this.add.text(loc.x, loc.y - 20, loc.name, {
        fontSize: '14px', color: '#fff', stroke: '#000', strokeThickness: 3,
      }).setOrigin(0.5).setDepth(6);
      this.add.text(loc.x, loc.y + 20, loc.sub, {
        fontSize: '10px', color: '#ffeebb',
      }).setOrigin(0.5).setDepth(6);

      // 触发圈（隐形物理范围，比标记稍大）
      const zone = this.add.zone(loc.x, loc.y,
        AIHome.CONFIG.TRIGGER_RADIUS * 2, AIHome.CONFIG.TRIGGER_RADIUS * 2);
      this.physics.add.existing(zone, false);
      this.locations.push({ config: loc, sprite, visited });
    });
  }

  // 每帧检查玩家是否进入某地点触发圈
  _checkTriggers() {
    // 防抖：用"进圈/出圈"状态，避免站在触发圈内每帧重复触发。
    // 已访地点也能进入（已访只是颜色变暗，不影响再进，符合需求）。
    this.locations.forEach(L => {
      const dist = Phaser.Math.Distance.Between(
        this.player.x, this.player.y, L.config.x, L.config.y);
      const inside = dist < AIHome.CONFIG.TRIGGER_RADIUS;
      // 自动寻路前往某地点途中：抑制"非目标"地点的触发，只放行真正的目的地，
      // 避免从 A 去 B 经过 C 时被 C 误触发。出圈时仍重置 _inside 状态。
      if (this._guideTarget && L.config.id !== this._guideTarget.id) {
        if (!inside) L._inside = false;
        return;
      }
      if (inside && !L._inside) {
        L._inside = true;          // 标记"已在圈内"，本帧触发后不再重复
        this._showEnterPrompt(L);
      } else if (!inside && L._inside) {
        L._inside = false;         // 走出圈了，允许下次再触发
      }
    });
  }

  // 走近地点时先弹"是否进入"确认窗（含地点简介），由玩家决定是否进入
  _showEnterPrompt(L) {
    if (AIHome.EnterPrompt.isOpen) return;   // 已在弹窗中，避免叠加
    this._guideTarget = null;                // 自动寻路已抵达，清除目标标记
    // 让玩家停下，避免弹窗期间继续走动穿出触发圈
    this.player.setVelocity(0, 0);
    this.player._path = null;
    this.player._isMoving = false;
    this.player.play(`idle-${this.player._facing}`, true);
    AIHome.EnterPrompt.prompt(L.config, () => this._enterLocation(L));
  }

  // 进入地点：标记已访 + 触发对应内容
  _enterLocation(L) {
    // 抵达目的地（无论自动寻路还是自由走进），清除自动寻路目标标记
    this._guideTarget = null;
    // 离开世界地图时收起指南窗口
    AIHome.GuideSystem.hide();
    // 记下玩家当前位置，返回地图时停在这，不回中心
    AIHome._lastPos = { x: this.player.x, y: this.player.y };
    AIHome._lastLocId = L.config.id;
    AIHome.SaveSystem.markVisited(L.config.id);
    L.visited = true;
    // 已访地点标记变暗，表示"来过"
    L.sprite.setAlpha(0.5);
    L.sprite.setFillStyle(AIHome.CONFIG.COLORS.locationVisited);

    if (L.config.scene) {
      // 进对应场景，并把地点配置传过去（通用场景靠这个配置渲染对应内容）
      this.scene.start(L.config.scene, { loc: L.config });
    } else {
      // 占位地点：侧边面板提示"敬请期待"
      const msg = L.config.placeholder
        ? (L.config.comingSoon || '此处正在规划建设中，敬请期待～')
        : ('这里对应原网站的「' + L.config.sub + '」板块。'
            + '<p style="color:#888">（骨架阶段占位，待后续开发）</p>');
      AIHome.ContentPanel.open({
        title: L.config.name + ' · ' + L.config.sub,
        html: '<p>' + msg + '</p>',
      });
    }
  }

  // 从 AI 论剑指南点"前往此地"：自动寻路走到该地点
  _guideGoTo(loc) {
    if (!loc) return;
    // 标记本次自动寻路的目标地点：途中抑制其他地点触发 + 令路径绕开其触发圈
    this._guideTarget = loc;
    if (!this.pathFinder) { this.player.moveTo(loc.x, loc.y); return; }
    // 除目标地点外的所有地点都作为"途经回避点"，让 A* 路径绕开它们的触发圈
    const others = AIHome.MAP_CONFIG.locations
      .filter(l => l !== loc)
      .map(l => ({ x: l.x, y: l.y }));
    const path = this.pathFinder.findPath(this.player.x, this.player.y, loc.x, loc.y, others);
    if (path && path.length > 1) {
      path.shift();
      this.player.moveAlongPath(path);
    } else {
      this.player.moveTo(loc.x, loc.y);
    }
  }

  // 更新地面脚印：从玩家到最近未访地点画一串发光点
  _updateFootprints() {
    this.footprints.clear(true, true); // 清掉旧的
    // 找最近未访地点
    let nearest = null, minD = Infinity;
    const px = this.player ? this.player.x : AIHome.CONFIG.WORLD_WIDTH / 2;
    const py = this.player ? this.player.y : AIHome.CONFIG.WORLD_HEIGHT / 2;
    this.locations.forEach(L => {
      if (!AIHome.SaveSystem.isVisited(L.config.id)) {
        const d = Phaser.Math.Distance.Between(px, py, L.config.x, L.config.y);
        if (d < minD) { minD = d; nearest = L; }
      }
    });
    if (nearest) {
      // 从玩家到该地点，每 40 像素画一个发光点
      const steps = Math.max(1, Math.ceil(minD / 40));
      for (let i = 1; i < steps; i++) {
        const t = i / steps;
        const x = Phaser.Math.Linear(px, nearest.config.x, t);
        const y = Phaser.Math.Linear(py, nearest.config.y, t);
        const dot = this.add.image(x, y, 'footprint').setAlpha(0.5).setDepth(3);
        // 闪烁动画（轻引导发光感）
        this.tweens.add({
          targets: dot, alpha: { from: 0.2, to: 0.8 },
          duration: 600, yoyo: true, repeat: -1, delay: i * 80,
        });
        this.footprints.add(dot);
      }
    }
  }
};
