/* ============================================================
 * 文章数据 (src/data/articles.js)
 * 作用：藏经阁（博客）/ 风云榜（新闻）展示的文章列表。
 * 基于原站 blog/ 的 10 篇文章手动整理（标题 + 摘要 + 原文链接）。
 * 链接暂指向原站 myaishome.com，后续可改为站内跳转。
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.ARTICLES = [
  { title: '2026 AI Agent 完全指南', cat: 'Agent', date: '2026-07',
    summary: 'AI Agent 是什么、怎么选、怎么用，面向中文用户的入门指南。',
    url: 'https://myaishome.com/blog/ai-agent-guide-2026.html' },
  { title: '2026 AI 选购指南', cat: '选购', date: '2026-07',
    summary: '不同场景该选哪个 AI，从免费到付费的实用建议。',
    url: 'https://myaishome.com/blog/ai-buying-guide-2026.html' },
  { title: 'AI 编程工具横评', cat: '编程', date: '2026-07',
    summary: '主流 AI 编程工具对比，哪个适合你的开发流程。',
    url: 'https://myaishome.com/blog/ai-coding-tools-comparison-2026.html' },
  { title: 'AI 图像模型横评', cat: '图像', date: '2026-07',
    summary: '主流 AI 画图模型对比，画质、速度、价格全维度。',
    url: 'https://myaishome.com/blog/ai-image-models-comparison-2026.html' },
  { title: '2026 AI 价格战', cat: '行业', date: '2026-07',
    summary: '各大 AI 厂商价格大降，免费与付费格局怎么变。',
    url: 'https://myaishome.com/blog/ai-price-war-2026.html' },
  { title: 'AI 提效免费工具', cat: '提效', date: '2026-07',
    summary: '零预算也能用的 AI 提效工具合集。',
    url: 'https://myaishome.com/blog/ai-productivity-free-2026.html' },
  { title: 'AI 视频模型评测', cat: '视频', date: '2026-07',
    summary: '主流 AI 视频生成模型实测对比。',
    url: 'https://myaishome.com/blog/ai-video-models-review-2026.html' },
  { title: '把一本书变成 AI 技能', cat: '实战', date: '2026-07',
    summary: 'book-to-skill 实战：怎么把一本书喂给 AI 变成可复用技能。',
    url: 'https://myaishome.com/blog/book-to-skill-experience-2026.html' },
  { title: 'DeepSeek vs ChatGPT/Claude', cat: '横评', date: '2026-07',
    summary: '国产免费 DeepSeek 对比海外两大主流，谁更适合中文用户。',
    url: 'https://myaishome.com/blog/deepseek-vs-chatgpt-claude-2026.html' },
  { title: '国产 vs 海外 AI', cat: '行业', date: '2026-07',
    summary: '国产 AI 和海外 AI 的整体对比与选择建议。',
    url: 'https://myaishome.com/blog/domestic-vs-overseas-ai-2026.html' },
];
