/* ============================================================
 * 主菜单 (src/scenes/MenuScene.js)
 * 作用：游戏化氛围入口。点"开始闯荡"进世界地图。
 * 后续可加"继续 / 设置"，骨架先做开始按钮。
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.MenuScene = class MenuScene extends Phaser.Scene {
  constructor() { super('MenuScene'); }

  create() {
    // 用画布实际尺寸（全屏 RESIZE 后 = 浏览器视口宽高），让标题/按钮自动居中
    const WIDTH = this.cameras.main.width;
    const HEIGHT = this.cameras.main.height;

    // 封面背景图：等比缩放铺满全屏（cover 效果，保持比例裁剪）
    const tex = this.textures.get('menu-cover');
    const src = tex.getSourceImage();
    const imgW = src.width || WIDTH;
    const imgH = src.height || HEIGHT;
    const scale = Math.max(WIDTH / imgW, HEIGHT / imgH);
    this.add.image(WIDTH / 2, HEIGHT / 2, 'menu-cover')
      .setScale(scale)
      .setDepth(0);

    // 压暗一层，保证标题/按钮在云纹背景上可读
    this.add.rectangle(WIDTH / 2, HEIGHT / 2, WIDTH, HEIGHT, 0x000000, 0.35)
      .setDepth(1);

    // 标题（书法 web 字体：马善政楷书，无 bold 字重，靠描边保证清晰）
    this.add.text(WIDTH / 2, HEIGHT / 2 - 80, 'AI 仙侠世界', {
      fontSize: '44px', color: '#f5c4b3',
      fontFamily: '"Ma Shan Zheng", "KaiTi", "STKaiti", serif',
      stroke: '#1a1a1a', strokeThickness: 6,
    }).setOrigin(0.5).setDepth(2);

    this.add.text(WIDTH / 2, HEIGHT / 2 - 28, '像素风网状地图 · 点击移动 · 边走边看 AI', {
      fontSize: '17px', color: '#eeeeee',
      fontFamily: '"Ma Shan Zheng", "KaiTi", "STKaiti", serif',
      stroke: '#1a1a1a', strokeThickness: 4,
    }).setOrigin(0.5).setDepth(2);

    // 菜单页隐藏"返回主站"按钮
    const backToMain = document.getElementById('back-to-main');
    if (backToMain) backToMain.style.display = 'none';

    // 开始按钮
    const btn = this.add.text(WIDTH / 2, HEIGHT / 2 + 60, '[ 踏入AI江湖 ]', {
      fontSize: '30px', color: '#5dcaa5',
      fontFamily: '"Ma Shan Zheng", "KaiTi", "STKaiti", serif',
      backgroundColor: '#1a3a2a', padding: { x: 20, y: 10 },
      stroke: '#0d1f15', strokeThickness: 4,
    }).setOrigin(0.5).setInteractive({ useHandCursor: true }).setDepth(2);

    btn.on('pointerover', () => btn.setScale(1.08));
    btn.on('pointerout', () => btn.setScale(1));
    btn.on('pointerup', () => { AIHome._lastPos = null; AIHome._lastLocId = null; this.scene.start('WorldMapScene'); });
  }
};
