import { useState, useEffect } from "react";
import { NoiseBackground } from "./components/ui/noise-background";
import { StaggerReveal } from "./components/ui/stagger-reveal";
import { HoverCard } from "./components/ui/hover-card";
import { Magnetic } from "./components/ui/magnetic";
import { InkLink } from "./components/ui/ink-link";
import { HomeSearch } from "./components/HomeSearch";
import { MatrixRain } from "./components/MatrixRain";
import { SiteNav, SiteFooter } from "./components/SiteChrome";
import { Lang, t, loadLang, saveLang } from "./lib/i18n";
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
  Sparkles,
} from "lucide-react";

function categoryData(lang: Lang) {
  return [
    {
      icon: <Brain className="w-5 h-5" strokeWidth={1.5} />,
      name: t(lang, "catLlm"),
      cat: "语言模型",
      count: "12 " + (lang === "zh" ? "款" : ""),
      desc: t(lang, "catLlmDesc"),
      accent: "#E8542C",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      icon: <ImageIcon className="w-5 h-5" strokeWidth={1.5} />,
      name: t(lang, "catImage"),
      cat: "图像模型",
      count: "5 " + (lang === "zh" ? "款" : ""),
      desc: t(lang, "catImageDesc"),
      accent: "#4A7C59",
      span: "",
    },
    {
      icon: <Video className="w-5 h-5" strokeWidth={1.5} />,
      name: t(lang, "catVideo"),
      cat: "视频模型",
      count: "6 " + (lang === "zh" ? "款" : ""),
      desc: t(lang, "catVideoDesc"),
      accent: "#D4A574",
      span: "",
    },
    {
      icon: <Code2 className="w-5 h-5" strokeWidth={1.5} />,
      name: t(lang, "catCode"),
      cat: "代码模型",
      count: "7 " + (lang === "zh" ? "款" : ""),
      desc: t(lang, "catCodeDesc"),
      accent: "#E8542C",
      span: "",
    },
    {
      icon: <Bot className="w-5 h-5" strokeWidth={1.5} />,
      name: t(lang, "catAgent"),
      cat: "Agent 平台",
      count: "6 " + (lang === "zh" ? "款" : ""),
      desc: t(lang, "catAgentDesc"),
      accent: "#4A7C59",
      span: "md:col-span-2",
    },
    {
      icon: <Wrench className="w-5 h-5" strokeWidth={1.5} />,
      name: t(lang, "catTools"),
      cat: "AI辅助工具",
      count: "8 " + (lang === "zh" ? "款" : ""),
      desc: t(lang, "catToolsDesc"),
      accent: "#D4A574",
      span: "",
    },
  ];
}

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

