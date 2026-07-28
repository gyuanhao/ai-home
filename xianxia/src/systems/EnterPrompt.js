/* ============================================================
 * 进入地点确认弹窗 (src/systems/EnterPrompt.js)
 * 作用：玩家走近某地点触发圈时，不直接进入，而是先弹一个
 *       小窗："是否进入【XXX】？" + 地点简要介绍，
 *       由玩家点"进入"或"再逛逛"决定，避免误触。
 * 容器在 index.html（#enter-prompt），这里只操作它。
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.EnterPrompt = {
  _inited: false,
  _pending: null,

  // 绑定一次（WorldMapScene.create 每次回地图都会调用，需幂等）
  init() {
    if (this._inited) return;
    this._inited = true;

    this.overlay = document.getElementById('enter-prompt');
    this.icon = document.getElementById('ep-icon');
    this.name = document.getElementById('ep-name');
    this.sub = document.getElementById('ep-sub');
    this.title = document.getElementById('ep-title');
    this.desc = document.getElementById('ep-desc');
    this.maps = document.getElementById('ep-maps');
    this.btnEnter = document.getElementById('ep-enter');
    this.btnCancel = document.getElementById('ep-cancel');

    // 阻止点击冒泡到 Phaser canvas（避免点弹窗却触发"点地移动"）
    this.overlay.addEventListener('click', (e) => e.stopPropagation());
    this.btnEnter.addEventListener('click', (e) => { e.stopPropagation(); this._resolve(true); });
    this.btnCancel.addEventListener('click', (e) => { e.stopPropagation(); this._resolve(false); });
  },

  /**
   * 弹出确认窗。
   * @param {object} loc  mapConfig 地点条目（含 name/sub/icon/guide）
   * @param {function} onConfirm 点"进入"后回调，参数为 loc
   */
  prompt(loc, onConfirm) {
    this._pending = { loc, onConfirm };

    this.name.textContent = loc.name || '';
    this.sub.textContent = loc.sub || '';
    this.title.textContent = `是否进入「${loc.name || ''}」？`;

    const g = loc.guide || {};
    this.desc.innerHTML = g.desc || '（暂无介绍）';

    if (g.mapsTo) {
      this.maps.style.display = '';
      this.maps.textContent = `对应主站的「${g.mapsTo}」板块`;
    } else {
      this.maps.style.display = 'none';
    }

    if (loc.icon) {
      this.icon.src = loc.icon;
      this.icon.style.display = '';
    } else {
      this.icon.style.display = 'none';
    }

    this.overlay.classList.add('show');
  },

  // 用户点按钮后的统一收尾
  _resolve(confirm) {
    this.overlay.classList.remove('show');
    const pending = this._pending;
    this._pending = null;
    if (confirm && pending && pending.onConfirm) {
      pending.onConfirm(pending.loc);
    }
  },

  // 是否正在显示（供 WorldMapScene 拦截地图点击）
  get isOpen() {
    return !!this.overlay && this.overlay.classList.contains('show');
  }
};
