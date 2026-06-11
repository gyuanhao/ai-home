// AI家AI户 - 模型数据
const models = [
    {
        id: "chatgpt",
        name: "ChatGPT",
        company: "OpenAI（美国）",
        category: "语言模型",
        pricing: "freemium",
        priceLabel: "免费 / Plus $20/月",
        priceDetail: "免费版（GPT-5.4 mini）; Plus $20/月（GPT-5.5）; Pro $200/月（GPT-5.5 Pro）",
        website: "https://chat.openai.com",
        tags: ["写作", "编程", "图像生成", "语音", "多模态"],
        strengths: "综合能力最强，图像生成（DALL-E）、语音对话、文件分析一应俱全。Plus 20美元/月即可解锁主力模型",
        weaknesses: "免费版配额受限；需科学上网；国内直接访问不支持",
        bestFor: "日常写作、创意脑暴、通用问答、图像生成",
        chineseSupport: "★★★★☆ 中文流畅，偶有翻译腔",
        contextWindow: "128K tokens",
        apiAvailable: true,
        released: "2022年11月首发",
        lastUpdated: "2026-06-11",
        source: "openai.com / aipricecompare.org"
    },
    {
        id: "claude",
        name: "Claude",
        company: "Anthropic（美国）",
        category: "语言模型",
        pricing: "freemium",
        priceLabel: "免费 / Pro $20/月",
        priceDetail: "免费版（Sonnet 4.6）; Pro $20/月（Fable 5 + Opus 4.8）; Max $100-200/月",
        website: "https://claude.ai",
        tags: ["写作", "编程", "长文档", "推理", "深度分析"],
        strengths: "长文档处理能力极强，严谨推理，编程能力顶尖。Project 功能可管理多个对话上下文",
        weaknesses: "免费版每日限额较严；图像生成能力弱；需科学上网",
        bestFor: "长文档分析、学术写作、复杂代码项目、报告撰写",
        chineseSupport: "★★★★☆ 中文表现优异，语气自然",
        contextWindow: "200K tokens",
        apiAvailable: true,
        released: "2023年3月首发",
        lastUpdated: "2026-06-11",
        source: "anthropic.com / aipricecompare.org"
    },
    {
        id: "gemini",
        name: "Gemini",
        company: "Google（美国）",
        category: "语言模型",
        pricing: "freemium",
        priceLabel: "免费 / AI Pro $19.99/月",
        priceDetail: "免费版（Gemini 2.5 Flash）; AI Plus $9.99/月; AI Pro $19.99/月（Gemini 3.1 Pro）; Ultra $249.99/月",
        website: "https://gemini.google.com",
        tags: ["多模态", "搜索", "视频生成", "长上下文", "Google生态"],
        strengths: "Google生态深度整合（Gmail/Docs/Drive）；视频生成（Veo）；1M Token 超长上下文",
        weaknesses: "中文不如国产模型细腻；部分功能国内受限；Google服务需特殊网络环境",
        bestFor: "Google Workspace用户、视频生成、多模态任务、超长文本处理",
        chineseSupport: "★★★☆☆ 中文可用，但不如国产模型精准",
        contextWindow: "1M tokens",
        apiAvailable: true,
        released: "2023年12月首发",
        lastUpdated: "2026-06-11",
        source: "gemini.google.com / aipricecompare.org"
    },
    {
        id: "deepseek",
        name: "DeepSeek",
        company: "深度求索（中国）",
        category: "语言模型",
        pricing: "free",
        priceLabel: "完全免费",
        priceDetail: "全部功能免费，无付费墙，无广告。API 按量计费（约 $0.14-0.28/百万Token）",
        website: "https://chat.deepseek.com",
        tags: ["免费", "推理", "编程", "数学", "中文原生"],
        strengths: "完全免费无限制使用；推理能力极强（思维链）；数学和编程表现优异；中文原生",
        weaknesses: "高峰期可能排队；图像/多模态能力有限；不支持联网搜索",
        bestFor: "预算敏感的开发者、学生、需要高频深度推理的场景",
        chineseSupport: "★★★★★ 中文原生模型，表现极佳",
        contextWindow: "128K tokens",
        apiAvailable: true,
        released: "2023年推出，V4 2025年底发布",
        lastUpdated: "2026-06-11",
        source: "deepseek.com / aipricecompare.org"
    },
    {
        id: "qwen",
        name: "通义千问 (Qwen)",
        company: "阿里巴巴（中国）",
        category: "语言模型",
        pricing: "freemium",
        priceLabel: "免费 / API按量付费",
        priceDetail: "APP端和网页端基础功能免费。API：输入约 ¥20/百万Token，输出约 ¥60/百万Token。新用户送7000万Token免费额度",
        website: "https://tongyi.aliyun.com",
        tags: ["中文", "阿里生态", "企业级", "多模态", "开源"],
        strengths: "Qwen3.7-Max旗舰模型性能强劲；阿里云生态深度集成；开源社区活跃（HuggingFace热门）",
        weaknesses: "APP端和API端权益分离；网页版功能不如APP全面",
        bestFor: "阿里云用户、企业级应用、中文场景、对开源有需求的开发者",
        chineseSupport: "★★★★★ 阿里巴巴出品，中文能力一流",
        contextWindow: "256K tokens（Qwen-Long）",
        apiAvailable: true,
        released: "2023年首发，Qwen3.7-Max 2026年5月更新",
        lastUpdated: "2026-06-11",
        source: "aliyun.com / yangmao.ai"
    },
    {
        id: "glm",
        name: "智谱清言 (GLM)",
        company: "智谱AI（中国）",
        category: "语言模型",
        pricing: "freemium",
        priceLabel: "免费 / Coding Plan ¥9.9起",
        priceDetail: "GLM-4.7-Flash 免费使用。Coding Plan：Lite 免费 / Pro ¥49/月 / Max ¥99/月",
        website: "https://chatglm.cn",
        tags: ["编程", "中文", "开源", "Agent", "智谱生态"],
        strengths: "GLM-4.7系列编程能力突出；Coding Plan 性价比高；中文生态完善（MCP工具、Agent平台）",
        weaknesses: "通用任务不如GPT/Claude前端；部分高级功能需付费",
        bestFor: "编程辅助、中文任务、需要Agent/工具链的开发者",
        chineseSupport: "★★★★★ 清华系团队出品，中文理解精确",
        contextWindow: "203K tokens（GLM-4.7-Flash）",
        apiAvailable: true,
        released: "2023年首发，GLM-4.7系列 2026年更新",
        lastUpdated: "2026-06-11",
        source: "bigmodel.cn / vibecoding.app"
    },
    {
        id: "kimi",
        name: "Kimi",
        company: "月之暗面（中国）",
        category: "语言模型",
        pricing: "freemium",
        priceLabel: "免费 / 会员 ¥49/月",
        priceDetail: "免费版（Adagio，有限次数）; Andante ¥49/月; Moderato ¥99/月。K2.5 API 输入 ¥4/百万Token",
        website: "https://kimi.moonshot.cn",
        tags: ["长文本", "中文写作", "深度研究", "PPT生成", "Agent"],
        strengths: "超长上下文处理；中文写作语气细腻；深度研究功能；OK Computer Agent模式",
        weaknesses: "免费版次数限制较严；高峰期需排队/打赏优先",
        bestFor: "长文写作、论文辅助、深度研究、PPT生成",
        chineseSupport: "★★★★★ 中文长文写作最强者之一",
        contextWindow: "128K tokens",
        apiAvailable: true,
        released: "2023年10月首发",
        lastUpdated: "2026-06-11",
        source: "kimi.moonshot.cn / apis.you"
    },
    {
        id: "llama",
        name: "Llama",
        company: "Meta（美国）",
        category: "语言模型",
        pricing: "free",
        priceLabel: "完全免费（开源）",
        priceDetail: "完全开源免费，可在HuggingFace/GitHub下载模型权重。自行部署成本取决于硬件",
        website: "https://llama.meta.com",
        tags: ["开源", "本地部署", "可定制", "隐私", "研究"],
        strengths: "完全开源，可本地部署，数据不外传；社区生态活跃（微调版本众多）；适合定制化需求",
        weaknesses: "需要自行部署（技术门槛）或使用第三方托管；本地运行需要GPU；中文未经专门优化",
        bestFor: "隐私敏感场景、学术研究、企业本地部署、模型微调",
        chineseSupport: "★★★☆☆ 中文可用但非专项优化，微调后可提升",
        contextWindow: "128K tokens",
        apiAvailable: false,
        released: "2023年2月首发，Llama 4 2025年发布",
        lastUpdated: "2026-06-11",
        source: "meta.com / huggingface.co"
    },
    {
        id: "coze",
        name: "扣子 (Coze)",
        company: "字节跳动（中国）",
        category: "Agent平台",
        pricing: "free",
        priceLabel: "免费（基础版）",
        priceDetail: "基础版完全免费，支持创建多个Agent。Coze 3.0 2026年6月上线，支持多人多Agent协作",
        website: "https://www.coze.cn",
        tags: ["Agent", "零代码", "Bot搭建", "多模型", "工作流"],
        strengths: "零代码搭建AI助手；支持接入多种模型（Claude、GPT等）；拖拽式工作流设计；开源",
        weaknesses: "非语言模型本身，是Agent开发平台；复杂场景有学习曲线；国内版和国际版数据不互通",
        bestFor: "想搭建自己的AI Bot、客服机器人、自动化工作流的用户",
        chineseSupport: "★★★★★ 字节跳动出品，中文界面和教程完善",
        contextWindow: "取决于接入的模型",
        apiAvailable: false,
        released: "2024年首发，Coze 3.0 2026年6月1日发布",
        lastUpdated: "2026-06-11",
        source: "coze.cn / finance.sina.com.cn"
    },
    {
        id: "workbuddy",
        name: "WorkBuddy",
        company: "腾讯（中国）",
        category: "Agent平台",
        pricing: "freemium",
        priceLabel: "免费 / 个人版 ¥58/月",
        priceDetail: "新用户注册送500 Credits，连续30日每日登录送100 Credits。个人版2000 Credits/¥58/月；企业版2000 Credits/¥78/月；企业专享定制化服务",
        website: "https://workbuddy.tencent.com",
        tags: ["Agent", "效率", "专家团", "Skills", "MCP", "办公"],
        strengths: "内置20+Skills技能包与MCP协议；专家中心提供成组Agent角色协作；支持微信/企业微信远程指挥电脑处理日常工作；企业版7×24小时专家数字员工",
        weaknesses: "主要面向国内用户；部分高级功能需付费；Mac/Windows桌面应用为主，无纯网页版",
        bestFor: "日常办公提效、数据处理、文档撰写、项目管理、一人企业运营",
        chineseSupport: "★★★★★ 腾讯出品，中文原生支持",
        contextWindow: "取决于接入的模型",
        apiAvailable: false,
        released: "2026年3月9日上线，企业版2026年6月发布",
        lastUpdated: "2026-06-11",
        source: "workbuddy.tencent.com / new.qq.com"
    },
    {
        id: "windclaw",
        name: "WindClaw",
        company: "万得信息（中国）",
        category: "Agent平台",
        pricing: "free",
        priceLabel: "公测免费",
        priceDetail: "2026年3月公测期间免费使用。正式定价方案待公布，预计按Wind账号体系分级收费",
        website: "https://windclaw.bot",
        tags: ["Agent", "金融投研", "专业数据", "多智能体", "7×24"],
        strengths: "深度整合Wind专业金融数据库；多智能体协同架构实现7×24自动化投研分析；支持零代码本地化部署；股票分析/宏观研究/市场监控一站式",
        weaknesses: "需要Wind账号体系（金融从业者门槛）；非金融领域用户不适用；公测期功能仍在迭代",
        bestFor: "金融从业者、投资研究、股票分析、宏观研究、市场监控",
        chineseSupport: "★★★★★ 万得出品，中文金融数据最全",
        contextWindow: "取决于接入的模型",
        apiAvailable: false,
        released: "2026年3月11日公测",
        lastUpdated: "2026-06-11",
        source: "windclaw.bot / aihub.cn"
    },
    {
        id: "dify",
        name: "Dify",
        company: "Dify.ai（中国/开源）",
        category: "Agent平台",
        pricing: "freemium",
        priceLabel: "免费（开源）/ 企业版付费",
        priceDetail: "社区版完全开源免费，可自行部署（Docker）。Cloud版免费额度有限；企业版按需定价（私有化部署/高级权限/审计日志）",
        website: "https://dify.ai",
        tags: ["Agent", "开源", "工作流", "多模型", "RAG", "可自托管"],
        strengths: "开源可自托管（数据不出域）；可视化工作流编排；支持 100+ LLM 接入；内置 RAG 知识库引擎；声明式 YAML 配置",
        weaknesses: "自托管需要技术能力（Docker/服务器）；企业版费用较高；UI/UX 偏技术用户",
        bestFor: "技术团队、企业客服系统、需私有化部署的知识库应用、AI应用快速原型",
        chineseSupport: "★★★★☆ 中文界面完善，文档中英双语",
        contextWindow: "取决于接入的模型",
        apiAvailable: true,
        released: "2023年开源，持续迭代中",
        lastUpdated: "2026-06-11",
        source: "dify.ai / news.sohu.com"
    },
    {
        id: "manus",
        name: "Manus",
        company: "Manus（中国/美国）",
        category: "Agent平台",
        pricing: "paid",
        priceLabel: "订阅制（约 $39/月起）",
        priceDetail: "Starter $39/月；Pro $199/月。2026年仍处邀请制，公测用户需排队获取使用权",
        website: "https://manus.im",
        tags: ["Agent", "自主任务", "虚拟同事", "交付型", "多步骤"],
        strengths: "任务自主规划与成果交付（不只是对话，直接产出可交付物）；能操作浏览器、文件系统等工具；适合需要AI独自完成复杂任务的场景",
        weaknesses: "仍处邀请制阶段，使用门槛高；每月费用不低；任务执行速度较慢（需多步规划）；中文场景适配仍在优化",
        bestFor: "单人强交付任务（数据分析报告、竞品调研、市场分析）、需要AI自主完成多步骤操作的场景",
        chineseSupport: "★★★☆☆ 中文可用，但原生界面以英文为主",
        contextWindow: "取决于接入的模型",
        apiAvailable: false,
        released: "2025年首发，持续迭代",
        lastUpdated: "2026-06-11",
        source: "manus.im / sohu.com"
    },
    {
        id: "n8n",
        name: "n8n",
        company: "n8n GmbH（德国/开源）",
        category: "Agent平台",
        pricing: "freemium",
        priceLabel: "免费（开源）/ Cloud €20/月起",
        priceDetail: "社区版完全开源免费，可自行部署。Cloud版 Starter €20/月；Pro €120/月；Enterprise 按需定价",
        website: "https://n8n.io",
        tags: ["Agent", "开源", "自动化", "工作流", "400+集成", "AI节点"],
        strengths: "开源可自托管；400+ 原生集成节点（Google/Airtable/Slack等）；可视化工作流编辑器；AI Agent 节点可将 LLM 接入自动化流程",
        weaknesses: "自托管需技术能力；Cloud版海外服务器（国内访问可能慢）；界面全英文；中文社区较小",
        bestFor: "自动化数据同步、跨平台工作流、技术用户的AI自动化流程、企业内部流程自动化",
        chineseSupport: "★★☆☆☆ 全英文界面和文档，中文社区资源有限",
        contextWindow: "取决于接入的模型",
        apiAvailable: true,
        released: "2019年开源，2024年加入AI Agent功能",
        lastUpdated: "2026-06-11",
        source: "n8n.io / cet.com.cn"
    }
];

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 高亮当前导航
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 渲染模型卡片（如果在列表页）
    const grid = document.getElementById('modelGrid');
    if (grid) renderModelCards('all');

    // 搜索功能
    const searchInput = document.getElementById('modelSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            renderModelCards(document.querySelector('.filter-btn.active')?.dataset.cat || 'all', query);
        });
    }

    // 筛选按钮
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const cat = this.dataset.cat;
            const query = document.getElementById('modelSearch')?.value.toLowerCase() || '';
            renderModelCards(cat, query);
        });
    });

    // 渲染对比表
    const compareBody = document.getElementById('compareBody');
    if (compareBody) renderCompareTable();
});

