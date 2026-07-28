/* ============================================================
 * 地图配置 (src/data/mapConfig.js)
 * 作用：定义"世界地图上有哪几个地点、各自在哪、叫什么、进去看什么"。
 * 加新地点主要改这里（通用地点配 dataType + dataKey 即可，不用写场景文件）。
 * 坐标 x/y 是在世界地图（1600x1200）里的位置。
 *
 * dataType 说明：
 *   - 万象阁用专用场景 ModelPavilionScene（带模型筛选）
 *   - 其他地点用通用场景 GenericLocationScene，靠 dataType 决定渲染哪种：
 *     cards(卡片列表+筛选) / articles(文章列表) / table(对比表) / text(静态文本)
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.MAP_CONFIG = {
  // 玩家出生点（首次进入 / 点击"重新开始"时所在位置）。
  // 坐标会随地图/建筑位置重新计算：取"主陆地（最大连通块）"上最靠近 7 个建筑几何中心的点，
  // 保证在可走区域、不落在河里，且离最近建筑有足够距离不会一出生就触发。
  // 当前值由下方 locations 坐标计算后回填。
  // 出生点：由用户在原图（2401×1800）上用画图读取的精确坐标
  spawn: { x: 1331, y: 1441 },

  locations: [
    // 万象阁：专用场景（模型库，带品类筛选）
    // 新地图左上区域主建筑（带"万象阁"标识）
    { id: 'modelPavilion', name: '万象阁', sub: '模型库',
      x: 743, y: 693, scene: 'ModelPavilionScene',
      icon: 'assets/images/locations/modelPavilion.png',
      guide: {
        mapsTo: '模型库',
        url: '../models.html',
        desc: '仙侠里「万象」意为包罗万象。这里对应主站的【模型库】，收录 40+ 个大语言模型的横向对比——价格、中文体验、擅长项一目了然，帮你一眼看全谁强谁弱。'
      } },

    // 论剑台：通用场景，对比表
    // 擂台广场（带"论剑台"标识）
    { id: 'compareArena', name: '论剑台', sub: '对比',
      x: 1631, y: 1395, scene: 'GenericLocationScene', dataType: 'table',
      icon: 'assets/images/locations/compareArena.png',
      guide: {
        mapsTo: '横向对比',
        url: '../compare.html',
        desc: '「论剑台」是比武切磋之地。对应主站的【横向对比】：把多个模型拉到一张表里正面对决，参数、价格、擅长项同屏比较，谁更适合你一眼便知。'
      } },

    // 秘籍阁：通用场景，卡片列表+分类筛选（296 个技能）
    // 临水楼阁（带"秘籍阁"标识）
    { id: 'skillLibrary', name: '秘籍阁', sub: '技能包',
      x: 344, y: 1015, scene: 'GenericLocationScene', dataType: 'cards', dataKey: 'SKILLS',
      icon: 'assets/images/locations/skillLibrary.png',
      guide: {
        mapsTo: '技能包',
        url: '../skills.html',
        desc: '「秘籍」即独门武功。对应主站的【技能包】：别人调好的现成 AI 工作流（写周报、做 PPT、海报文案），拿来即用，不用自己从零写 prompt。'
      } },

    // 藏经阁：通用场景，文章列表（10 篇博客）
    // 右上区域楼阁（带"藏经阁"标识）
    { id: 'blogAcademy', name: '藏经阁', sub: '博客',
      x: 2175, y: 953, scene: 'GenericLocationScene', dataType: 'articles', dataKey: 'ARTICLES',
      icon: 'assets/images/locations/blogAcademy.png',
      guide: {
        mapsTo: '博客',
        url: '../blog/',
        desc: '「藏经阁」藏书万卷。对应主站的【博客】：我们写的 AI 使用心得、工具测评与避坑指南，偏「人话」教程，不像厂商说明书那么硬。'
      } },

    // 风云榜：通用场景，新闻列表（与主站 news.html 同数据源，标题直达来源）
    // 石碑（带"风云榜"标识）
    { id: 'newsHall', name: '风云榜', sub: '新闻',
      x: 1659, y: 795, scene: 'GenericLocationScene', dataType: 'news', dataKey: 'NEWS',
      icon: 'assets/images/locations/newsHall.png',
      guide: {
        mapsTo: '新闻',
        url: '../news.html',
        desc: '「风云榜」记录江湖大事。对应主站的【新闻】：聚合近期 AI 圈大事件——谁发新模型、谁降价、哪些功能上线，让你不错过风口。'
      } },

    // 问道路：通用场景，4 步点击问卷选型（与主站 picker.html 同规则）
    // 新地图下方桥南小路岔口的木牌（带"问道路"标识）
    { id: 'pickerPath', name: '问道路', sub: '选型助手',
      x: 1039, y: 1375, scene: 'GenericLocationScene', dataType: 'picker',
      icon: 'assets/images/locations/pickerPath.png',
      guide: {
        mapsTo: 'AI 选型器',
        url: '../picker.html',
        desc: '「问道路」即「该走哪条路」。对应主站的【AI 选型器】：回答 4 个问题（场景/经验/预算/偏好），自动推荐最适合你的 AI 模型，新手不踩坑。'
      } },

    // 迎宾客栈：通用场景，静态文本（关于 + 法律声明）
    // 新地图右侧风云榜石碑右下方的楼阁（带"迎宾客栈"标识）
    { id: 'aboutInn', name: '迎宾客栈', sub: '关于/法律',
      x: 1761, y: 1065, scene: 'GenericLocationScene', dataType: 'text',
      icon: 'assets/images/locations/aboutInn.png',
      guide: {
        mapsTo: '关于',
        url: '../about.html',
        desc: '「客栈」招待往来侠客。对应主站的【关于】页面：说明本站只做信息导航、不卖产品，以及法律声明与使用须知。'
      },
      text: '<p><b>AI 之家 · 仙侠篇</b></p>'
          + '<p>一个把"翻网页找 AI"变成"在仙侠世界逛地图"的实验。</p>'
          + '<p>所有 AI 信息来自公开资料，标注来源与更新日期。</p>'
          + '<hr>'
          + '<p><b>法律声明</b></p>'
          + '<p>本站不卖 AI 产品，仅做信息聚合与导航。各 AI 商标归原公司所有。'
          + '点击"前往官网"跳转官方页面，使用以官方条款为准。</p>'
          + '<p>本站不对 AI 输出内容准确性做担保，使用风险自负。</p>'
          + '<p style="color:#888">联系方式：暂用 GitHub Issues。</p>' },

    // 待开发区域：占位点，坐标为 (1029, 691)，玩家走近弹"敬请期待"。
    // 无 scene / 无 icon，仅作规划中标记；进入后侧边面板提示"敬请期待"。
    { id: 'tbdArea', name: '未开放秘境', sub: '待开发',
      x: 1029, y: 691,
      placeholder: true,
      guide: {
        desc: '此处正在规划建设中，敬请期待～ 后续会接入新的江湖秘境。'
      } },
  ],

  // 网状路径：根据地图上的小路连接各地点（画地面线条用）。
  // 当前不绘制地点间连线（用户要求去掉），如需恢复请填回连接对；WorldMapScene 里解除 this._drawPaths() 注释即可。
  paths: [],
};
