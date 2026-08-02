// AI家AI户 — 白皮书 / 报告解读 数据
// 说明：本站只做「省流版解读」——不转载原文全文，仅提供 原文官方链接 + 我们提炼的一句话要点。
// 字段：
//   id          唯一标识（小写连字符）
//   title       报告原名（英文）
//   titleZh     中文名/译名
//   org         发布机构
//   category    主题分类（用于筛选）
//   tags        标签
//   summary     一句话省流解读（我们提炼，非原文）
//   officialUrl 原文官方链接（必填，新标签打开）
//   interpretUrl 我们的解读长文链接（选填；为空则不显示「解读」按钮）
//   source      数据来源标注
//   date        报告发布/收录日期
//   lastUpdated 本站最后更新
window.AIHomePapers = [
  {
    "id": "anthropic-building-effective-agents",
    "title": "Building Effective Agents",
    "titleZh": "构建高效的 AI Agent（工程指南）",
    "org": "Anthropic",
    "category": "Agent 构建实践",
    "tags": ["Agent", "工程实践", "Workflow", "Anthropic"],
    "summary": "Anthropic 的 Agent 工程圣经：主张多数场景用「增强型 LLM + 简单工作流」就够了，仅在需要模型自主决策时才上自主 Agent，并梳理了 5+1 种设计模式（提示链、路由、并行化、协调者-工作者、评估者-优化器）。",
    "officialUrl": "https://www.anthropic.com/engineering/building-effective-agents",
    "interpretUrl": "",
    "source": "官方原文 / Anthropic Engineering",
    "date": "2024-12",
    "lastUpdated": "2026-08-02"
  },
  {
    "id": "openai-practical-guide-agents",
    "title": "A Practical Guide to Building Agents",
    "titleZh": "构建 AI Agent 实用指南",
    "org": "OpenAI",
    "category": "Agent 构建实践",
    "tags": ["Agent", "OpenAI", "编排", "护栏"],
    "summary": "OpenAI 给出的 Agent 落地手册：把 Agent 拆成「模型 + 工具 + 指令」三件套，重点讲编排模式、工具设计与安全护栏（guardrails）——强调从小处起步、用真实用户验证后再扩展。",
    "officialUrl": "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/",
    "interpretUrl": "",
    "source": "官方原文 / OpenAI Business Guides",
    "date": "2025-01",
    "lastUpdated": "2026-08-02"
  },
  {
    "id": "google-agents-whitepaper",
    "title": "Agents (Whitepaper)",
    "titleZh": "Agent 基础白皮书：模型 + 工具 + 编排",
    "org": "Google",
    "category": "Agent 基础理论",
    "tags": ["Agent", "基础", "编排", "Google"],
    "summary": "Google 提出的经典 Agent 公式：Agent = 模型（Model）+ 工具（Tools）+ 编排（Orchestration），并配合 Gemini / Vertex AI 落地。是后续很多开源 Agent 框架的理论底座。",
    "officialUrl": "https://www.kaggle.com/whitepaper/agents",
    "interpretUrl": "",
    "source": "官方原文 / Google Cloud (Kaggle Whitepaper)",
    "date": "2024-09",
    "lastUpdated": "2026-08-02"
  },
  {
    "id": "google-ai-agent-handbook",
    "title": "The AI Agent Handbook",
    "titleZh": "AI Agent 企业实战手册（10 种用法）",
    "org": "Google Cloud",
    "category": "企业落地",
    "tags": ["企业", "落地", "Agentspace", "Google Cloud"],
    "summary": "Google Cloud 整理的企业使用 Agent 的 10 种实战方法，覆盖挑战、解决方案、如何在 Agentspace 起步，并附德勤、诺基亚、威瑞森等真实企业案例。",
    "officialUrl": "https://services.google.com/fh/files/misc/ai_agents_handbook.pdf",
    "interpretUrl": "",
    "source": "官方原文 / Google Cloud",
    "date": "2025-04",
    "lastUpdated": "2026-08-02"
  },
  {
    "id": "microsoft-failure-modes-agentic-ai",
    "title": "Taxonomy of Failure Mode in Agentic AI Systems",
    "titleZh": "Agentic AI 系统故障模式分类（安全白皮书）",
    "org": "Microsoft",
    "category": "安全与对齐",
    "tags": ["安全", "对齐", "故障模式", "Microsoft"],
    "summary": "微软系统梳理 Agentic AI 独有的故障模式（智能体注入、伪装、流程操控等），通过案例展示风险，并给出设计阶段的技术控制措施清单（身份认证、记忆加固、隔离、监控等）。",
    "officialUrl": "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/Taxonomy-of-Failure-Mode-in-Agentic-AI-Systems-Whitepaper.pdf",
    "interpretUrl": "",
    "source": "官方原文 / Microsoft",
    "date": "2025-03",
    "lastUpdated": "2026-08-02"
  },
  {
    "id": "workbuddy-bluebook",
    "title": "WorkBuddy Bluebook",
    "titleZh": "WorkBuddy 实战蓝皮书（社区开源实战指南）",
    "org": "AlephAITech（社区共创）",
    "category": "工具实战",
    "tags": ["WorkBuddy", "实战", "Skills", "MCP", "自动化", "多 Agent", "社区共创"],
    "summary": "由 AlephAITech 联合多位作者社区共创、MIT 开源的 WorkBuddy 实战蓝皮书：以真实任务为主线，从安装上手、移动办公、知识管理、内容自动化，讲到多 Agent 团队与自动化可靠性，目标是把一次成功变成团队可复用的工作系统。在线阅读体验更完整：workbuddy.homes。",
    "officialUrl": "https://github.com/AlephAITech/WorkBuddyGuide",
    "interpretUrl": "blog/workbuddy-bluebook-interpret-2026.html",
    "source": "GitHub 开源项目 AlephAITech/WorkBuddyGuide（社区共创，MIT 协议）",
    "date": "2026-07",
    "lastUpdated": "2026-08-02"
  }
];