function renderModelCards(category, query) {
    const grid = document.getElementById('modelGrid');
    if (!grid) return;

    let filtered = models;
    if (category && category !== 'all') {
        filtered = filtered.filter(m => m.category === category);
    }
    if (query) {
        filtered = filtered.filter(m =>
            m.name.toLowerCase().includes(query) ||
            m.company.toLowerCase().includes(query) ||
            m.tags.some(t => t.toLowerCase().includes(query)) ||
            m.strengths.toLowerCase().includes(query)
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-secondary)">没有找到匹配的模型，试试其他关键词？</div>';
        return;
    }

    grid.innerHTML = filtered.map(m => `
        <div class="model-card" onclick="location.href='${m.website}'" title="点击访问官网">
            <div class="model-card-header">
                <div>
                    <div class="model-name">${m.name}</div>
                    <div class="model-company">${m.company}</div>
                </div>
                <span class="model-badge badge-${m.pricing}">${m.pricing === 'free' ? '免费' : m.pricing === 'freemium' ? '免费+付费' : '付费'}</span>
            </div>
            <div class="model-tags">
                ${m.tags.map(t => `<span class="model-tag">${t}</span>`).join('')}
            </div>
            <div class="model-desc">${m.strengths}</div>
            <div style="font-size:13px;color:var(--text-secondary);margin-top:6px;">
                <strong>最适合：</strong>${m.bestFor}
            </div>
            <div class="model-footer">
                <div class="model-price"><strong>${m.priceLabel.split(' / ')[0]}</strong>${m.priceLabel.includes('/') ? ' / ' + m.priceLabel.split(' / ').slice(1).join(' / ') : ''}</div>
            </div>
        </div>
    `).join('');
}

