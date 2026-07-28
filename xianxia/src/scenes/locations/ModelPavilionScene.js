/* ============================================================
 * 万象阁·模型库 (src/scenes/locations/ModelPavilionScene.js) v3
 * 升级：品类筛选按钮移到侧边面板 HTML 内（不在画布上），避免被面板挡住。
 * 关闭按钮绑=返回地图，避免关面板后卡在场景里无法再唤出。
 * 对应原网站 models.html。
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.ModelPavilionScene = class ModelPavilionScene extends Phaser.Scene {
  constructor() { super('ModelPavilionScene'); }

  create() {
    this.cameras.main.setBackgroundColor(0x1a2a3a);
    const CW = this.cameras.main.width; // 全屏后用实际画布宽度居中

    // 地点场景隐藏"返回主站"按钮（避免浮在地点内容之上）
    const backToMain = document.getElementById('back-to-main');
    if (backToMain) backToMain.style.display = 'none';
    // 画布只显示标题 + 返回按钮
    this.add.text(CW / 2, 50, '万象阁 · 模型库', {
      fontSize: '28px', color: '#f5c4b3', fontStyle: 'bold',
    }).setOrigin(0.5).setScrollFactor(0);

    const backBtn = this.add.text(30, 40, '← 返回地图', {
      fontSize: '16px', color: '#5dcaa5', backgroundColor: '#00000066', padding: { x: 8, y: 6 },
    }).setScrollFactor(0).setInteractive({ useHandCursor: true });
    backBtn.on('pointerup', () => this._back());
    this.input.keyboard.on('keydown-ESC', () => this._back());

    this._cat = '全部';
    this._q = ''; // 搜索关键词（原地检索，不重建输入框以保焦点）
    AIHome.ContentPanel.init();

    // 挂全局回调（与 GenericLocationScene 共用 _filterCardsCat 名，各自 self 闭包隔离，_back 时清引用）
    AIHome._currentGenericScene = this;
    const self = this;
    AIHome._filterCardsCat = function(cat) {
      if (AIHome._currentGenericScene !== self) return;
      self._cat = cat;
      self._refreshPanel();
    };
    // 搜索框：实时过滤卡片，只重建卡片容器（#model-cards-wrap），输入框保持焦点
    AIHome._searchModelPavilion = function(q) {
      if (AIHome._currentGenericScene !== self) return;
      self._q = (q || '').trim();
      const wrap = document.getElementById('model-cards-wrap');
      if (wrap) wrap.innerHTML = self._modelCardsHTML(self._filteredModels());
      const cnt = document.getElementById('model-count');
      if (cnt) cnt.textContent = self._filteredModels().length;
    };

    // 地点场景的"关闭"按钮 = 返回地图（避免关面板后卡在场景里无法再开）
    document.getElementById('side-panel-close').addEventListener('click', () => this._back());

    this._refreshPanel();
  }

  // 品类按钮 + 搜索框 + 卡片列表都在面板 HTML 里（一起滚，永远不被挡）
  _refreshPanel() {
    const cats = ['全部'];
    AIHome.MODELS.forEach(m => {
      if (m.category && !cats.includes(m.category)) cats.push(m.category);
    });
    const list = this._filteredModels();

    // 搜索框 + 品类按钮行（面板内，可换行，不被挡）
    let bar = '<input id="model-search" class="side-search" type="text"'
            + ' placeholder="搜索模型名 / 厂商 / 品类…"'
            + ' value="' + (this._q || '').replace(/"/g, '&quot;') + '"'
            + ' oninput="AIHome._searchModelPavilion(this.value)">';
    bar += '<div class="cat-bar">';
    cats.forEach(c => {
      const cls = (c === this._cat) ? 'cat-btn active' : 'cat-btn';
      bar += '<button class="' + cls + '" onclick="AIHome._filterCardsCat(\'' + c + '\')">' + c + '</button>';
    });
    bar += '</div>';

    // 卡片列表（用容器包住，搜索时只重建这部分）
    let h = bar + '<div id="model-cards-wrap" class="model-list">';
    h += this._modelCardsHTML(list);
    h += '</div><p style="color:#888;margin-top:12px">共 <span id="model-count">' + list.length + '</span> 个 · 数据来自原站 models.json</p>';

    AIHome.ContentPanel.open({
      title: '万象阁 · 模型库' + (this._cat === '全部' ? '' : ' / ' + this._cat),
      html: h,
    });
  }

  // 按品类 + 搜索词过滤
  _filteredModels() {
    let list = AIHome.MODELS;
    if (this._cat !== '全部') list = list.filter(m => m.category === this._cat);
    const q = (this._q || '').toLowerCase();
    if (q) {
      list = list.filter(m => {
        const hay = [m.name, m.company, m.category, m.strengths, m.bestFor]
          .filter(Boolean).join(' ').toLowerCase();
        return hay.includes(q);
      });
    }
    return list;
  }

  // 卡片 HTML（抽出来，搜索时局部重渲染）
  _modelCardsHTML(list) {
    if (!list.length) return '<p style="color:#888">没有匹配的模型，换个关键词试试。</p>';
    let h = '';
    list.forEach(m => {
      h += '<div class="model-card">'
         + '<div class="mc-name">' + m.name + '</div>'
         + '<div class="mc-cat">' + (m.category || '') + ' · ' + (m.company || '') + '</div>'
         + (m.priceLabel ? '<div class="mc-price">' + m.priceLabel + '</div>' : '')
         + (m.strengths ? '<div class="mc-section"><b>优点</b>：' + m.strengths + '</div>' : '')
         + (m.weaknesses ? '<div class="mc-section"><b>不足</b>：' + m.weaknesses + '</div>' : '')
         + (m.bestFor ? '<div class="mc-section"><b>适合</b>：' + m.bestFor + '</div>' : '')
         + (m.chineseSupport ? '<div class="mc-section mc-zh">' + m.chineseSupport + '</div>' : '')
         + '<div class="mc-actions">'
         + (m.id ? '<a class="mc-detail" href="../models/' + m.id + '.html" target="_blank">查看详细介绍 →</a>' : '')
         + (m.website ? '<a class="mc-link" href="' + m.website + '" target="_blank">前往官网 →</a>' : '')
         + '</div>'
         + '</div>';
    });
    return h;
  }

  _back() {
    AIHome.ContentPanel.close();
    // 清全局回调引用，避免返回地图后回调指向已销毁的场景
    if (AIHome._currentGenericScene === this) {
      AIHome._currentGenericScene = null;
      AIHome._filterCardsCat = null;
      AIHome._searchModelPavilion = null;
    }
    this.scene.start('WorldMapScene');
  }
};