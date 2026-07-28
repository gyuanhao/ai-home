/* ============================================================
 * 内容面板 (src/systems/ContentPanel.js)
 * 作用：进入地点后，从屏幕右侧滑出一个 HTML 面板，展示原网页的内容
 * （模型卡、对比表、博客等）。
 * 需求第 8 项：侧边面板，地图可见可边走边看；长内容可一键全屏。
 * 用 HTML/CSS 做内容（不用 Phaser 画），排版好、长内容好读、SEO 友好。
 * 面板的 HTML 容器在 index.html 里（#side-panel），这里只是操作它。
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.ContentPanel = {
  init() {
    this.el = document.getElementById('side-panel');
    this.content = document.getElementById('side-panel-content');
    this.title = document.getElementById('side-panel-title');
    // 关闭按钮
    document.getElementById('side-panel-close').addEventListener('click', () => this.close());
    // 全屏按钮（长内容好读）
    document.getElementById('side-panel-fullscreen').addEventListener('click', () => this.toggleFullscreen());
    this._isOpen = false;
    this._isFull = false;
  },

  // 打开面板，传入 { title, html }
  open({ title, html }) {
    this.title.textContent = title;
    this.content.innerHTML = html;
    this.el.classList.add('open');
    this._isOpen = true;
  },

  close() {
    this.el.classList.remove('open', 'fullscreen');
    this._isOpen = false;
    this._isFull = false;
  },

  // 切换全屏
  toggleFullscreen() {
    this._isFull = !this._isFull;
    this.el.classList.toggle('fullscreen', this._isFull);
  },

  isOpen() { return this._isOpen; },
};
