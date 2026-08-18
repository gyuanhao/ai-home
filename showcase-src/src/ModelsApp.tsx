import { useEffect, useMemo, useState } from "react";
import { Search, ArrowUpRight, X, Loader2, Brain } from "lucide-react";
import { NoiseBackground } from "./components/ui/noise-background";
import { SiteNav, SiteFooter } from "./components/SiteChrome";
import { Lang, loadLang, saveLang, t } from "./lib/i18n";

type Model = {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  company: string;
  pricing: string;
  priceLabel: string;
  priceLabelEn: string;
  tags: string[];
  tagsEn: string[];
  summary?: string;
};

const CATS = ["语言模型", "Agent平台", "图像模型", "视频模型", "代码模型", "AI辅助工具"];

export default function ModelsApp() {
  const [lang, setLang] = useState<Lang>(loadLang);
  const [items, setItems] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q0 = params.get("q");
    const c0 = params.get("cat");
    if (q0) setQ(q0);
    if (c0 && CATS.includes(c0)) setCat(c0);

    fetch("scripts/models.json")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        const list = Array.isArray(d) ? d : d?.models || d?.items || [];
        setItems(list);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const toggleLang = () => {
    const next: Lang = lang === "zh" ? "en" : "zh";
    setLang(next);
    saveLang(next);
  };

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return items.filter((it) => {
      if (cat !== "all" && it.category !== cat) return false;
      if (!query) return true;
      const hay = [
        it.name,
        it.nameEn,
        it.company,
        it.category,
        (it.tags || []).join(" "),
        (it.tagsEn || []).join(" "),
        it.summary || "",
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(query);
    });
  }, [items, q, cat]);

  const count = filtered.length;

  return (
    <NoiseBackground variant="cream" className="min-h-screen">
      <SiteNav lang={lang} onToggleLang={toggleLang} />

      <header className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#4A7C59]/10 text-[#4A7C59]">
            <Brain className="w-5 h-5" strokeWidth={1.5} />
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
            {t(lang, "titleModels")}
          </h1>
        </div>
        <p className="text-[#475569] max-w-2xl">
          {t(lang, "descModels", { n: items.length || 44 })}
        </p>
      </header>

      <div className="max-w-6xl mx-auto px-6 pb-6">
        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#475569]" />
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t(lang, "searchPlaceholderModels")}
            className="w-full rounded-full border border-[#E8DFD3] bg-white/80 backdrop-blur-sm pl-11 pr-10 py-3 text-sm text-[#1A1A1A] placeholder:text-[#475569]/50 focus:outline-none focus:border-[#4A7C59]/60 focus:ring-2 focus:ring-[#4A7C59]/10 transition"
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

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <button
            onClick={() => setCat("all")}
            className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-medium border whitespace-nowrap transition-colors ${
              cat === "all"
                ? "bg-[#1A1A1A] text-[#FAF7F2] border-[#1A1A1A]"
                : "border-[#E8DFD3] text-[#475569] hover:border-[#4A7C59]/50 hover:text-[#4A7C59]"
            }`}
          >
            {t(lang, "all")}
          </button>
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(cat === c ? "all" : c)}
              className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-medium border whitespace-nowrap transition-colors ${
                cat === c
                  ? "bg-[#4A7C59] text-white border-[#4A7C59]"
                  : "border-[#E8DFD3] text-[#475569] hover:border-[#4A7C59]/50 hover:text-[#4A7C59]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* 品类提示（保留旧版信息） */}
        <p className="flex items-start gap-2 mt-4 text-xs text-[#475569] leading-relaxed">
          <span className="mt-0.5 inline-block w-1.5 h-1.5 rounded-full bg-[#4A7C59] flex-shrink-0" />
          {t(lang, "modelNote1")}
        </p>
        <p className="flex items-start gap-2 mt-2 text-xs text-[#475569] leading-relaxed">
          <span className="mt-0.5 inline-block w-1.5 h-1.5 rounded-full bg-[#E8542C] flex-shrink-0" />
          {t(lang, "modelNote2")}
        </p>
      </div>

      <main className="max-w-6xl mx-auto px-6 pb-16">
        <p className="text-xs text-[#475569]/70 mb-4">
          {loading ? t(lang, "loading") : t(lang, "countModels", { n: count })}
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
                href={`models/${it.id}.html`}
                className="group flex flex-col rounded-2xl border border-[#E8DFD3] bg-white/60 backdrop-blur-sm p-5 hover:border-[#4A7C59]/35 hover:shadow-[0_14px_44px_-16px_rgba(74,124,89,0.15)] transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#4A7C59]/10 text-[#4A7C59] font-bold text-base flex-shrink-0">
                    {(lang === "en" ? it.nameEn || it.name : it.name).charAt(0)}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[#1A1A1A] leading-snug group-hover:text-[#4A7C59] transition-colors line-clamp-1">
                      {lang === "en" ? it.nameEn || it.name : it.name}
                    </h3>
                    <p className="text-xs text-[#475569] truncate mt-0.5">{it.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E8542C]/10 text-[#E8542C]">
                    {it.category}
                  </span>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#4A7C59]/10 text-[#4A7C59]">
                    {lang === "en" ? it.priceLabelEn || it.priceLabel : it.priceLabel}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-[#1A1A1A] mt-auto pt-2 group-hover:text-[#4A7C59] transition-colors">
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
