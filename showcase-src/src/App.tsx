import { AuroraBackground } from "./components/ui/aurora-background";
import { Spotlight } from "./components/ui/spotlight";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import { CardContainer, CardItem } from "./components/ui/3d-card";
import { GlowingEffect } from "./components/ui/glowing-effect";
import { Magnetic } from "./components/ui/magnetic";
import { MovingBorder } from "./components/ui/moving-border";
import { FloatingNavbar } from "./components/ui/floating-navbar";
import { MatrixRain } from "./components/MatrixRain";
import {
  Brain,
  Image as ImageIcon,
  Video,
  Code,
  Bot,
  Sparkles,
  ArrowLeftRight,
  BadgeCheck,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const navItems = [
  { name: "首页", link: "../" },
  { name: "工具库", link: "../tools.html" },
  { name: "模型", link: "../models.html" },
  { name: "博客", link: "../blog/" },
  { name: "关于", link: "../about.html" },
];

const categories = [
  {
    icon: <Brain className="h-6 w-6 text-primary" />,
    title: "语言模型",
    desc: "ChatGPT、Claude、DeepSeek、Gemini……谁更会写、谁更便宜，一表看清。",
    className: "md:col-span-2",
  },
  {
    icon: <ImageIcon className="h-6 w-6 text-primary" />,
    title: "图像模型",
    desc: "Midjourney、Stable Diffusion、FLUX，出图风格与额度对比。",
  },
  {
    icon: <Video className="h-6 w-6 text-primary" />,
    title: "视频模型",
    desc: "Sora、Runway、可灵，生成时长与画质怎么选。",
  },
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "代码模型",
    desc: "Cursor、Copilot、Claude Code，谁更懂你的仓库。",
    className: "md:col-span-2",
  },
  {
    icon: <Bot className="h-6 w-6 text-primary" />,
    title: "Agent 平台",
    desc: "Coze、Dify、Manus，搭智能体的门槛与上限。",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    title: "AI 辅助工具",
    desc: "写作、设计、翻译、会议……把零散工具收进一张表。",
  },
];

const features = [
  {
    icon: <ArrowLeftRight className="h-8 w-8 text-primary" />,
    title: "一站对比",
    desc: "价格、功能、适用场景并排看，不用翻十篇评测。",
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-primary" />,
    title: "来源标注",
    desc: "每家数据标注官网与公开资料，不写没有依据的话。",
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-primary" />,
    title: "持续更新",
    desc: "价格与功能变动频繁，我们保持一定的更新节奏。",
  },
];

export default function App() {
  return (
    <div className="relative w-full bg-[#03030a] text-white overflow-hidden">
      <FloatingNavbar navItems={navItems} />

      {/* HERO */}
      <section className="relative min-h-screen w-full">
        <AuroraBackground className="absolute inset-0">
          <Spotlight className="opacity-100" fill="rgba(14,165,233,0.18)" />
          {/* Matrix rain in hero — sky-blue tint, subtle underlay */}
          <MatrixRain colors={["#0ea5e9", "#38bdf8"]} className="opacity-35" />
          <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-20 max-w-4xl mx-auto">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              中文 AI 选型导航 · Aceternity 展示馆
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
              <TextGenerateEffect words="把 AI 选型，变成三分钟的事" />
            </h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
              352 个工具、44 个模型、6 大品类，全部按价格、功能、适用场景整理到一起。
              你只管看维度、比差异、点链接，剩下的自己判断。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <Magnetic>
                <a
                  href="../tools.html"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-white hover:bg-primary-dark transition shadow-[0_0_30px_-5px_rgba(14,165,233,0.6)]"
                >
                  浏览工具库 <ArrowRight className="h-4 w-4" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="../models.html"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
                >
                  看模型对比
                </a>
              </Magnetic>
            </div>

            {/* stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 sm:gap-16">
              {[
                { n: "352", l: "AI 工具" },
                { n: "44", l: "模型" },
                { n: "6", l: "大品类" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white">
                    {s.n}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-neutral-500">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AuroraBackground>
      </section>

      {/* CATEGORIES */}
      <section className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            六大品类，一张表管完
          </h2>
          <p className="mt-3 text-neutral-400">
            从语言到视频，从代码到 Agent，覆盖你用得上的每一类。
          </p>
        </div>
        <BentoGrid>
          {categories.map((c) => (
            <BentoGridItem
              key={c.title}
              className={c.className}
              icon={c.icon}
              title={c.title}
              description={c.desc}
            />
          ))}
        </BentoGrid>
      </section>

      {/* FEATURES (3D cards) */}
      <section className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            为什么用 AI家AI户
          </h2>
          <p className="mt-3 text-neutral-400">
            不当裁判，只当便利店：近、快、信息摆齐。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <CardContainer key={f.title} className="w-full">
              <CardItem className="w-full">
                <GlowingEffect className="h-full">
                  <div className="p-7 h-full flex flex-col">
                    <div className="mb-5">{f.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </GlowingEffect>
              </CardItem>
            </CardContainer>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-28">
        <div className="max-w-3xl mx-auto">
          <MovingBorder containerClassName="rounded-3xl">
            <div className="text-center px-8 py-14">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                准备好，三分钟看清差异了吗？
              </h2>
              <p className="mt-4 text-neutral-400">
                不用注册，不用看广告。直接进工具库，挑一个你想了解的品类。
              </p>
              <div className="mt-9 flex justify-center">
                <Magnetic>
                  <a
                    href="../tools.html"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white hover:bg-primary-dark transition shadow-[0_0_40px_-5px_rgba(14,165,233,0.7)]"
                  >
                    现在开始 <ArrowRight className="h-4 w-4" />
                  </a>
                </Magnetic>
              </div>
            </div>
          </MovingBorder>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            AI家AI户 · 抱走西瓜 维护
          </div>
          <div className="flex gap-6">
            <a href="../" className="hover:text-white transition">首页</a>
            <a href="../tools.html" className="hover:text-white transition">工具库</a>
            <a href="../about.html" className="hover:text-white transition">关于</a>
          </div>
          <div>本站不接软广 · 数据来源各产品官网</div>
        </div>
      </footer>
    </div>
  );
}
