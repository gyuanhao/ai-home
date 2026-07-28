/* ============================================================
 * 启动页 (src/scenes/BootScene.js)
 * 作用：Phaser 一启动先进这里。做最基础初始化，然后跳资源加载页。
 * 玩家几乎看不到这个画面（停留极短）。
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.BootScene = class BootScene extends Phaser.Scene {
  constructor() { super('BootScene'); }

  create() {
    // 像素风：让像素对齐到整数像素，避免抖动
    if (AIHome.CONFIG.PIXEL_ART) {
      this.cameras.main.setRoundPixels(true);
    }
    // 直接跳资源加载页
    this.scene.start('PreloadScene');
  }
};
