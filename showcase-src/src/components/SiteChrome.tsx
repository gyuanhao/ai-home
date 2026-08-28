import { ArrowRight, ChevronDown } from "lucide-react";
import { Magnetic } from "./ui/magnetic";
import { InkLink } from "./ui/ink-link";
import { Lang, t } from "../lib/i18n";

/**
 * SiteNav — 全站共享导航（与首页视觉一致：sticky + blur + 墨黑按钮）
 *
 * 2026-08-28 统一：顶部导航条目与侧边导航完全一致，对比类用下拉聚合。
 */
export function SiteNav({
  lang,
  onToggleLang,
}: {
  lang: Lang;
  onToggleLang: () => void;
}) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#FAF7F2]/85 border-b border-[#E8DFD3]/60">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="index.html" className="flex items-center gap-2 font-bold text-[#1A1A1A]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E8542C]" />
          AI家AI户
        </a>

        {/* desktop nav: 与侧边栏项目保持一致 */}
        <div className="hidden lg:flex items-center gap-5 text-sm text-[#475569]">
          <InkLink href="models.html">{t(lang, "navModels")}</InkLink>
          <InkLink href="tools.html">{t(lang, "navTools")}</InkLink>

          {/* 对比类下拉 */}
          <div className="relative group">
            <button className="flex items-center gap-0.5 hover:text-[#E8542C] transition-colors">
              {t(lang, "navCompare")} <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-[#FAF7F2]/95 backdrop-blur-md border border-[#E8DFD3]/80 rounded-xl shadow-lg p-1.5 min-w-[140px]">
                <a
                  href="compare.html"
                  className="block px-3 py-2 rounded-lg text-sm hover:bg-[#E8542C]/10 hover:text-[#E8542C] transition-colors"
                >
                  {t(lang, "navCompare")}
                </a>
                <a
                  href="compare-custom.html"
                  className="block px-3 py-2 rounded-lg text-sm hover:bg-[#E8542C]/10 hover:text-[#E8542C] transition-colors"
                >
                  {t(lang, "navCompareCustom")}
                </a>
                <a
                  href="vs/"
                  className="block px-3 py-2 rounded-lg text-sm hover:bg-[#E8542C]/10 hover:text-[#E8542C] transition-colors"
                >
                  {t(lang, "navVs")}
                </a>
              </div>
            </div>
          </div>

          <InkLink href="picker.html">{t(lang, "navPicker")}</InkLink>
          <InkLink href="news.html">{t(lang, "navNews")}</InkLink>
          <InkLink href="skills.html">{t(lang, "navSkills")}</InkLink>
          <InkLink href="blog/">{t(lang, "navBlog")}</InkLink>
          <InkLink href="papers.html">{t(lang, "navPapers")}</InkLink>
          <InkLink href="about.html">{t(lang, "navAbout")}</InkLink>
          <InkLink href="showcase/" className="text-[#E8542C]">
            {t(lang, "navShowcase")}
          </InkLink>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLang}
            className="text-xs font-medium px-2.5 py-1 rounded-full border border-[#E8DFD3] text-[#475569] hover:border-[#E8542C]/50 hover:text-[#E8542C] transition-colors"
            aria-label="切换语言"
          >
            {t(lang, "langLabel")}
          </button>
          <a
            href="xianxia/index.html"
            className="hidden sm:inline text-sm text-[#4A7C59] hover:text-[#1A1A1A] transition"
          >
            {t(lang, "navXianxia")}
          </a>
          <Magnetic>
            <a
              href="tools.html"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#1A1A1A] px-4 py-2 text-sm font-medium text-[#FAF7F2] hover:bg-[#E8542C] transition-colors duration-300"
            >
              {t(lang, "navCta")} <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Magnetic>
        </div>
      </div>
    </nav>
  );
}

/**
 * SiteFooter — 全站共享页脚
 */
export function SiteFooter({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-[#E8DFD3] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-[#475569]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E8542C]" />
          AI家AI户 · 抱走西瓜 维护
        </div>
        <div className="flex flex-wrap gap-5">
          <InkLink href="models.html">{t(lang, "navModels")}</InkLink>
          <InkLink href="tools.html">{t(lang, "navTools")}</InkLink>
          <InkLink href="about.html">{t(lang, "navAbout")}</InkLink>
          <InkLink href="privacy.html">隐私政策</InkLink>
          <InkLink href="blog/">{t(lang, "navBlog")}</InkLink>
          <InkLink href="papers.html">{t(lang, "navPapers")}</InkLink>
        </div>
        <div className="text-xs text-[#475569]/70">{t(lang, "footerNote")} · 站点最后更新 2026年8月</div>
      </div>
      <div className="max-w-6xl mx-auto mt-4 text-xs text-[#475569]/60 px-0">
        {t(lang, "followUs")}
        <a
          href="https://www.xiaohongshu.com/search_result?keyword=%E6%8A%B1%E8%B5%B0%E8%A5%BF%E7%93%9C"
          target="_blank"
          rel="noopener me"
          className="hover:text-[#E8542C] transition"
        >
          {t(lang, "xhs")}
        </a>
      </div>
    </footer>
  );
}
