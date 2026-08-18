import { useEffect, useMemo, useState } from "react";
import { Search, ArrowUpRight, X, Loader2, Wrench } from "lucide-react";
import { NoiseBackground } from "./components/ui/noise-background";
import { SiteNav, SiteFooter } from "./components/SiteChrome";
import { Lang, loadLang, saveLang, t } from "./lib/i18n";

type Tool = {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  tags: string[];
  tagsEn: string[];
  pricing: string;
  priceLabel: string;
  priceLabelEn: string;
  website: string;
  company: string;
  companyEn: string;
  region: string;
  summary: string;
  summaryEn: string;
};

type SortMode = "default" | "free" | "name";

export default function ToolsApp() {
  const [lang, setLang] = useState<Lang>(loadLang);
  const [items, setItems] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState<SortMode>("default");

  // 数据加载 + ?q= / ?cat= 深链
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q0 = params.get("q");
    const c0 = params.get("cat");
    if (q0) setQ(q0);
    if (c0) setCat(c0);

    fetch("scripts/tools.json")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        const list = Array.isArray(d) ? d : d?.tools || d?.items || [];
        setItems(list);
        // 深链分类校验：参数分类不在数据里则回退 all
        if (c0 && !list.some((i: Tool) => i.category === c0)) setCat("all");
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const toggleLang = () => {
    const next: Lang = lang === "zh" ? "en" : "zh";
    setLang(next);
    saveLang(next);
  };

  const categories = useMemo(() => {
    const s = new Set(items.map((i) => i.category).filter(Boolean));
    return Array.from(s);
  }, [items]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    let out = items.filter((it) => {
      if (cat !== "all" && it.category !== cat) return false;
      if (!query) return true;
      const hay = [
        it.name,
        it.nameEn,
        it.category,
        it.company,
        it.companyEn,
        it.summary,
        it.summaryEn,
        (it.tags || []).join(" "),
        (it.tagsEn || []).join(" "),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(query);
    });
    if (sort === "free") {
      out = out.filter((it) => it.pricing === "free" || it.pricing === "freemium").concat(
        out.filter((it) => it.pricing !== "free" && it.pricing !== "freemium")
      );
    } else if (sort === "name") {
      out = [...out].sort((a, b) => (lang === "en" ? a.nameEn || a.name : a.name).localeCompare(lang === "en" ? b.nameEn || b.name : b.name, "zh"));
    }
    return out;
  }, [items, q, cat, sort, lang]);

  const count = filtered.length;

  return (
    <NoiseBackground variant="cream" className="min-h-screen">
      <SiteNav lang={lang} onToggleLang={toggleLang} />

      {/* 页眉 */}
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#E8542C]/10 text-[#E8542C]">
            <Wrench className="w-5 h-5" strokeWidth={1.5} />
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
            {t(lang, "titleTools")}
          </h1>
        </div>
        <p className="text-[#475569] max-w-2xl">
          {t(lang, "descTools", { n: items.length || 362 })}
        </p>
      </header>

      {/* 工具栏 */}
      <div className="max-w-6xl mx-auto px-6 pb-6">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#475569]" />
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t(lang, "searchPlaceholderTools")}
              className="w-full rounded-full border border-[#E8DFD3] bg-white/80 backdrop-blur-sm pl-11 pr-10 py-3 text-sm text-[#1A1A1A] placeholder:text-[#475569]/50 focus:outline-none focus:border-[#E8542C]/60 focus:ring-2 focus:ring-[#E8542C]/10 transition"
            />
            {q && (
              <button
                onClick={() => setQ("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#475569] hover:text-[#E8542C] transition"
                aria-label={t(lang, "clear")}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortMode)}
            className="rounded-full border border-[#E8DFD3] bg-white/80 px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E8542C]/60 cursor-pointer"
          >
            <option value="default">{t(lang, "sortDefault")}</option>
            <option value="free">{t(lang, "sortFree")}</option>
            <option value="name">{t(lang, "sortName")}</option>
          </select>
        </div>

        {/* 分类 chips */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2 pr-4 scrollbar-hide">
          <button
            onClick={() => setCat("all")}
            className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-medium border whitespace-nowrap transition-colors ${
              cat === "all"
                ? "bg-[#1A1A1A] text-[#FAF7F2] border-[#1A1A1A]"
                : "border-[#E8DFD3] text-[#475569] hover:border-[#E8542C]/50 hover:text-[#E8542C]"
            }`}
          >
            {t(lang, "all")}
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(cat === c ? "all" : c)}
              className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-medium border whitespace-nowrap transition-colors ${
                cat === c
                  ? "bg-[#E8542C] text-white border-[#E8542C]"
                  : "border-[#E8DFD3] text-[#475569] hover:border-[#E8542C]/50 hover:text-[#E8542C]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* 计数 + 网格 */}
      <main className="max-w-6xl mx-auto px-6 pb-16">
        <p className="text-xs text-[#475569]/70 mb-4">
          {loading ? t(lang, "loading") : t(lang, count === 1 ? "countTools" : "countTools", { n: count })}
        </p>

        {loading ? (
          <div className="flex items-center gap-2 text-sm text-[#475569] py-16 justify-center">
            <Loader2 className="w-4 h-4 animate-spin" /> {t(lang, "loading")}
          </div>
        ) : error ? (
          <div className="text-center py-16 text-[#E8542C] text-sm">{t(lang, "loadError")}</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-[#475569] text-sm">{t(lang, "empty")}</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((it) => (
              <a
                key={it.id}
                href={`tools/${it.id}.html`}
                className="group flex flex-col rounded-2xl border border-[#E8DFD3] bg-white/60 backdrop-blur-sm p-5 hover:border-[#E8542C]/35 hover:shadow-[0_14px_44px_-16px_rgba(232,84,44,0.15)] transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#E8542C]/10 text-[#E8542C] font-bold text-base flex-shrink-0">
                    {(lang === "en" ? it.nameEn || it.name : it.name).charAt(0)}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[#1A1A1A] leading-snug group-hover:text-[#E8542C] transition-colors line-clamp-1">
                      {lang === "en" ? it.nameEn || it.name : it.name}
                    </h3>
                    <p className="text-xs text-[#475569] truncate mt-0.5">
                      {lang === "en" ? it.companyEn || it.company : it.company}
                      {it.region ? ` · ${it.region}` : ""}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed line-clamp-2 mb-4 flex-1">
                  {lang === "en" ? it.summaryEn || it.summary : it.summary}
                </p>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#4A7C59]/10 text-[#4A7C59]">
                    {lang === "en" ? it.priceLabelEn || it.priceLabel : it.priceLabel}
                  </span>
                  {(lang === "en" ? it.tagsEn?.slice(0, 2) : it.tags?.slice(0, 2))?.map((tag) => (
                    <span key={tag} className="text-xs text-[#475569]/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-1 text-sm font-medium text-[#1A1A1A] group-hover:text-[#E8542C] transition-colors">
                  {t(lang, "detail")} <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        )}
      </main>

      <SiteFooter lang={lang} />
    </NoiseBackground>
  );
}
