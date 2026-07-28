/* ============================================================
 * 资源加载页 (src/scenes/PreloadScene.js)
 * 作用：加载 AI 像素美术资源（瓦片/玩家/各地点图标），
 *       显示进度条，加载完跳主菜单。
 * 说明：脚印仍代码生成（小圆点无需 AI 图），保持轻量。
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.PreloadScene = class PreloadScene extends Phaser.Scene {
  constructor() { super('PreloadScene'); }

  preload() {
    const { WIDTH, HEIGHT } = AIHome.CONFIG;
    // 进度条（用画布实际尺寸居中，兼容 RESIZE）
    const cx = this.cameras.main.width / 2;
    const cy = this.cameras.main.height / 2;
    this.add.rectangle(cx, cy, 320, 30, 0x333333).setStrokeStyle(2, 0xffffff);
    const bar = this.add.rectangle(cx - 158, cy, 0, 26, 0xf0997b).setOrigin(0, 0.5);
    const txt = this.add.text(cx, cy - 50, '载入仙侠世界…', {
      fontSize: '20px', color: '#fff',
    }).setOrigin(0.5);

    this.load.on('progress', (v) => { bar.width = 316 * v; });
    this.load.on('complete', () => { txt.setText('载入完成'); });

    // —— 1. 加载 AI 像素美术图片 ——
    this._loadPixelArt();

    // —— 2. 脚印仍代码生成（小圆点，简单） ——
    this._makeFootprintTexture();
  }

  create() {
    // 创建玩家动画（行走/待机，5 个方向），全局只需一次
    this._createPlayerAnimations();

    // 等书法 web 字体（马善政楷书）加载完再进菜单，避免 Phaser 画布文字回退成默认字体。
    // 最多等 3 秒，超时也继续（用系统楷体/雅黑兜底）。
    const goMenu = () => this.scene.start('MenuScene');
    if (document.fonts && document.fonts.load) {
      Promise.race([
        Promise.all([
          document.fonts.load('44px "Ma Shan Zheng"'),
          document.fonts.ready,
        ]),
        new Promise((res) => setTimeout(res, 3000)),
      ]).then(goMenu).catch(goMenu);
    } else {
      goMenu();
    }
  }

  // 加载 AI 像素美术：玩家精灵表、瓦片、各地点图标
  _loadPixelArt() {
    // 玩家角色动画精灵表：
    // - player_walk.png：5 方向 × 8 帧行走
    // - player_idle.png：5 方向 × 1 帧待机
    // 帧大小从 player_atlas.json 动态读取，这样以后换素材不用改代码
    this.load.json('playerAtlas', 'assets/images/sprites/player_atlas.json');

    // 注意：spritesheet 的 frameWidth/Height 会在 load 完成后从 json 拿到，
    // 但 Phaser 的 spritesheet 需要在 preload 阶段知道尺寸。
    // 所以这里先按 JSON 里的固定值写；如果脚本重跑后尺寸变了，需同步这里。
    // 当前 player_atlas.json: frameWidth=164, frameHeight=308
    const atlas = { frameWidth: 164, frameHeight: 308 };
    this.load.spritesheet('player-walk', 'assets/images/sprites/player_walk.png', atlas);
    this.load.spritesheet('player-idle', 'assets/images/sprites/player_idle.png', atlas);

    // 主菜单封面背景（进入世界地图前的封面图）
    this.load.image('menu-cover', 'assets/images/menu/cover.jpg');

    // 完整地图背景（含建筑、河流、桥梁）
    // 加 ?v= 时间戳防止浏览器/Phaser 缓存旧版遮罩，导致寻路失效
    const _v = Date.now();
    this.load.image('world-map', `assets/images/map/world_map.jpg?v=${_v}`);
    // 行走遮罩：白色=可走，黑色=河流（不可走）
    this.load.image('world-map-mask', `assets/images/map/world_map_mask.png?v=${_v}`);

    // 各地点图标：遍历 mapConfig，按 id 预加载（当前地图上已有建筑，图标可能不显示，但保留备用）
    // 文件名规则：assets/images/locations/{id}.png
    AIHome.MAP_CONFIG.locations.forEach(loc => {
      const key = loc.id;          // 纹理 key 直接用地点 id（唯一）
      const path = `assets/images/locations/${loc.id}.png`;
      this.load.image(key, path);
      // 顺便把 icon 路径写进配置，供 WorldMapScene 使用
      loc.icon = path;
    });
  }

  // 创建玩家方向动画
  // 方向顺序（素材从上到下）：下 / 左下 / 左 / 左上 / 上
  // 右 / 右下 / 右上 通过 flipX 镜像实现，不需要额外素材
  _createPlayerAnimations() {
    const dirs = ['down', 'down-left', 'left', 'up-left', 'up'];

    dirs.forEach((dir, row) => {
      // 行走动画：每行 8 帧，循环播放
      this.anims.create({
        key: `walk-${dir}`,
        frames: this.anims.generateFrameNumbers('player-walk', {
          start: row * 8,
          end: row * 8 + 7,
        }),
        frameRate: 10,
        repeat: -1,
      });

      // 待机动画：每行 1 帧，不循环
      this.anims.create({
        key: `idle-${dir}`,
        frames: [{ key: 'player-idle', frame: row }],
        frameRate: 1,
        repeat: 0,
      });
    });
  }

  // 用代码生成脚印纹理（淡青色小圆点，轻引导）
  _makeFootprintTexture() {
    const C = AIHome.CONFIG.COLORS;
    const g = this.make.graphics({});
    g.fillStyle(C.footprint, 1);
    g.fillCircle(3, 3, 3);
    g.generateTexture('footprint', 6, 6);
    g.destroy();
  }
};
