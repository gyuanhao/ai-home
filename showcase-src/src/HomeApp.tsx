import { NoiseBackground } from "./components/ui/noise-background";
import { StaggerReveal } from "./components/ui/stagger-reveal";
import { HoverCard } from "./components/ui/hover-card";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { Magnetic } from "./components/ui/magnetic";
import { InkLink } from "./components/ui/ink-link";
import {
  Brain,
  Image as ImageIcon,
  Video,
  Code2,
  Bot,
  Wrench,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Layers,
  Search,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    icon: <Brain className="w-5 h-5" strokeWidth={1.5} />,
    name: "语言模型",
    count: "12 款",
    desc: "ChatGPT、DeepSeek、Claude——谁更会写，谁更便宜",
    accent: "#E8542C",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    icon: <ImageIcon className="w-5 h-5" strokeWidth={1.5} />,
    name: "图像模型",
    count: "5 款",
    desc: "Midjourney、FLUX、即梦——出图风格与额度对比",
    accent: "#4A7C59",
    span: "",
  },
  {
    icon: <Video className="w-5 h-5" strokeWidth={1.5} />,
    name: "视频模型",
    count: "6 款",
    desc: "Sora、可灵、Runway——生成时长与画质",
    accent: "#D4A574",
    span: "",
  },
  {
    icon: <Code2 className="w-5 h-5" strokeWidth={1.5} />,
    name: "代码模型",
    count: "7 款",
    desc: "Cursor、Copilot、Claude Code——谁更懂你的仓库",
    accent: "#E8542C",
    span: "",
  },
  {
    icon: <Bot className="w-5 h-5" strokeWidth={1.5} />,
    name: "Agent 平台",
    count: "6 款",
    desc: "Coze、Dify、Manus——搭智能体的门槛与上限",
    accent: "#4A7C59",
    span: "md:col-span-2",
  },
  {
    icon: <Wrench className="w-5 h-5" strokeWidth={1.5} />,
    name: "AI 辅助工具",
    count: "8 款",
    desc: "写作、设计、翻译、会议——散装工具收进一张表",
    accent: "#D4A574",
    span: "",
  },
];

const blogPosts = [
  {
    title: "AI 编程工具真实体验",
    tag: "体验",
    desc: "从免费到付费，我用过的6个工具",
    href: "blog/ai-coding-tools-experience-2026.html",
  },
  {
    title: "2026 AI大模型选购指南",
    tag: "指南",
    desc: "六大品类怎么选？附场景决策表",
    href: "blog/ai-buying-guide-2026.html",
  },
  {
    title: "Vibe Coding 入门 2026",
    tag: "教程",
    desc: "不会写代码也能做出 App",
    href: "blog/vibe-coding-guide-2026.html",
  },
  {
    title: "Kimi K3 对上 Claude Fable 5",
    tag: "对比",
    desc: "两个最强模型深度对比",
    href: "blog/kimi-k3-vs-claude-fable5-2026.html",
  },
  {
    title: "自从去年底沾上了，我就……",
    tag: "故事",
    desc: "一个普通用户和 AI 纠缠半年的真实记录",
    href: "blog/my-ai-journey-2026.html",
  },
];

const stats = [
  { num: "352", label: "AI 工具" },
  { num: "44", label: "模型" },
  { num: "6", label: "大品类" },
];

