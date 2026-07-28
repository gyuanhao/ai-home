/* ============================================================
 * AI 论剑指南 (src/systems/GuideSystem.js)
 * 作用：世界地图上可展开/收起的窗口，解释每个仙侠地点
 *       对应主站的哪个真实板块，并支持"前往此地"与"在主站查看"。
 * 容器在 index.html 里（#guide-panel + #guide-toggle），这里只操作它。
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.GuideSystem = {
  // scene 传 WorldMapScene 实例，用于"前往此地"让玩家自动寻路过去
  init(scene) {
    this.scene = scene;
    // 幂等：从地点返回世界地图时 create() 会再次调用 init，
    // 若重复 addEventListener 会导致切换按钮监听器叠加，故只绑定一次。
    if (!this._inited) {
      this._inited = true;
      this.btn = document.getElementById('guide-toggle');
      this.panel = document.getElementById('guide-panel');
      this.list = document.getElementById('guide-list');
      this._open = false;

      // 阻止点击冒泡到 Phaser canvas（避免点到按钮却触发"点地移动"）
      this.btn.addEventListener('click', (e) => { e.stopPropagation(); this.toggle(); });
      document.getElementById('guide-close').addEventListener('click', (e) => { e.stopPropagation(); this.close(); });
    }
    // 重新渲染列表并恢复显示，且默认展开（首次进入与从地点返回均展开）
    this.render();
    this.show();
    this.open();
  },

  // 根据 mapConfig 的 guide 字段渲染地点列表
  render() {
    const locs = AIHome.MAP_CONFIG.locations;
    this.list.innerHTML = locs.map((l, i) => {
      const g = l.guide || {};
      const link = g.url
        ? `<a class="gi-link" href="${g.url}" target="_blank" rel="noopener">在主站查看 ↗</a>`
        : '';
      return `<div class="guide-item">
        <div class="gi-head">
          <span class="gi-name">${l.name}</span>
          <span class="gi-sub">${l.sub}</span>
        </div>
        <div class="gi-maps">对应主站：<b>${g.mapsTo || l.sub}</b></div>
        <p class="gi-desc">${g.desc || ''}</p>
        <div class="gi-actions">
          <button class="gi-go" data-idx="${i}">前往此地</button>
          ${link}
        </div>
      </div>`;
    }).join('');

    this.list.querySelectorAll('.gi-go').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = +b.dataset.idx;
        this.scene._guideGoTo(locs[idx]);
        this.close();
      });
    });
  },

  toggle() { this._open ? this.close() : this.open(); },

  open() {
    this.panel.classList.add('open');
    this.btn.classList.add('active');
    this._open = true;
  },

  close() {
    this.panel.classList.remove('open');
    this.btn.classList.remove('active');
    this._open = false;
  },

  // 进入地点场景时调用，隐藏指南避免干扰
  hide() {
    this.close();
    if (this.btn) this.btn.style.display = 'none';
  },

  // 回到世界地图时调用，恢复显示
  show() {
    if (this.btn) this.btn.style.display = '';
  },
};
