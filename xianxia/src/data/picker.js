/* ============================================================
 * 选型器问卷数据 (src/data/picker.js)
 * 与主站 js/picker.js 同规则，所有文案固定中文，不依赖 i18n。
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.PICKER_QUESTIONS = [
  {
    key: 'scene',
    question: '第一步：你主要想用 AI 做什么？',
    options: [
      { value: 'code',    emoji: '💻', label: '写代码 / 调试', desc: '编程、代码审查、Debug、重构项目' },
      { value: 'writing', emoji: '✍️', label: '写文章 / 文案', desc: '公众号、小说、报告、邮件、翻译润色' },
      { value: 'image',   emoji: '🎨', label: '画图 / 设计',   desc: '海报、插画、头像、商品图、LOGO' },
      { value: 'search',  emoji: '🔍', label: '搜索研究',      desc: '读论文、查资料、做调研、写综述' },
      { value: 'video',   emoji: '🎬', label: '做视频',        desc: '短视频、广告片、动画、电影感镜头' },
      { value: 'chat',    emoji: '🤖', label: '日常聊天 / 问答', desc: '随便问、查天气、头脑风暴、陪伴' },
    ]
  },
  {
    key: 'experience',
    question: '第二步：你用过多少 AI 工具？',
    options: [
      { value: 'newbie',  emoji: '🌱', label: '新手',  desc: '刚接触，希望零门槛上手' },
      { value: 'some',    emoji: '🌿', label: '用过几款', desc: '用过 ChatGPT/DeepSeek 等，有基本判断' },
      { value: 'expert',  emoji: '🌳', label: '老手',  desc: '能写 prompt、会调参数、追求极致' },
    ]
  },
  {
    key: 'budget',
    question: '第三步：你的预算范围？',
    options: [
      { value: 'free',      emoji: '🆓', label: '免费优先',  desc: '零预算，能白嫖就白嫖' },
      { value: 'moderate',  emoji: '💰', label: '轻度付费',  desc: '每月 ¥50–150 / $10–20 可接受' },
      { value: 'unlimited', emoji: '💎', label: '预算充足',  desc: '只要最好，价格不敏感' },
    ]
  },
  {
    key: 'personality',
    question: '第四步：你更在意什么？',
    options: [
      { value: 'pragmatist', emoji: '🔧', label: '稳定实用',  desc: '成熟、可靠、不出幺蛾子' },
      { value: 'creator',    emoji: '🎨', label: '创作质量',  desc: '输出细腻、有审美、有深度' },
      { value: 'efficiency', emoji: '🚀', label: '效率至上',  desc: '快、能批量、能自动化' },
      { value: 'privacy',    emoji: '🔒', label: '隐私/免翻墙', desc: '国内可用、数据可控、不折腾' },
    ]
  }
];

// 推荐规则矩阵：{ scene, experience, budget, personality } → { main, a1, a2, reason }
// 与主站 picker.js 保持一致，reason 固定中文
AIHome.PICKER_RULES = [
  // ===== 写代码 =====
  { s:'code', e:'newbie', b:'free', p:'pragmatist', main:'tongyi-lingma', a1:'deepseek', a2:'comate', reason:'通义灵码个人版完全免费，阿里出品稳定可靠，中文界面零门槛上手。备选 DeepSeek V4 编程能力强且免费，文心快码也是免费国产好选择。' },
  { s:'code', e:'newbie', b:'free', p:'creator',    main:'deepseek', a1:'tongyi-lingma', a2:'windsurf', reason:'DeepSeek V4 推理和编程能力极强且完全免费，是零预算下最能打的编程模型。通义灵码免费稳定，Windsurf 免费版也比 Cursor 大方。' },
  { s:'code', e:'newbie', b:'free', p:'efficiency',  main:'deepseek', a1:'codex', a2:'tongyi-lingma', reason:'DeepSeek V4 免费且响应快，编程效率高。Codex CLI 开源免费可本地运行，通义灵码免费且中文友好。' },
  { s:'code', e:'newbie', b:'free', p:'privacy',     main:'tongyi-lingma', a1:'deepseek', a2:'comate', reason:'通义灵码完全免费、国内直接使用、无需翻墙。DeepSeek 同样免费国产，文心快码也是国内免翻墙的选择。' },
  { s:'code', e:'newbie', b:'moderate', p:'pragmatist', main:'github-copilot', a1:'windsurf', a2:'tongyi-lingma', reason:'GitHub Copilot $10/月最成熟稳定，VS Code 深度集成。Windsurf 免费版已经很能打，通义灵码完全免费做备选。' },
  { s:'code', e:'newbie', b:'moderate', p:'creator',    main:'cursor', a1:'github-copilot', a2:'deepseek', reason:'Cursor Pro $20/月体验天花板，多文件 Agent 编辑远超插件类。Copilot $10/月也不错，DeepSeek 免费但编程能力出众。' },
  { s:'code', e:'newbie', b:'moderate', p:'efficiency',  main:'cursor', a1:'windsurf', a2:'codex', reason:'Cursor Agent 模式效率最高，一句话改全项目。Windsurf Pro $15/月性价比好，Codex CLI 开源免费。' },
  { s:'code', e:'newbie', b:'moderate', p:'privacy',     main:'cursor', a1:'tongyi-lingma', a2:'deepseek', reason:'Cursor Pro $20/月体验最好，不想花钱就用通义灵码（完全免费）。DeepSeek 也是免费国产强选。' },
  { s:'code', e:'newbie', b:'unlimited', p:'pragmatist', main:'github-copilot', a1:'cursor', a2:'codex', reason:'Copilot 成熟稳定、全球最多开发者用。Cursor 体验更极致，Codex CLI 开源可控。' },
  { s:'code', e:'newbie', b:'unlimited', p:'creator',    main:'claude-code', a1:'cursor', a2:'codex', reason:'Claude Code Fable 5 登顶编程榜，复杂项目重构能力碾压。Cursor IDE 体验丝滑，Codex 开源无限用。' },
  { s:'code', e:'newbie', b:'unlimited', p:'efficiency',  main:'cursor', a1:'claude-code', a2:'codex', reason:'Cursor Agent 模式效率最高，IDE 内一站式完成编码。Claude Code 编程最强但纯终端，Codex 开源免费。' },

  { s:'code', e:'some', b:'free', p:'pragmatist', main:'deepseek', a1:'tongyi-lingma', a2:'windsurf', reason:'DeepSeek V4 免费且编程能力强，用过几款工具后你会更懂它的价值。通义灵码稳定免费，Windsurf 免费版也不错。' },
  { s:'code', e:'some', b:'free', p:'creator',    main:'deepseek', a1:'minimax-m3', a2:'codex', reason:'DeepSeek V4 免费编程最强。MiniMax M3 开源且编程能力强，Codex CLI 开源免费可本地跑。' },
  { s:'code', e:'some', b:'free', p:'efficiency',  main:'deepseek', a1:'codex', a2:'windsurf', reason:'DeepSeek V4 免费高效。Codex CLI 开源可本地跑不限额度，Windsurf 免费版 IDE 体验流畅。' },
  { s:'code', e:'some', b:'free', p:'privacy',     main:'deepseek', a1:'tongyi-lingma', a2:'minimax-m3', reason:'DeepSeek 完全免费国产，无需翻墙。通义灵码同样国产免费，MiniMax M3 开源可控可本地部署。' },

  { s:'code', e:'expert', b:'free', p:'pragmatist', main:'deepseek', a1:'codex', a2:'tongyi-lingma', reason:'DeepSeek V4 免费且推理上乘，老手用得明白。Codex CLI 开源可调，通义灵码企业版免费。' },
  { s:'code', e:'expert', b:'free', p:'creator',    main:'minimax-m3', a1:'deepseek', a2:'codex', reason:'MiniMax M3 开源可定制，编程能力出众。DeepSeek 免费强力备选，Codex 开源自由。' },
  { s:'code', e:'expert', b:'free', p:'efficiency',  main:'deepseek', a1:'codex', a2:'minimax-m3', reason:'DeepSeek V4 免费高效无上限。Codex CLI 开源本地跑，MiniMax M3 开源 API 可用。' },

  { s:'code', e:'expert', b:'unlimited', p:'creator',    main:'claude-code', a1:'cursor', a2:'minimax-m3', reason:'Claude Code Fable 5 编程榜冠军，老手才能榨干它的潜力。Cursor IDE 一体化体验极致，MiniMax M3 开源可魔改。' },
  { s:'code', e:'expert', b:'unlimited', p:'efficiency',  main:'cursor', a1:'claude-code', a2:'codex', reason:'Cursor 完整 Agent 模式效率拉满。Claude Code 深度重构能力最强，Codex 开源无限可定制。' },
  { s:'code', e:'expert', b:'unlimited', p:'pragmatist', main:'cursor', a1:'github-copilot', a2:'claude-code', reason:'Cursor Pro $20/月功能最全最稳定。Copilot 成熟可靠，Claude Code 适合超复杂项目。' },
  { s:'code', e:'expert', b:'unlimited', p:'privacy',     main:'cursor', a1:'minimax-m3', a2:'deepseek', reason:'Cursor 本地 IDE 数据可控。MiniMax M3 开源可本地部署，DeepSeek 免费国产。' },

  // ===== 写作 =====
  { s:'writing', e:'newbie', b:'free', p:'pragmatist', main:'kimi', a1:'deepseek', a2:'qwen', reason:'Kimi 免费版日常写作完全够用，长文处理和语气把控到位。DeepSeek 通用能力强且免费，通义千问也很稳定。' },
  { s:'writing', e:'newbie', b:'free', p:'creator',    main:'kimi', a1:'deepseek', a2:'chatgpt', reason:'Kimi 中文写作公认最细腻，超长上下文能读完一本小说。DeepSeek 免费全能，ChatGPT 免费版英文写作也够用。' },
  { s:'writing', e:'newbie', b:'free', p:'privacy',     main:'kimi', a1:'deepseek', a2:'qwen', reason:'Kimi 国产无需翻墙，中文写作体验最佳。DeepSeek 和通义千问也是免翻墙的国产好选择。' },
  { s:'writing', e:'some', b:'free', p:'creator',    main:'kimi', a1:'deepseek', a2:'claude', reason:'Kimi 中文长文写作天花板。DeepSeek 免费强力通用，Claude 免费版写作质量也很高。' },
  { s:'writing', e:'some', b:'moderate', p:'creator',main:'kimi', a1:'claude', a2:'chatgpt', reason:'Kimi 付费解锁完整写作能力。Claude Pro 写作细腻度公认最优，ChatGPT Plus 综合体验最稳。' },
  { s:'writing', e:'expert', b:'unlimited', p:'creator', main:'claude', a1:'kimi', a2:'chatgpt', reason:'Claude Opus 写作天花板，语气细腻、逻辑严谨。Kimi 中文写作仍是首选，ChatGPT Plus 综合最强。' },
  { s:'writing', e:'expert', b:'unlimited', p:'efficiency', main:'claude', a1:'chatgpt', a2:'deepseek', reason:'Claude Opus 专业写作效率最高。ChatGPT Plus 多模态一体化，DeepSeek 免费备用。' },

  // ===== 图片 =====
  { s:'image', e:'newbie', b:'free', p:'pragmatist', main:'jimeng', a1:'dalle', a2:'stable-diffusion', reason:'即梦（字节出品）中文 Prompt 零门槛，免费额度大方。DALL-E 在 ChatGPT 免费版里可用，Stable Diffusion 开源但需技术。' },
  { s:'image', e:'newbie', b:'free', p:'privacy',     main:'jimeng', a1:'stable-diffusion', a2:'dalle', reason:'即梦国产免翻墙、中文好用。Stable Diffusion 开源可本地部署数据不外传，DALL-E 需翻墙。' },
  { s:'image', e:'some', b:'moderate', p:'creator',  main:'midjourney', a1:'dalle', a2:'jimeng', reason:'Midjourney V7 图像质量天花板，$10/月即可入门。DALL-E 3.5 与 ChatGPT 深度集成极方便，即梦免费好用。' },
  { s:'image', e:'expert', b:'unlimited', p:'creator', main:'midjourney', a1:'flux', a2:'stable-diffusion', reason:'Midjourney V7 + Niji 7 画质和风格把控业界第一。FLUX 文字渲染精准（海报/LOGO），SD 开源可魔改。' },
  { s:'image', e:'expert', b:'unlimited', p:'efficiency', main:'midjourney', a1:'flux', a2:'dalle', reason:'Midjourney 出图效率最高质量最好。FLUX 速度快且文字渲染精准，DALL-E 自然语言描述最省事。' },

  // ===== 搜索研究 =====
  { s:'search', e:'newbie', b:'free', p:'pragmatist', main:'deepseek', a1:'kimi', a2:'qwen', reason:'DeepSeek V4 推理能力强且完全免费，适合深度研究。Kimi 长文本处理和分析出色，通义千问企业级可靠。' },
  { s:'search', e:'some', b:'moderate', p:'creator',main:'claude', a1:'deepseek', a2:'gemini', reason:'Claude Pro 长文档分析+严谨推理最适合研究。DeepSeek 免费强力备选，Gemini 有 Google 搜索加持。' },
  { s:'search', e:'expert', b:'unlimited', p:'efficiency', main:'claude', a1:'chatgpt', a2:'gemini', reason:'Claude Opus 深度分析和推理无敌。ChatGPT Plus 综合能力强，Gemini 集成 Google 生态实时搜索。' },

  // ===== 视频 =====
  { s:'video', e:'newbie', b:'free', p:'pragmatist', main:'kling', a1:'hailuo-video', a2:'pika', reason:'可灵（快手出品）免费额度大方、中文零门槛、生成速度快。海螺视频也是国产免费好选，Pika 趣味性强。' },
  { s:'video', e:'some', b:'moderate', p:'creator', main:'runway', a1:'kling', a2:'pika', reason:'Runway Gen-4 功能最全面（生成+后期+音频），$15/月性价比高。可灵国产免费备用，Pika 入门便宜。' },
  { s:'video', e:'expert', b:'unlimited', p:'creator', main:'sora', a1:'runway', a2:'veo', reason:'Sora 影视级画质天花板，物理光影极其逼真。Runway 专业后期工具最全，Veo 与 Gemini 集成一站式。' },

  // ===== 日常聊天 =====
  { s:'chat', e:'newbie', b:'free', p:'pragmatist', main:'deepseek', a1:'qwen', a2:'kimi', reason:'DeepSeek V4 完全免费且综合能力强，日常使用完全够用。通义千问阿里出品稳定，Kimi 对话体验好。' },
  { s:'chat', e:'newbie', b:'free', p:'privacy',     main:'deepseek', a1:'qwen', a2:'kimi', reason:'DeepSeek 国产免费免翻墙，日常聊天最省心。通义千问和 Kimi 同样是无需翻墙的国产好选择。' },
  { s:'chat', e:'some', b:'moderate', p:'creator',   main:'claude', a1:'chatgpt', a2:'deepseek', reason:'Claude Pro 日常对话最自然。ChatGPT Plus 多模态一体化方便，DeepSeek 免费强力备用。' },
  { s:'chat', e:'expert', b:'unlimited', p:'pragmatist', main:'chatgpt', a1:'claude', a2:'gemini', reason:'ChatGPT Plus $20/月综合体验最稳定。Claude 对话更细腻，Gemini 有 Google 生态加持。' },
];

AIHome.PICKER_FALLBACK = {
  main:'deepseek', a1:'kimi', a2:'qwen',
  reason:'DeepSeek V4 是完全免费的通用 AI，中文原生体验极好，适合大多数场景。Kimi 写作出色，通义千问企业级可靠。'
};
