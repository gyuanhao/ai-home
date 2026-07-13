/**
 * 技能详情页生成器
 * 用法:
 *   node gen_skill_pages.js            -> 生成全部 271 个 skills/<slug>.html + js/skill-pages.js
 *   node gen_skill_pages.js docx       -> 仅生成 docx 这一个（用于预览/定稿）
 *
 * 文案策略: AI 统一生成（基于分类文案库 + 技能自身描述），不抓取 GitHub
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'js/skills-data.js');
const OUT_DIR = path.join(ROOT, 'skills');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const D = eval(fs.readFileSync(SRC, 'utf8').match(/const skillsData = (\[[\s\S]*\]);/)[1]);

// ---------------- 分类文案库 ----------------
const CAT_BANK = {
  '文档处理': {
    bullets: [
      '创建结构化文档：标题、段落、列表、表格、页眉页脚一应俱全',
      '编辑与润色：修改正文、统一格式、替换占位符',
      '解析与提取：读取文本、表格、图片等文档内容',
      '批量生成：基于模板一次产出多份差异化文档'
    ],
    example: '帮我生成一份项目周报文档，包含本周进度、风险和下周计划三个表格'
  },
  '创意设计': {
    bullets: [
      '生成视觉素材：插画、海报、图标等创意内容',
      '风格化与主题：套用专业配色与排版主题',
      '多格式导出：支持 PNG / PDF / SVG 等输出',
      '迭代修改：用自然语言微调画面元素'
    ],
    example: '帮我设计一张科技感的产品发布会海报，主色用深蓝'
  },
  '前端开发': {
    bullets: [
      '编写与重构 UI 组件，遵循现代前端最佳实践',
      '将设计稿（如 Figma）转化为生产就绪代码',
      '调试与优化：处理布局、响应式与性能问题',
      '集成主流框架：React / Vue / Next.js 等'
    ],
    example: '用 React + Tailwind 写一个带搜索和分页的用户列表页'
  },
  '开发工具': {
    bullets: [
      '自动化重复性开发任务，显著提升效率',
      '调用外部 API 与服务，扩展 AI 能力边界',
      '生成脚手架与配置，减少手工搭建',
      '与编辑器 / 终端集成，融入现有工作流'
    ],
    example: '帮我创建一个 MCP 服务器，把公司内部 API 接进来'
  },
  '内容创作': {
    bullets: [
      '撰写各类文案：文章、社媒、脚本、邮件等',
      '全流程辅助：从选题、草稿、润色到发布',
      '多平台适配：按渠道调整语气与格式',
      '配图与排版：配套生成视觉素材'
    ],
    example: '帮我写一篇关于 AI 办公的公众号推文，风格轻松易懂'
  },
  '测试': {
    bullets: [
      '自动化功能与界面测试，覆盖核心路径',
      '模拟真实用户操作，发现交互问题',
      '生成测试用例与回归脚本',
      '集成 CI，持续保障质量'
    ],
    example: '用 Playwright 写一个登录流程的端到端测试'
  },
  'AI/ML': {
    bullets: [
      '调用主流大模型 API，快速构建 AI 应用',
      '提示词工程与最佳实践指导',
      '模型微调、评估与上线部署',
      'RAG / Agent 等高级范式实现'
    ],
    example: '基于 Gemini 做一个带检索的问答机器人'
  },
  '图像': {
    bullets: [
      '文生图与图生图，生成高质量视觉素材',
      '风格迁移与局部重绘',
      '批量处理与尺寸适配',
      '导出多格式，便于后续使用'
    ],
    example: '生成一张扁平风格的电商主图，主题是夏日饮品'
  },
  '语音': {
    bullets: [
      '文本转语音，生成自然流畅的配音',
      '语音转文字，支持多语言与说话人分离',
      '音色与情感控制',
      '适配短视频、播客、有声内容'
    ],
    example: '把这段文案转成普通话配音，语速中等'
  },
  '视频': {
    bullets: [
      '文生视频与图生视频，快速产出短片',
      '混剪、字幕与节奏调整',
      '风格化滤镜与转场效果',
      '适配各社媒平台的尺寸与格式'
    ],
    example: '用 Sora 生成一段 10 秒的产品宣传短片'
  },
  '部署': {
    bullets: [
      '一键部署到主流云平台（Cloudflare / Vercel / Netlify 等）',
      '自动构建、绑定域名与配置环境变量',
      '回滚与多环境管理',
      '监控与日志接入'
    ],
    example: '把这个前端项目部署到 Cloudflare Pages 并绑定域名'
  },
  '后端开发': {
    bullets: [
      '编写 API 与微服务，遵循生产最佳实践',
      '数据库与缓存集成',
      '身份认证与权限控制',
      '部署与运维脚本编写'
    ],
    example: '用 Node 写一个带 JWT 鉴权的 REST API'
  },
  '数据库': {
    bullets: [
      '设计表结构与索引，优化查询性能',
      '编写与调试 SQL / 查询语句',
      '数据迁移与备份',
      '接入 ORM 与数据管道'
    ],
    example: '帮我优化这条慢查询并加上合适索引'
  },
  '安全': {
    bullets: [
      '代码与依赖的安全审查',
      '沙箱化执行，隔离运行风险',
      '漏洞扫描与修复建议',
      '密钥与凭证的安全管理'
    ],
    example: '审查这段代码的常见安全漏洞并给出修复方案'
  },
  '移动开发': {
    bullets: [
      '开发 iOS / Android 应用与跨端方案',
      '组件与页面搭建',
      '调用原生能力与 SDK',
      '打包与上架流程'
    ],
    example: '用 Flutter 写一个带底部导航的待办 App'
  },
  '营销': {
    bullets: [
      '撰写投放文案与落地页',
      '社媒内容与活动策划',
      '用户增长与转化优化',
      '数据驱动的投放分析'
    ],
    example: '写一组信息流广告文案，主打性价比'
  },
  '金融': {
    bullets: [
      '金融数据分析与可视化',
      '研报、周报等文档自动生成',
      '风控与合规辅助',
      '量化策略原型搭建'
    ],
    example: '帮我整理这份财报的关键指标并做成图表'
  },
  '效率工具': {
    bullets: [
      '自动化日常重复操作',
      '信息整理与摘要生成',
      '跨应用的数据流转',
      '个人工作流搭建'
    ],
    example: '把这几份会议纪要整理成一份行动清单'
  },
  '数据分析': {
    bullets: [
      '数据清洗与预处理',
      '统计分析与可视化',
      '洞察提取与报告生成',
      '对接常见数据源与仓库'
    ],
    example: '分析这份销售数据，找出增长最快的品类'
  },
  '内容管理': {
    bullets: [
      '内容结构的组织与维护',
      '批量编辑与发布',
      '元数据与标签管理',
      '多站点内容同步'
    ],
    example: '把这批文章按分类重新打标签并归档'
  },
  '搜索': {
    bullets: [
      '构建检索与问答能力',
      '索引管理与优化',
      '结果排序与相关性调优',
      '对接向量数据库'
    ],
    example: '给公司内部文档做一个可问答的搜索引擎'
  },
  '数字人': {
    bullets: [
      '生成数字人形象与动作',
      '配音与口型同步',
      '脚本驱动的播报视频',
      '适配直播与短视频场景'
    ],
    example: '做一个数字人播报短视频，讲今天的三条科技新闻'
  },
  '设计': {
    bullets: [
      '界面与交互设计建议',
      '设计系统与设计令牌管理',
      '原型与高保真稿输出',
      '可用性评审'
    ],
    example: '给这个后台系统做一套配色和组件规范'
  },
  '资源合集': {
    bullets: [
      '聚合某领域的优质资源',
      '分类整理与索引',
      '持续更新与去重',
      '一键检索与导出'
    ],
    example: '整理一份前端学习资源清单，按难度分类'
  },
  '3D': {
    bullets: [
      '生成 3D 模型与场景',
      '材质与光照调整',
      '模型优化与导出',
      '适配 Web / 游戏 / 渲染'
    ],
    example: '生成一个简约风格的 3D 产品展示模型'
  },
  'Web3': {
    bullets: [
      '智能合约编写与审查',
      '链上数据查询与分析',
      'DApp 原型搭建',
      '钱包与交易集成'
    ],
    example: '帮我写一个代币转账的 Solidity 合约并做安全审查'
  },
  '监控': {
    bullets: [
      '指标采集与看板搭建',
      '告警规则配置',
      '日志聚合与溯源',
      '性能与可用性分析'
    ],
    example: '给这个服务加上核心接口的监控和告警'
  },
  '云服务': {
    bullets: [
      '云资源编排与配置',
      '成本分析与优化',
      '基础设施即代码（IaC）',
      '多云统一管理'
    ],
    example: '用 Terraform 搭一套带负载均衡的 Web 架构'
  }
};
const GENERIC = {
  bullets: [
    '完成该领域的核心任务，减少手工操作',
    '与 AI 自然语言协作，无需编写复杂代码',
    '可与其他技能组合，形成自动化工作流',
    '结果可直接交付或继续迭代修改'
  ],
  example: '用「{name}」帮我处理一个相关需求'
};

function bankFor(cat) { return CAT_BANK[cat] || GENERIC; }
function esc(t) {
  return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// ---------------- 唯一 slug ----------------
const used = {};
function slugFor(s) {
  let base = s.name + (s.source === 'anbeime' ? '-anb' : '');
  let slug = base, n = 2;
  while (used[slug]) slug = base + '-' + (n++);
  used[slug] = true;
  return slug;
}

// ---------------- 页面模板 ----------------
function buildPage(s, idx, slug) {
  const isAnb = s.source === 'anbeime';
  const SOURCE_LABELS = { anbeime: 'anbeime', voltagent: 'VoltAgent', community: '社区精选' };
  const srcLabel = SOURCE_LABELS[s.source] || '社区精选';
  const srcCls = isAnb ? 'sd-tag--source-a' : 'sd-tag--source-v';
  const b = bankFor(s.cat);
  const overview = s.descZh || s.desc;
  const bullets = b.bullets.map(x => '<li>' + esc(x) + '</li>').join('');
  const example = (b.example || GENERIC.example).replace('{name}', s.nameZh);
  const steps = [
    '在支持 Skill 的 AI 客户端（如 Claude、CodeBuddy）中安装「' + esc(s.nameZh) + '」技能',
    '用自然语言描述你的需求，例如：' + esc(example),
    'AI 会自动调用该技能完成任务，并在对话中交付结果',
    '需要修改时，直接告诉 AI 调整点，无需从头再来'
  ].map((t, i) => '<li><b>第 ' + (i + 1) + ' 步：</b>' + t + '</li>').join('');

  const title = esc(s.nameZh) + ' 是什么？功能介绍与使用方式 | AI家AI户';
  const desc = esc(s.nameZh) + '（' + esc(s.name) + '）— ' + esc(overview) + ' 由 ' + esc(s.team) + ' 提供，来源 ' + srcLabel + '。查看功能介绍、使用方式与官方来源链接。';
  const url = 'https://myaishome.com/skills/' + slug + '.html';
  const jsonld = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: s.nameZh,
    alternateName: s.name,
    description: overview,
    applicationCategory: 'AIApplication',
    operatingSystem: 'Web',
    url: url,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' }
  });

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${desc}">
    <meta name="keywords" content="${esc(s.nameZh)},${esc(s.name)},AI技能,${esc(s.cat)},Agent技能">
    <title>${title}</title>
    <link rel="canonical" href="${url}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${desc}">
    <meta property="og:url" content="${url}">
    <meta property="og:type" content="article">
    <meta property="og:locale" content="zh_CN">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${desc}">
    <meta name="google-site-verification" content="xt9f05QoKT1xpnVg94WeUsSOYPO88A3CT1j57ePzKZ8" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-TBTFSXQ6NF"></script>
    <script>
      window.dataLayer=window.dataLayer||[];
      function gtag(){dataLayer.push(arguments);}
      gtag('js',new Date());
      gtag('config','G-TBTFSXQ6NF');
    </script>
    <link rel="stylesheet" href="../css/style.css">
    <script type="application/ld+json">${jsonld}</script>
</head>
<body>

<aside class="sidebar" id="sidebar">
    <a href="../index.html" class="sidebar-logo">
        <svg width="26" height="26" class="logo-icon" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        AI家AI户
    </a>
    <nav class="sidebar-nav">
        <ul class="sidebar-links">
            <li><a href="../index.html" class="sidebar-link">首页</a></li>
            <li><a href="../models.html" class="sidebar-link">模型库</a></li>
            <li><a href="../compare.html" class="sidebar-link">横向对比</a></li>
            <li><a href="../compare-custom.html" class="sidebar-link">自定义对比</a></li>
            <li><a href="../vs/" class="sidebar-link">热门对比</a></li>
            <li><a href="../picker.html" class="sidebar-link">AI选型器</a></li>
            <li><a href="../news.html" class="sidebar-link">新闻</a></li>
            <li><a href="../skills.html" class="sidebar-link active">技能包</a></li>
            <li><a href="../about.html" class="sidebar-link">关于</a></li>
        </ul>
    </nav>
    <div class="sidebar-footer">
        <button id="langSwitch" onclick="switchLang()" class="sidebar-lang-btn">EN</button>
    </div>
</aside>
<button class="sidebar-toggle" onclick="toggleSidebar()" aria-label="menu">&#9776;</button>

<div class="sidebar-overlay" id="sidebarOverlay" onclick="closeSidebar()"></div>
<div class="sidebar-drawer" id="sidebarDrawer">
    <div class="drawer-head">
        <span class="d-logo">🏠 AI家AI户</span>
        <button class="drawer-close-btn" onclick="closeSidebar()" aria-label="close">&#10005;</button>
    </div>
    <nav class="sidebar-nav">
        <ul class="sidebar-links">
            <li><a href="../index.html" class="sidebar-link">首页</a></li>
            <li><a href="../models.html" class="sidebar-link">模型库</a></li>
            <li><a href="../compare.html" class="sidebar-link">横向对比</a></li>
            <li><a href="../compare-custom.html" class="sidebar-link">自定义对比</a></li>
            <li><a href="../vs/" class="sidebar-link">热门对比</a></li>
            <li><a href="../picker.html" class="sidebar-link">AI选型器</a></li>
            <li><a href="../news.html" class="sidebar-link">新闻</a></li>
            <li><a href="../skills.html" class="sidebar-link">技能包</a></li>
            <li><a href="../about.html" class="sidebar-link">关于</a></li>
        </ul>
    </nav>
    <div class="sidebar-footer"><button onclick="switchLang();closeSidebar();" class="sidebar-lang-btn">EN</button></div>
</div>

<main class="main-content">
<div class="container">
    <div class="breadcrumb"><a href="../index.html">首页</a> › <a href="../skills.html">技能包</a> › <span>${esc(s.nameZh)}</span></div>
    <h1 style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">${esc(s.nameZh)} <span style="font-size:18px;color:var(--text-secondary);font-family:monospace;font-weight:400;">${esc(s.name)}</span></h1>
    <div class="sd-tags">
        <span class="sd-tag ${srcCls}">来源 · ${srcLabel}</span>
        <span class="sd-tag sd-tag--cat">分类 · ${esc(s.cat)}</span>
        <span class="sd-tag sd-tag--team">团队 · ${esc(s.team)}</span>
    </div>

    <h2 class="sd-section">一、功能概述</h2>
    <p class="sd-overview">${esc(overview)}。该技能让 AI 在「${esc(s.cat)}」领域具备专项能力，适合希望通过自然语言快速完成相关任务的用户。</p>

    <h2 class="sd-section">二、功能介绍</h2>
    <ul class="sd-list">${bullets}</ul>

    <h2 class="sd-section">三、使用方式</h2>
    <ol class="sd-list sd-steps">${steps}</ol>

    <h2 class="sd-section">四、来源信息</h2>
    <table class="sd-meta">
        <tr><td>来源仓库</td><td><a class="sd-source-link" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.url)}</a></td></tr>
        <tr><td>提供方</td><td>${esc(s.team)}${isAnb ? '（社区技能）' : '（官方技能）'}</td></tr>
        <tr><td>开源许可</td><td>详见来源仓库，多为 Apache 2.0 / MIT 等开源许可</td></tr>
    </table>

    <p style="margin-top:28px;"><a class="sd-back" href="../skills.html">← 返回技能包列表</a></p>
</div>

<footer class="footer">
    <p>本站仅做聚合索引，具体安装与使用规则请查阅各技能的来源仓库。技能（Skills）是 AI Agent 的"插件"，安装后赋予 AI 专项能力。</p>
    <p style="margin-top:6px;font-size:13px;"><a href="../privacy.html">隐私政策</a></p>
</footer>

<script src="../js/cookie-consent.js"></script>
<script src="../js/mobile-nav.js"></script>
</main>
</body>
</html>`;
}

// ---------------- 执行 ----------------
const onlyName = process.argv[2];
const targets = onlyName ? D.filter(s => s.name === onlyName) : D;
if (onlyName && targets.length === 0) { console.error('未找到技能:', onlyName); process.exit(1); }

const pagesMap = [];
D.forEach((s, i) => { pagesMap[i] = null; });

targets.forEach(s => {
  const idx = D.indexOf(s);
  const slug = slugFor(s);
  pagesMap[idx] = 'skills/' + slug + '.html';
  fs.writeFileSync(path.join(OUT_DIR, slug + '.html'), buildPage(s, idx, slug), 'utf8');
  console.log('✓', slug, '<-', s.nameZh);
});

// 全量模式：写出索引映射，供 skills.html 卡片跳转
if (!onlyName) {
  const arr = pagesMap.map(p => p || '');
  fs.writeFileSync(path.join(ROOT, 'js/skill-pages.js'),
    '// 自动生成：技能详情页路径映射，索引与 skillsData 对齐\nconst skillPages = ' +
    JSON.stringify(arr, null, 0) + ';\n', 'utf8');
  console.log('\n✅ 共生成', targets.length, '个详情页 + js/skill-pages.js');
} else {
  console.log('\n（预览模式）仅生成', targets.length, '个页面，未写 skill-pages.js');
}