export default function App() {
  return (
    <NoiseBackground variant="cream" className="min-h-screen">
      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#FAF7F2]/80 border-b border-[#E8DFD3]/60">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <a href="index.html" className="flex items-center gap-2 font-bold text-[#1A1A1A]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8542C]" />
            AI家AI户
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-[#475569]">
            <InkLink href="models.html">模型库</InkLink>
            <InkLink href="tools.html">工具库</InkLink>
            <InkLink href="compare.html">对比</InkLink>
            <InkLink href="blog/">博客</InkLink>
            <InkLink href="papers.html">白皮书</InkLink>
            <InkLink href="about.html">关于</InkLink>
            <InkLink href="showcase/" className="text-[#E8542C]">展示馆</InkLink>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="xianxia/index.html"
              className="text-sm text-[#4A7C59] hover:text-[#1A1A1A] transition"
            >
              AI江湖
            </a>
            <Magnetic>
              <a
                href="tools.html"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#1A1A1A] px-4 py-2 text-sm font-medium text-[#FAF7F2] hover:bg-[#E8542C] transition-colors duration-300"
              >
                进入站点 <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </Magnetic>
          </div>
        </div>
      </nav>

      {/* ── HERO: left-aligned, non-symmetric ── */}
      <header className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        {/* Asymmetric grid: text 7 cols, decorative 5 cols */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 md:col-start-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6 text-sm text-[#475569]">
              <span className="w-1 h-1 rounded-full bg-[#E8542C]" />
              <span>中文 AI 选型导航 · 便利店模式</span>
            </div>

            {/* Headline: left-aligned, large, mixed weight */}
            <h1 className="text-[2.5rem] md:text-[4.2rem] leading-[1.05] font-extrabold tracking-tight text-[#1A1A1A] mb-6">
              把 AI 选型，
              <br />
              变成
              <span className="relative inline-block">
                <span className="relative z-10 text-[#E8542C]">三分钟</span>
                {/* Hand-drawn underline */}
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8C40 3 80 4 120 6S180 9 198 4"
                    stroke="#E8542C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </span>
              的事
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-[#475569] leading-relaxed max-w-lg mb-8">
              352 个工具、44 个模型、6 大品类，全部按价格、功能、适用场景整理到一起。
              你只管看维度、比差异、点链接，剩下的自己判断。
            </p>

            {/* CTAs: non-centered, mixed */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Magnetic>
                <a
                  href="tools.html"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E8542C] px-7 py-3 text-sm font-semibold text-white hover:bg-[#1A1A1A] transition-colors duration-300"
                >
                  浏览工具库 <ArrowRight className="w-4 h-4" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="models.html"
                  className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/20 px-7 py-3 text-sm font-semibold text-[#1A1A1A] hover:border-[#E8542C] hover:text-[#E8542C] transition-colors duration-300"
                >
                  看模型对比
                </a>
              </Magnetic>
              <a
                href="picker.html"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4A7C59] hover:text-[#E8542C] transition"
              >
                <Compass className="w-4 h-4" strokeWidth={1.5} />
                不知道选什么？试试 AI选型器
              </a>
            </div>

            {/* Stats: inline, not card-grid */}
            <div className="flex items-baseline gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="text-3xl font-extrabold text-[#1A1A1A]">{s.num}</span>
                  <span className="ml-2 text-sm text-[#475569]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: decorative search prompt + organic shapes */}
          <div className="hidden md:block md:col-span-5 md:col-start-8 relative">
            <div className="relative mt-8">
              {/* Large organic blob shape */}
              <div
                className="absolute -top-6 -left-4 w-72 h-72 rounded-full opacity-[0.06]"
                style={{
                  background: "radial-gradient(circle, #E8542C, transparent 70%)",
                }}
              />
              {/* Search-like card, tilted */}
              <div className="relative rotate-3">
                <div className="rounded-2xl border border-[#E8DFD3] bg-white/60 backdrop-blur-sm p-6 shadow-[0_10px_40px_-10px_rgba(232,84,44,0.10)]">
                  <div className="flex items-center gap-2 mb-4 text-sm text-[#475569]">
                    <Search className="w-4 h-4" strokeWidth={1.5} />
                    站内搜索
                  </div>
                  <div className="space-y-2">
                    {["Kimi", "Claude", "Cursor", "DeepSeek", "AI绘画"].map((tag, i) => (
                      <span
                        key={tag}
                        className="inline-block mr-2 px-3 py-1 rounded-full text-xs font-medium border"
                        style={{
                          borderColor: i % 2 === 0 ? "#E8542C33" : "#4A7C5933",
                          color: i % 2 === 0 ? "#E8542C" : "#4A7C59",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#E8DFD3] text-xs text-[#475569]">
                    热门搜索词，点词直达详情
                  </div>
                </div>
              </div>
              {/* Small floating label */}
              <div className="absolute -bottom-6 -right-2 -rotate-6">
                <div className="rounded-full bg-[#1A1A1A] text-[#FAF7F2] px-4 py-1.5 text-xs font-medium">
                  不当裁判，只当便利店
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── CORE CONCLUSION (SEO summary, kept) ── */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <StaggerReveal>
          <div className="border-l-2 border-[#E8542C] pl-5">
            <p className="text-base leading-relaxed text-[#1A1A1A] font-medium">
              <strong>核心结论：</strong>
              AI家AI户是一个中文 AI 工具与模型对比导航站，收录 352 个工具、44 个模型，
              按语言/图像/视频/代码/Agent/辅助工具 6 大品类整理，每页标注价格、来源与最后更新日期，
              帮你三分钟缩小选择范围。
            </p>
          </div>
        </StaggerReveal>
      </section>

      {/* ── BENTO CATEGORIES: asymmetric grid, not 3-cards ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1A1A1A]">
              六大品类，一张表管完
            </h2>
            <p className="mt-2 text-[#475569]">从语言到视频，从代码到 Agent</p>
          </div>
          <InkLink href="tools.html" className="hidden md:inline-block text-sm whitespace-nowrap">
            浏览全部工具 →
          </InkLink>
        </div>

        <div className="grid md:grid-cols-3 gap-4 auto-rows-[12rem]">
          {categories.map((c, i) => (
            <StaggerReveal key={c.name} delay={i * 0.08} className={c.span}>
              <HoverCard className="h-full p-6 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{ background: `${c.accent}15`, color: c.accent }}
                  >
                    {c.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] text-lg">{c.name}</h3>
                    <span className="text-xs text-[#475569]">{c.count}</span>
                  </div>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed">{c.desc}</p>
                <a
                  href={`models.html?cat=${c.name}`}
                  className="inline-flex items-center gap-1 text-sm font-medium"
                  style={{ color: c.accent }}
                >
                  去看 <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </HoverCard>
            </StaggerReveal>
          ))}
        </div>
      </section>

      {/* ── BLOG: horizontal scroll, not card grid ── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1A1A1A]">
                精选分享
              </h2>
              <p className="mt-2 text-[#475569]">挑几篇我们写的真实体验与指南</p>
            </div>
            <InkLink href="blog/" className="text-sm whitespace-nowrap">
              查看全部博客 →
            </InkLink>
          </div>
        </div>

        {/* Horizontal scroll row */}
        <div className="overflow-x-auto scrollbar-hide px-6">
          <div className="flex gap-5 pb-4" style={{ width: "max-content" }}>
            {blogPosts.map((post, i) => (
              <a
                key={post.title}
                href={post.href}
                className="group flex-shrink-0 w-80 rounded-2xl border border-[#E8DFD3] bg-white/50 backdrop-blur-sm p-6 hover:border-[#E8542C]/40 hover:shadow-[0_15px_50px_-15px_rgba(232,84,44,0.12)] transition-all duration-300"
                style={{ transform: i % 2 === 0 ? "rotate(-0.5deg)" : "rotate(0.5deg)" }}
              >
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E8542C]/10 text-[#E8542C] mb-4">
                  {post.tag}
                </span>
                <h3 className="font-bold text-[#1A1A1A] text-lg mb-2 group-hover:text-[#E8542C] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{post.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#1A1A1A] group-hover:text-[#E8542C] transition-colors">
                  读全文 <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── XIANXIA EASTER EGG: full-width, warm contrast band ── */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1A1A1A 0%, #2D2419 50%, #1A1A1A 100%)",
          }}
        />
        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#E8542C]/20 text-[#E8542C] mb-6">
            彩蛋玩法
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#FAF7F2] mb-4">
            踏入 AI 江湖，寻找你的本命
          </h2>
          <p className="text-[#FAF7F2]/70 max-w-xl mx-auto mb-8 leading-relaxed">
            网页表格太乏味了？来游历 AI 的仙侠世界，在江湖中探寻你感兴趣的模型与秘籍。
          </p>
          <Magnetic>
            <a
              href="xianxia/index.html"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8542C] px-7 py-3 text-sm font-semibold text-white hover:bg-[#FAF7F2] hover:text-[#1A1A1A] transition-colors duration-300"
            >
              踏入 AI 江湖 <ArrowRight className="w-4 h-4" />
            </a>
          </Magnetic>
        </div>
      </section>

      {/* ── FEATURED MODELS: non-symmetric layout ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1A1A1A] mb-2">
              大家都在看
            </h2>
            <p className="text-[#475569] mb-4">最热门的3个模型</p>
            <InkLink href="models.html" className="text-sm">
              查看全部44个模型 →
            </InkLink>
          </div>
          <div className="md:col-span-8 grid gap-4">
            {[
              { name: "DeepSeek", company: "深度求索", desc: "网页/APP对话免费，推理能力突出", tags: "编程 · 推理 · 中文原生", badge: "免费+付费", href: "models/deepseek.html", accent: "#E8542C" },
              { name: "Kimi", company: "月之暗面", desc: "中文写作最细腻，长文案生成不跑题", tags: "写作 · PPT · 深度研究", badge: "免费+付费", href: "models/kimi.html", accent: "#4A7C59" },
              { name: "通义千问", company: "阿里巴巴", desc: "阿里云生态深度集成，企业级首选", tags: "企业级 · 开源 · 阿里云", badge: "免费+付费", href: "models/qwen.html", accent: "#D4A574" },
            ].map((m, i) => (
              <StaggerReveal key={m.name} delay={i * 0.1}>
                <a
                  href={m.href}
                  className="group block rounded-2xl border border-[#E8DFD3] bg-white/50 backdrop-blur-sm p-5 hover:border-[#E8542C]/30 hover:shadow-[0_10px_40px_-10px_rgba(232,84,44,0.08)] transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl font-bold text-lg"
                      style={{ background: `${m.accent}15`, color: m.accent }}
                    >
                      {m.name[0]}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-[#1A1A1A]">{m.name}</h3>
                        <span className="text-xs text-[#475569]">{m.company}</span>
                        <span className="ml-auto px-2 py-0.5 rounded-full text-xs font-medium bg-[#4A7C59]/10 text-[#4A7C59]">
                          {m.badge}
                        </span>
                      </div>
                      <p className="text-sm text-[#475569] mt-1">{m.desc}</p>
                      <p className="text-xs text-[#475569]/70 mt-1">{m.tags}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#475569] group-hover:text-[#E8542C] transition-colors flex-shrink-0" />
                  </div>
                </a>
              </StaggerReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#E8DFD3] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-[#475569]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8542C]" />
            AI家AI户 · 抱走西瓜 维护
          </div>
          <div className="flex flex-wrap gap-5">
            <InkLink href="models.html">模型库</InkLink>
            <InkLink href="tools.html">工具库</InkLink>
            <InkLink href="about.html">关于</InkLink>
            <InkLink href="privacy.html">隐私政策</InkLink>
            <InkLink href="blog/">博客</InkLink>
            <InkLink href="papers.html">白皮书</InkLink>
          </div>
          <div className="text-xs text-[#475569]/70">
            数据来源各产品官网 · 不接软广 · 站点最后更新 2026年8月
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-4 text-xs text-[#475569]/60 px-0">
          关注我们：
          <a
            href="https://www.xiaohongshu.com/search_result?keyword=%E6%8A%B1%E8%B5%B0%E8%A5%BF%E7%93%9C"
            target="_blank"
            rel="noopener me"
            className="hover:text-[#E8542C] transition"
          >
            小红书 @抱走西瓜
          </a>
        </div>
      </footer>
    </NoiseBackground>
  );
}
