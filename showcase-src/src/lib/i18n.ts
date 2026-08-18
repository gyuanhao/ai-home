// 列表页轻量 i18n（中/英），localStorage 持久化
export type Lang = "zh" | "en";

export const DICT = {
  zh: {
    navModels: "模型库",
    navTools: "工具库",
    navCompare: "对比",
    navBlog: "博客",
    navPapers: "白皮书",
    navAbout: "关于",
    navShowcase: "展示馆",
    navXianxia: "AI江湖",
    navCta: "进入站点",
    searchPlaceholderTools: "搜索工具名 / 标签 / 简介",
    searchPlaceholderModels: "搜索模型 / 厂商 / 标签",
    all: "全部",
    sortDefault: "默认排序",
    sortFree: "免费优先",
    sortName: "按名称",
    countTools: "共 {n} 个工具",
    countModels: "共 {n} 个模型",
    detail: "详情",
    loading: "正在载入数据…",
    loadError: "数据加载失败，请刷新重试",
    empty: "没有匹配的结果，换个关键词试试",
    clear: "清除",
    footerNote: "数据来源各产品官网 · 不接软广",
    followUs: "关注我们：",
    xhs: "小红书 @抱走西瓜",
    langLabel: "EN",
    freeTag: "免费",
    titleTools: "AI 工具库",
    titleModels: "AI 模型库",
    descTools: "{n} 款 AI 工具，覆盖对话、图像、视频、编程、写作、办公等 12 类。每款标注价格、来源与更新日期，点「详情」看优缺点与同类对比。",
    descModels: "{n} 款主流大模型与 Agent 平台，按语言/图像/视频/代码/Agent/辅助 6 大品类整理，价格与功能一目了然。",
    modelNote1: "代码模型包含 IDE 插件（Cursor/Copilot）和终端 Agent（Codex/Claude Code），后者在命令行运行，可自主读项目、写代码、跑测试。",
    modelNote2: "AI辅助工具包含设计/写作/语音/SEO等周边办公工具，覆盖创作与运营全流程。",
  },
  en: {
    navModels: "Models",
    navTools: "Tools",
    navCompare: "Compare",
    navBlog: "Blog",
    navPapers: "Papers",
    navAbout: "About",
    navShowcase: "Showcase",
    navXianxia: "AI World",
    navCta: "Enter Site",
    searchPlaceholderTools: "Search tools by name / tag / desc",
    searchPlaceholderModels: "Search models / vendor / tag",
    all: "All",
    sortDefault: "Default",
    sortFree: "Free first",
    sortName: "By name",
    countTools: "{n} tools",
    countModels: "{n} models",
    detail: "Detail",
    loading: "Loading…",
    loadError: "Failed to load data. Please refresh.",
    empty: "No matches. Try another keyword.",
    clear: "Clear",
    footerNote: "Data from official sites · No sponsored ads",
    followUs: "Follow us:",
    xhs: "Xiaohongshu @抱走西瓜",
    langLabel: "中文",
    freeTag: "Free",
    titleTools: "AI Tools",
    titleModels: "AI Models",
    descTools: "{n} AI tools across 12 categories with price & source. Click \"Detail\" for pros, cons and alternatives.",
    descModels: "{n} major LLMs & agent platforms across 6 categories with price & features.",
    modelNote1: "Code models include IDE plugins (Cursor/Copilot) and terminal agents (Codex/Claude Code).",
    modelNote2: "AI helper tools cover design, writing, voice, SEO and more.",
  },
} as const;

export type Dict = (typeof DICT)["zh"];

export function t(lang: Lang, key: keyof Dict, vars?: Record<string, string | number>): string {
  const s: string = DICT[lang][key];
  if (!vars) return s;
  return s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
}

const LS_KEY = "aihome_lang";

export function loadLang(): Lang {
  try {
    const v = localStorage.getItem(LS_KEY);
    return v === "en" ? "en" : "zh";
  } catch {
    return "zh";
  }
}

export function saveLang(lang: Lang) {
  try {
    localStorage.setItem(LS_KEY, lang);
  } catch {
    /* ignore */
  }
}