function renderCompareTable() {
    const body = document.getElementById('compareBody');
    if (!body) return;

    const langModels = models.filter(m => m.category === '语言模型');

    // 表头
    const dimensions = [
        { label: '开发商', key: 'company' },
        { label: '免费版', key: 'pricing', format: v => v === 'free' ? '✅ 完全免费' : v === 'freemium' ? '✅ 有免费版' : '❌ 仅付费' },
        { label: '最低付费', key: 'priceLabel' },
        { label: '中文支持', key: 'chineseSupport' },
        { label: '上下文窗口', key: 'contextWindow' },
        { label: 'API可用', key: 'apiAvailable', format: v => v ? '✅' : '❌' },
        { label: '擅长领域', key: 'bestFor' },
    ];

    let html = '<thead><tr><th>维度</th>';
    langModels.forEach(m => { html += `<th><strong>${m.name}</strong></th>`; });
    html += '</tr></thead><tbody>';

    dimensions.forEach(dim => {
        html += '<tr>';
        html += `<td>${dim.label}</td>`;
        langModels.forEach(m => {
            let val = m[dim.key];
            if (dim.format) val = dim.format(val);
            html += `<td>${val}</td>`;
        });
        html += '</tr>';
    });

    html += '</tbody>';
    body.innerHTML = html;
}
