/* ============================================================
 * 通用地点场景 (src/scenes/locations/GenericLocationScene.js) v3
 * 升级：品类筛选按钮移到侧边面板 HTML 内（不在画布上画），
 *       避免被右侧面板挡住。卡片列表本身也在面板内，整体自然滚动。
 * 加新地点只改 mapConfig（配 dataType + dataKey），不用再写场景文件。
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.GenericLocationScene = class GenericLocationScene extends Phaser.Scene {
  constructor() { super('GenericLocationScene'); }

  // init 接收从 WorldMapScene 传来的地点配置 { loc: {...} }
  init(data) { this.loc = (data && data.loc) || {}; }

  create() {
    this.cameras.main.setBackgroundColor(0x1a2a3a);
    const CW = this.cameras.main.width; // 全屏后用实际画布宽度居中

    // 地点场景隐藏"返回主站"按钮（避免浮在地点内容之上）
    const backToMain = document.getElementById('back-to-main');
    if (backToMain) backToMain.style.display = 'none';
    // 标题（画布只显示标题 + 返回按钮，内容交给侧边面板）
    this.add.text(CW / 2, 50,
      (this.loc.name || '地点') + ' · ' + (this.loc.sub || ''), {
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

    // 地点场景的"关闭"按钮 = 返回地图（避免关面板后卡在场景里无法再开）
    document.getElementById('side-panel-close').addEventListener('click', () => this._back());

    // 挂全局回调：让面板 HTML 里的品类按钮 onclick 能调到本场景的筛选逻辑。
    // 用 self 闭包引用本场景，并在 _back 时清掉，防止返回地图后回调乱指。
    AIHome._currentGenericScene = this;
    const self = this;
    AIHome._filterCardsCat = function(cat) {
      if (AIHome._currentGenericScene !== self) return;
      self._cat = cat;
      self._refreshCards(AIHome[self.loc.dataKey] || []);
    };
    // 搜索框：实时过滤卡片，只重建卡片容器（#cards-wrap），输入框保持焦点
    AIHome._searchCardsLoc = function(q) {
      if (AIHome._currentGenericScene !== self) return;
      self._q = (q || '').trim();
      const wrap = document.getElementById('cards-wrap');
      if (wrap) wrap.innerHTML = self._cardsHTML(self._filteredCards(AIHome[self.loc.dataKey] || []));
      const cnt = document.getElementById('cards-count');
      if (cnt) cnt.textContent = self._filteredCards(AIHome[self.loc.dataKey] || []).length;
    };
    // 论剑台（table 类型）用的全局回调：切换下拉框重渲染对比表
    AIHome._onCompareChange = function() {
      const sc = AIHome._currentGenericScene;
      if (!sc || sc.loc.dataType !== 'table') return;
      sc._renderCompareTable();
    };
    // 问道路（picker 类型）用的全局回调：选择问卷选项
    AIHome._pickerSelect = function(key, value) {
      const sc = AIHome._currentGenericScene;
      if (!sc || sc.loc.dataType !== 'picker') return;
      sc._pickerAnswer(key, value);
    };
    AIHome._pickerBack = function() {
      const sc = AIHome._currentGenericScene;
      if (!sc || sc.loc.dataType !== 'picker') return;
      sc._pickerBack();
    };
    AIHome._pickerReset = function() {
      const sc = AIHome._currentGenericScene;
      if (!sc || sc.loc.dataType !== 'picker') return;
      sc._pickerReset();
    };

    // 按 dataType 渲染
    const dt = this.loc.dataType;
    if (dt === 'cards') this._setupCards();
    else if (dt === 'articles') this._setupArticles();
    else if (dt === 'news') this._setupNews();
    else if (dt === 'table') this._setupTable();
    else if (dt === 'picker') this._setupPicker();
    else this._setupText();
  }

  // cards：品类按钮 + 搜索框 + 卡片列表都在侧边面板 HTML 内（一起滚，永远不被挡）
  _setupCards() {
    this._refreshCards(AIHome[this.loc.dataKey] || []);
  }
  _refreshCards(data) {
    // 提取品类
    const cats = ['全部'];
    data.forEach(m => { if (m.cat && !cats.includes(m.cat)) cats.push(m.cat); });
    const list = this._filteredCards(data);

    // 搜索框 + 品类按钮行（在面板内，可换行，不会被面板挡住）
    let bar = '<input id="cards-search" class="side-search" type="text"'
            + ' placeholder="搜索技能名 / 分类 / 团队…"'
            + ' value="' + (this._q || '').replace(/"/g, '&quot;') + '"'
            + ' oninput="AIHome._searchCardsLoc(this.value)">';
    bar += '<div class="cat-bar">';
    cats.forEach(c => {
      const cls = (c === this._cat) ? 'cat-btn active' : 'cat-btn';
      bar += '<button class="' + cls + '" onclick="AIHome._filterCardsCat(\'' + c + '\')">' + c + '</button>';
    });
    bar += '</div>';

    // 卡片列表（用容器包住，搜索/换品类时局部重渲染）
    let h = bar + '<div id="cards-wrap" class="model-list">';
    h += this._cardsHTML(list);
    h += '</div><p style="color:#888;margin-top:12px">共 <span id="cards-count">' + list.length + '</span> 个</p>';

    AIHome.ContentPanel.open({
      title: this.loc.name + ' · ' + this.loc.sub + (this._cat === '全部' ? '' : ' / ' + this._cat),
      html: h,
    });
  }

  // 按品类 + 搜索词过滤
  _filteredCards(data) {
    let list = data;
    if (this._cat !== '全部') list = list.filter(m => m.cat === this._cat);
    const q = (this._q || '').toLowerCase();
    if (q) {
      list = list.filter(m => {
        const hay = [m.name, m.cat, m.team, m.desc]
          .filter(Boolean).join(' ').toLowerCase();
        return hay.includes(q);
      });
    }
    return list;
  }

  // 卡片 HTML（抽出来，搜索/换品类时局部重渲染）
  _cardsHTML(list) {
    if (!list.length) return '<p style="color:#888">没有匹配的技能，换个关键词试试。</p>';
    let h = '';
    list.forEach(m => {
      h += '<div class="model-card">'
         + '<div class="mc-name">' + m.name + '</div>'
         + '<div class="mc-cat">' + (m.cat || '') + ' · ' + (m.team || '') + '</div>'
         + (m.desc ? '<div class="mc-section">' + m.desc + '</div>' : '')
         + '<div class="mc-actions">'
         + (m.detailUrl ? '<a class="mc-detail" href="' + m.detailUrl + '" target="_blank">查看技能详情 →</a>' : '')
         + (m.url ? '<a class="mc-link" href="' + m.url + '" target="_blank">前往仓库 →</a>' : '')
         + '</div>'
         + '</div>';
    });
    return h;
  }

  // articles：文章列表
  _setupArticles() {
    const data = AIHome[this.loc.dataKey] || [];
    let h = '<div class="article-list">';
    data.forEach(a => {
      h += '<div class="article-card">'
         + '<div class="mc-name">' + a.title + '</div>'
         + '<div class="mc-cat">' + (a.cat || '') + ' · ' + (a.date || '') + '</div>'
         + '<div class="mc-section">' + a.summary + '</div>'
         + '<a class="mc-link" href="' + a.url + '" target="_blank">阅读原文 →</a>'
         + '</div>';
    });
    h += '</div>';
    AIHome.ContentPanel.open({ title: this.loc.name + ' · ' + this.loc.sub, html: h });
  }

  // news：新闻列表（与主站 news.html 同数据源，标题直达来源）
  _setupNews() {
    const data = AIHome[this.loc.dataKey] || [];
    let h = '<p style="color:#6b4a00;margin:0 0 12px">标题直达信息出处，本站不做二次解读。</p>'
          + '<div class="news-list">';
    data.forEach(n => {
      h += '<div class="news-item">'
         + '<a class="news-title" href="' + n.url + '" target="_blank" rel="noopener">' + n.title + '</a>'
         + '<div class="news-meta"><span class="news-date">' + n.date + '</span> ' + n.source + '</div>'
         + '</div>';
    });
    h += '</div>';
    h += '<p style="color:#888;margin-top:14px">共 ' + data.length + ' 条 · 数据与主站【新闻】保持一致。</p>';
    AIHome.ContentPanel.open({ title: this.loc.name + ' · ' + this.loc.sub, html: h });
  }

  // table：对比表（可选两个模型）
  _setupTable() {
    const models = AIHome.MODELS;
    const defaultA = models.find(m => m.id === 'deepseek') || models[0];
    const defaultB = models.find(m => m.id === 'chatgpt') || models[1];
    const opts = models.map(m =>
      '<option value="' + m.id + '">' + m.name + '</option>'
    ).join('');
    const h =
      '<p style="margin:0 0 10px;color:#6b4a00">选择两个模型正面对决：</p>'
      + '<div class="compare-selectors">'
      +   '<select id="cmpA" class="cmp-select" onchange="AIHome._onCompareChange()">' + opts + '</select>'
      +   '<span class="cmp-vs">VS</span>'
      +   '<select id="cmpB" class="cmp-select" onchange="AIHome._onCompareChange()">' + opts + '</select>'
      + '</div>'
      + '<div id="compare-table-wrap">' + this._compareTableHTML(defaultA, defaultB) + '</div>';
    AIHome.ContentPanel.open({ title: this.loc.name + ' · ' + this.loc.sub, html: h });
    // 设默认选中（DeepSeek vs ChatGPT）
    const selA = document.getElementById('cmpA');
    const selB = document.getElementById('cmpB');
    if (selA) selA.value = defaultA.id;
    if (selB) selB.value = defaultB.id;
  }

  _compareTableHTML(a, b) {
    if (a.id === b.id) {
      return '<p style="color:#e8b84b;margin-top:14px">⚠️ 请选择两个不同的模型进行对比。</p>';
    }
    const rows = [
      ['开发商', a.company, b.company],
      ['价格', a.priceLabel, b.priceLabel],
      ['中文支持', a.chineseSupport, b.chineseSupport],
      ['上下文', a.contextWindow, b.contextWindow],
      ['优点', a.strengths, b.strengths],
      ['不足', a.weaknesses, b.weaknesses],
      ['适合', a.bestFor, b.bestFor],
    ];
    let h = '<table class="vs-table"><thead><tr><th>项目</th><th>' + a.name
          + '</th><th>' + b.name + '</th></tr></thead><tbody>';
    rows.forEach(r => {
      h += '<tr><td class="vs-key">' + r[0] + '</td><td>' + r[1] + '</td><td>' + r[2] + '</td></tr>';
    });
    h += '</tbody></table>';
    h += '<p style="color:#888;margin-top:12px">数据来自原站 models.json，与【横向对比】页面一致。</p>';
    return h;
  }

  _renderCompareTable() {
    const selA = document.getElementById('cmpA');
    const selB = document.getElementById('cmpB');
    if (!selA || !selB) return;
    const a = AIHome.MODELS.find(m => m.id === selA.value) || AIHome.MODELS[0];
    const b = AIHome.MODELS.find(m => m.id === selB.value) || AIHome.MODELS[1];
    const wrap = document.getElementById('compare-table-wrap');
    if (wrap) wrap.innerHTML = this._compareTableHTML(a, b);
  }

  // picker：4 步点击问卷选型（问道路，与主站 picker.html 同规则）
  _setupPicker() {
    this._pickerState = { step: 0, scene: null, experience: null, budget: null, personality: null };
    this._pickerRenderStep();
  }

  _pickerRenderStep() {
    const questions = AIHome.PICKER_QUESTIONS || [];
    const state = this._pickerState;
    if (state.step >= questions.length) {
      this._pickerRenderResult();
      return;
    }
    const q = questions[state.step];
    const total = questions.length;

    // 步骤指示器
    let dots = '<div class="picker-dots">';
    for (let i = 0; i < total; i++) {
      const cls = i < state.step ? 'done' : (i === state.step ? 'current' : '');
      dots += '<span class="picker-dot ' + cls + '"></span>';
      if (i < total - 1) dots += '<span class="picker-line ' + (i < state.step ? 'done' : '') + '"></span>';
    }
    dots += '</div>';

    let opts = '<div class="picker-options">';
    q.options.forEach(opt => {
      const selected = state[q.key] === opt.value ? ' selected' : '';
      opts += '<button class="picker-option' + selected + '" onclick="AIHome._pickerSelect(\'' + q.key + '\', \'' + opt.value + '\')">'
            + '<span class="picker-opt-emoji">' + opt.emoji + '</span>'
            + '<div class="picker-opt-text">'
            + '<span class="picker-opt-label">' + opt.label + '</span>'
            + '<span class="picker-opt-desc">' + opt.desc + '</span>'
            + '</div></button>';
    });
    opts += '</div>';

    let nav = '';
    if (state.step > 0) {
      nav = '<div class="picker-nav"><button class="picker-back" onclick="AIHome._pickerBack()">← 上一步</button></div>';
    }

    const h = dots + '<h3 class="picker-question">' + q.question + '</h3>' + opts + nav;
    AIHome.ContentPanel.open({ title: this.loc.name + ' · ' + this.loc.sub + '（' + (state.step + 1) + '/' + total + '）', html: h });
  }

  _pickerAnswer(key, value) {
    if (!this._pickerState) return;
    this._pickerState[key] = value;
    this._pickerState.step++;
    this._pickerRenderStep();
  }

  _pickerBack() {
    if (!this._pickerState || this._pickerState.step <= 0) return;
    this._pickerState.step--;
    const prevKey = (AIHome.PICKER_QUESTIONS[this._pickerState.step] || {}).key;
    if (prevKey) this._pickerState[prevKey] = null;
    this._pickerRenderStep();
  }

  _pickerReset() {
    this._setupPicker();
  }

  _pickerMatchRule() {
    const s = this._pickerState;
    const rules = AIHome.PICKER_RULES || [];
    let match = rules.find(r => r.s === s.scene && r.e === s.experience && r.b === s.budget && r.p === s.personality);
    if (match) return match;
    match = rules.find(r => r.s === s.scene && r.e === s.experience && r.b === s.budget);
    if (match) return match;
    match = rules.find(r => r.s === s.scene && r.b === s.budget);
    if (match) return match;
    match = rules.find(r => r.s === s.scene);
    if (match) return match;
    return AIHome.PICKER_FALLBACK;
  }

  _pickerRenderResult() {
    const rule = this._pickerMatchRule();
    const main = AIHome.MODELS.find(m => m.id === rule.main);
    const alt1 = AIHome.MODELS.find(m => m.id === rule.a1);
    const alt2 = AIHome.MODELS.find(m => m.id === rule.a2);

    const tag = this._pickerTagText();

    let h = '<div class="picker-result">';
    h += '<div class="picker-tag">' + tag + '</div>';

    // 主推
    h += '<div class="picker-result-main">';
    h += '<div class="picker-result-crown">🏆 最推荐</div>';
    h += '<div class="picker-result-name">' + (main ? main.name : '—') + '</div>';
    h += '<div class="picker-result-price">' + (main ? (main.priceLabel || '') : '') + '</div>';
    h += '<div class="picker-result-reason">' + (rule.reason || '') + '</div>';
    if (main && main.website) {
      h += '<a class="picker-result-link" href="' + main.website + '" target="_blank" rel="noopener">前往 ' + main.name + ' 官网 →</a>';
    }
    h += '</div>';

    // 备选
    h += '<div class="picker-result-alt-title">备选方案</div>';
    h += '<div class="picker-result-alt">';
    [alt1, alt2].forEach(m => {
      if (!m) return;
      h += '<div class="picker-result-alt-item">'
         + '<strong>' + m.name + '</strong>' + (m.priceLabel ? ' · ' + m.priceLabel.split(' / ')[0] : '')
         + '<br><span>' + (m.strengths ? m.strengths.split(/[。.]\s*/)[0] + '。' : '') + '</span>'
         + '</div>';
    });
    h += '</div>';

    h += '<div class="picker-result-actions">';
    h += '<button class="picker-result-btn reset" onclick="AIHome._pickerReset()">重新测试</button>';
    const detailUrl = main ? '../models/' + main.id + '.html' : '../models.html';
    h += '<a class="picker-result-btn compare" href="' + detailUrl + '" target="_blank">去主站查看模型介绍 ↗</a>';
    h += '</div>';

    h += '</div>';
    AIHome.ContentPanel.open({ title: this.loc.name + ' · ' + this.loc.sub + ' · 推荐结果', html: h });
  }

  _pickerTagText() {
    const s = this._pickerState;
    const find = (key, val) => {
      const q = (AIHome.PICKER_QUESTIONS || []).find(q => q.key === key);
      const opt = (q && q.options || []).find(o => o.value === val);
      return opt ? opt.label : val;
    };
    return find('personality', s.personality) + ' · ' + find('experience', s.experience) + ' · ' + find('budget', s.budget) + ' · ' + find('scene', s.scene);
  }

  // text：静态文本
  _setupText() {
    AIHome.ContentPanel.open({
      title: this.loc.name + ' · ' + this.loc.sub,
      html: this.loc.text || '<p>（待补充内容）</p>',
    });
  }

  _back() {
    AIHome.ContentPanel.close();
    // 清全局回调引用，避免返回地图后回调指向已销毁的场景
    if (AIHome._currentGenericScene === this) {
      AIHome._currentGenericScene = null;
      AIHome._filterCardsCat = null;
      AIHome._searchCardsLoc = null;
    }
    this.scene.start('WorldMapScene');
  }
};