import { useEffect, useMemo, useRef, useState } from "react";
import { Search, ArrowUpRight, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";

type Hit = {
  type: "模型" | "工具";
  name: string;
  sub: string;
  href: string;
  searchText: string;
};

const HOT_TAGS: { label: string; href: string }[] = [
  { label: "Kimi", href: "models/kimi.html" },
  { label: "Claude", href: "models/claude.html" },
  { label: "Cursor", href: "tools/cursor.html" },
  { label: "DeepSeek", href: "models/deepseek.html" },
  { label: "AI绘画", href: "tools.html" },
];

/**
 * HomeSearch — working on-site search for the hero card.
 * Lazy-loads scripts/models.json + scripts/tools.json on first focus,
 * shows a grouped live dropdown (模型 / 工具), hot tags deep-link directly.
 */
export const HomeSearch = () => {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef<Hit[] | null>(null);

  const loadIndex = () => {
    if (indexRef.current || loading) return;
    setLoading(true);
    Promise.all([
      fetch("scripts/models.json")
        .then((r) => (r.ok ? r.json() : []))
        .catch(() => []),
      fetch("scripts/tools.json")
        .then((r) => (r.ok ? r.json() : []))
        .catch(() => []),
    ])
      .then(([models, tools]) => {
        const items: Hit[] = [];
        const mList = Array.isArray(models) ? models : models?.models || models?.items || [];
        mList.forEach((m: any) => {
          if (!m?.id) return;
          items.push({
            type: "模型",
            name: m.name || m.nameEn || m.id,
            sub: [m.category, m.company].filter(Boolean).join(" · "),
            href: `models/${m.id}.html`,
            searchText: [m.name, m.nameEn, m.category, m.company, m.summary, (m.tags || []).join(" ")]
              .filter(Boolean)
              .join(" ")
              .toLowerCase(),
          });
        });
        const tList = Array.isArray(tools) ? tools : tools?.tools || tools?.items || [];
        tList.forEach((t: any) => {
          if (!t?.id) return;
          items.push({
            type: "工具",
            name: t.name || t.nameEn || t.id,
            sub: [t.category, t.company].filter(Boolean).join(" · "),
            href: `tools/${t.id}.html`,
            searchText: [t.name, t.nameEn, t.category, t.company, t.summary, (t.tags || []).join(" ")]
              .filter(Boolean)
              .join(" ")
              .toLowerCase(),
          });
        });
        indexRef.current = items;
      })
      .finally(() => setLoading(false));
  };

  const hits = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t || !indexRef.current) return [];
    return indexRef.current
      .filter((it) => it.searchText.includes(t))
      .slice(0, 8);
  }, [q]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const submit = () => {
    const t = q.trim();
    if (!t) return;
    if (hits.length > 0) {
      window.location.href = hits[0].href;
    } else {
      window.location.href = "tools.html?q=" + encodeURIComponent(t);
    }
  };

  return (
    <div ref={boxRef} className="relative">
      {/* Input row */}
      <div className="flex items-center gap-2 mb-4 text-sm text-[#475569]">
        <Search className="w-4 h-4" strokeWidth={1.5} />
        <span>站内搜索</span>
        {loading && <Loader2 className="w-3.5 h-3.5 animate-spin ml-auto" />}
      </div>

      <div className="relative">
        <input
          type="text"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            loadIndex();
            setOpen(true);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit();
            if (e.key === "Escape") setOpen(false);
          }}
          placeholder="搜模型或工具，如 Cursor、Kimi…"
          className="w-full rounded-xl border border-[#E8DFD3] bg-white/80 backdrop-blur-sm px-4 py-2.5 text-sm text-[#1A1A1A] placeholder:text-[#475569]/50 focus:outline-none focus:border-[#E8542C]/60 focus:ring-2 focus:ring-[#E8542C]/10 transition"
          aria-label="站内搜索"
          autoComplete="off"
          spellCheck={false}
        />

        {/* Dropdown */}
        {open && q.trim() && (
          <div className="absolute left-0 right-0 top-full mt-2 z-30 overflow-hidden rounded-xl border border-[#E8DFD3] bg-white/95 backdrop-blur-md shadow-[0_20px_60px_-15px_rgba(26,26,26,0.18)]">
            {loading && !indexRef.current ? (
              <div className="px-4 py-6 text-center text-xs text-[#475569]">正在载入索引…</div>
            ) : hits.length === 0 ? (
              <div className="px-4 py-5 text-xs text-[#475569] leading-relaxed">
                站内没找到「{q.trim()}」。
                <br />
                <a href={"tools.html?q=" + encodeURIComponent(q.trim())} className="text-[#E8542C] hover:underline font-medium">
                  去工具库搜
                </a>
                {" · "}
                <a href={"models.html?q=" + encodeURIComponent(q.trim())} className="text-[#4A7C59] hover:underline font-medium">
                  去模型库搜
                </a>
              </div>
            ) : (
              <ul className="max-h-72 overflow-y-auto py-1">
                {hits.map((it) => (
                  <li key={it.type + it.href}>
                    <a
                      href={it.href}
                      className="group flex items-center gap-3 px-4 py-2.5 hover:bg-[#FAF7F2] transition-colors"
                    >
                      <span
                        className={cn(
                          "inline-flex items-center justify-center w-8 h-8 rounded-lg text-[11px] font-bold flex-shrink-0",
                          it.type === "模型" ? "bg-[#E8542C]/10 text-[#E8542C]" : "bg-[#4A7C59]/10 text-[#4A7C59]"
                        )}
                      >
                        {it.type}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm font-medium text-[#1A1A1A] truncate">{it.name}</span>
                        <span className="block text-xs text-[#475569] truncate">{it.sub}</span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#475569] group-hover:text-[#E8542C] transition-colors flex-shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Hot tags → deep links */}
      <div className="mt-4 space-y-2">
        <div className="flex flex-wrap gap-2">
          {HOT_TAGS.map((tag) => (
            <a
              key={tag.label}
              href={tag.href}
              className="inline-block px-3 py-1 rounded-full text-xs font-medium border border-[#E8542C]/25 text-[#E8542C] hover:bg-[#E8542C]/10 hover:border-[#E8542C]/50 transition-colors"
            >
              {tag.label}
            </a>
          ))}
        </div>
        <div className="pt-3 border-t border-[#E8DFD3] text-xs text-[#475569]">
          热门直达，回车去工具库 / 模型库搜索
        </div>
      </div>
    </div>
  );
};
