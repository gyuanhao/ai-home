/* ============================================================
 * 程序入口 (src/main.js)
 * 作用：创建 Phaser.Game 实例，把所有场景注册进去，启动游戏。
 *       这是"总开关"——网页一打开就跑这里。
 * 必须放在所有场景文件之后引入（要用到场景类）。
 * ============================================================ */
window.AIHome = window.AIHome || {};

const game = new Phaser.Game({
  type: Phaser.AUTO,              // 自动选 WebGL/Canvas
  parent: 'game-container',      // 画布挂到 index.html 的 #game-container
  width: AIHome.CONFIG.WIDTH,
  height: AIHome.CONFIG.HEIGHT,
  pixelArt: AIHome.CONFIG.PIXEL_ART, // 像素风硬边
  scale: {
    mode: Phaser.Scale.RESIZE,        // 画布随浏览器视口缩放，铺满全屏无黑边
    width: '100%',
    height: '100%',
    parent: 'game-container',
  },
  physics: {
    default: 'arcade',            // 简单物理，够用（移动 + 碰撞）
    arcade: { debug: false },
  },
  // 注册场景：第一个会先跑（BootScene）
  scene: [
    AIHome.BootScene,
    AIHome.PreloadScene,
    AIHome.MenuScene,
    AIHome.WorldMapScene,
    AIHome.ModelPavilionScene,
    AIHome.GenericLocationScene,
  ],
});

// 暴露到全局方便调试（浏览器控制台可访问 window.game）
window.game = game;