function featuredModels(lang: Lang) {
  return [
    {
      name: "DeepSeek",
      company: lang === "zh" ? "深度求索" : "DeepSeek AI",
      desc: lang === "zh" ? "网页/APP对话免费，推理能力突出" : "Free web/app chat, strong reasoning",
      tags: lang === "zh" ? "编程 · 推理 · 中文原生" : "Coding · Reasoning · Chinese",
      badge: lang === "zh" ? "免费+付费" : "Free+Paid",
      href: "models/deepseek.html",
      accent: "#E8542C",
    },
    {
      name: "Kimi",
      company: lang === "zh" ? "月之暗面" : "Moonshot AI",
      desc: lang === "zh" ? "中文写作最细腻，长文案生成不跑题" : "Best Chinese writing, stays on-topic",
      tags: lang === "zh" ? "写作 · PPT · 深度研究" : "Writing · PPT · Research",
      badge: lang === "zh" ? "免费+付费" : "Free+Paid",
      href: "models/kimi.html",
      accent: "#4A7C59",
    },
    {
      name: lang === "zh" ? "通义千问" : "Tongyi Qianwen",
      company: lang === "zh" ? "阿里巴巴" : "Alibaba Cloud",
      desc: lang === "zh" ? "阿里云生态深度集成，企业级首选" : "Deep Alibaba ecosystem, enterprise-grade",
      tags: lang === "zh" ? "企业级 · 开源 · 阿里云" : "Enterprise · Open Source · Alibaba",
      badge: lang === "zh" ? "免费+付费" : "Free+Paid",
      href: "models/qwen.html",
      accent: "#D4A574",
    },
  ];
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => loadLang());

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
  }, [lang]);

  const toggleLang = () => {
    const next = lang === "zh" ? "en" : "zh";
    saveLang(next);
    setLang(next);
  };

  const categories = categoryData(lang);
  const stats = [
    { num: "352", label: t(lang, "statTools") },
    { num: "44", label: t(lang, "statModels") },
    { num: "6", label: t(lang, "statCategories") },
  ];
  const featured = featuredModels(lang);

  return (
    <NoiseBackground variant="cream" className="min-h-screen">
      {/* ── NAVBAR ── */}
      <SiteNav lang={lang} onToggleLang={toggleLang} />

      {/* ── HERO: left-aligned, non-symmetric ── */}
      <header className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 md:col-start-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6 text-sm text-[#475569]">
              <span className="w-1 h-1 rounded-full bg-[#E8542C]" />
              <span>{t(lang, "homeEyebrow")}</span>
            </div>

            <h1 className="text-[2.5rem] md:text-[4.2rem] leading-[1.05] font-extrabold tracking-tight text-[#1A1A1A] mb-6">
              {t(lang, "homeHero1")}
              <br />
              {t(lang, "homeHero2")}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#E8542C]">{t(lang, "homeHeroAccent")}</span>
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
              {t(lang, "homeHero3")}
            </h1>

            <p className="text-lg md:text-xl text-[#475569] leading-relaxed max-w-lg mb-8">
              {t(lang, "homeSubtitle")}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Magnetic>
                <a
                  href="tools.html"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E8542C] px-7 py-3 text-sm font-semibold text-white hover:bg-[#1A1A1A] transition-colors duration-300"
                >
                  {t(lang, "homeCtaTools")} <ArrowRight className="w-4 h-4" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="models.html"
                  className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/20 px-7 py-3 text-sm font-semibold text-[#1A1A1A] hover:border-[#E8542C] hover:text-[#E8542C] transition-colors duration-300"
                >
                  {t(lang, "homeCtaModels")}
                </a>
              </Magnetic>
              <a
                href="picker.html"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4A7C59] hover:text-[#E8542C] transition"
              >
                <Compass className="w-4 h-4" strokeWidth={1.5} />
                {t(lang, "homePicker")}
              </a>
            </div>

            <div className="flex items-baseline gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="text-3xl font-extrabold text-[#1A1A1A]">{s.num}</span>
                  <span className="ml-2 text-sm text-[#475569]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8 relative md:mt-8">
            <div className="relative md:mt-8">
              <div
                className="absolute -top-6 -left-4 w-72 h-72 rounded-full opacity-[0.06] pointer-events-none"
                style={{
                  background: "radial-gradient(circle, #E8542C, transparent 70%)",
                }}
              />
              <div className="relative rotate-1 md:rotate-3">
                <div className="rounded-2xl border border-[#E8DFD3] bg-white/60 backdrop-blur-sm p-6 shadow-[0_10px_40px_-10px_rgba(232,84,44,0.10)]">
                  <HomeSearch />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-2 -rotate-6 hidden md:block">
                <div className="rounded-full bg-[#1A1A1A] text-[#FAF7F2] px-4 py-1.5 text-xs font-medium">
                  {lang === "zh" ? "不当裁判，只当便利店" : "Not the judge, just a convenience store"}
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
              <strong>{t(lang, "homeCoreTitle")}</strong>
              {t(lang, "homeCoreText")}
            </p>
          </div>
        </StaggerReveal>
      </section>

      {/* ── BENTO CATEGORIES: asymmetric grid, not 3-cards ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1A1A1A]">
              {t(lang, "homeBentoTitle")}
            </h2>
            <p className="mt-2 text-[#475569]">{t(lang, "homeBentoSubtitle")}</p>
          </div>
          <InkLink href="tools.html" className="hidden md:inline-block text-sm whitespace-nowrap">
            {t(lang, "homeBentoCta")}
          </InkLink>
        </div>

        <div className="grid md:grid-cols-3 gap-4 auto-rows-[12rem]">
          {categories.map((c, i) => (
            <StaggerReveal key={c.cat} delay={i * 0.08} className={c.span}>
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
                  href={`models.html?cat=${encodeURIComponent(c.cat)}`}
                  className="inline-flex items-center gap-1 text-sm font-medium"
                  style={{ color: c.accent }}
                >
                  {t(lang, "catCta")} <ArrowUpRight className="w-3.5 h-3.5" />
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
                {t(lang, "homeBlogTitle")}
              </h2>
              <p className="mt-2 text-[#475569]">{t(lang, "homeBlogSubtitle")}</p>
            </div>
            <InkLink href="blog/" className="text-sm whitespace-nowrap">
              {t(lang, "homeBlogCta")}
            </InkLink>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => (
              <a
                key={post.title}
                href={post.href}
                className="group flex flex-col rounded-2xl border border-[#E8DFD3] bg-white/50 backdrop-blur-sm p-6 hover:border-[#E8542C]/40 hover:shadow-[0_15px_50px_-15px_rgba(232,84,44,0.12)] transition-all duration-300"
                style={{ transform: i % 2 === 0 ? "rotate(-0.3deg)" : "rotate(0.3deg)" }}
              >
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E8542C]/10 text-[#E8542C] mb-4">
                  {post.tag}
                </span>
                <h3 className="font-bold text-[#1A1A1A] text-lg mb-2 group-hover:text-[#E8542C] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{post.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#1A1A1A] group-hover:text-[#E8542C] transition-colors">
                  {lang === "zh" ? "读全文" : "Read"} <ArrowUpRight className="w-3.5 h-3.5" />
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
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <MatrixRain className="opacity-70" speed={0.5} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#E8542C]/20 text-[#E8542C] mb-6">
            {t(lang, "homeXianxiaTag")}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#FAF7F2] mb-4">
            {t(lang, "homeXianxiaTitle")}
          </h2>
          <p className="text-[#FAF7F2]/70 max-w-xl mx-auto mb-8 leading-relaxed">
            {t(lang, "homeXianxiaSubtitle")}
          </p>
          <Magnetic>
            <a
              href="xianxia/index.html"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8542C] px-7 py-3 text-sm font-semibold text-white hover:bg-[#FAF7F2] hover:text-[#1A1A1A] transition-colors duration-300"
            >
              {t(lang, "homeXianxiaCta")} <ArrowRight className="w-4 h-4" />
            </a>
          </Magnetic>
        </div>
      </section>

      {/* ── FEATURED MODELS: non-symmetric layout ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1A1A1A] mb-2">
              {t(lang, "homeFeaturedTitle")}
            </h2>
            <p className="text-[#475569] mb-4">{t(lang, "homeFeaturedSubtitle")}</p>
            <InkLink href="models.html" className="text-sm">
              {t(lang, "homeFeaturedCta")}
            </InkLink>
          </div>
          <div className="md:col-span-8 grid gap-4">
            {featured.map((m, i) => (
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
      <SiteFooter lang={lang} />
    </NoiseBackground>
  );
}
