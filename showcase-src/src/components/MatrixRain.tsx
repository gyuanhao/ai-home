"use client";
import { useEffect, useRef } from "react";

/**
 * MatrixRain — 黑客帝国数字雨（首页深色彩蛋带局部背景 / 展示馆 Hero）
 * 设计：0/1 二进制 + 少量汉字点缀（AI/侠/道…），默认柿子橙+沙金双色拖尾
 * 可通过 colors prop 换主题色（如展示馆天蓝 #0ea5e9）
 * 性能：
 *  - IntersectionObserver 离开视口自动暂停
 *  - visibilitychange 切后台暂停
 *  - prefers-reduced-motion 时只画一帧静态
 *  - devicePixelRatio 上限 2，移动端自动降流
 * 零依赖，纯 canvas。
 */
export const MatrixRain = ({
  className,
  colors = ["#E8542C", "#D4A574"],
  speed = 1,
}: {
  className?: string;
  colors?: [string, string] | string[];
  /** 每帧下移步长（字符行数），0.5 = 半速 */
  speed?: number;
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 640;
    const FONT = isMobile ? 13 : 16;
    const COLORS = colors.length >= 2 ? colors : [colors[0] || "#E8542C", "#D4A574"];
    const GLYPHS = "0101010101AI江湖侠道悟算";

    let W = 0;
    let H = 0;
    let cols = 0;
    let drops: number[] = [];
    let raf = 0;
    let running = false;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const drawChar = (x: number, y: number, color: string, ch: string) => {
      ctx.fillStyle = color;
      ctx.font = FONT + "px 'Cascadia Mono', 'JetBrains Mono', Consolas, monospace";
      ctx.fillText(ch, x, y);
    };

    const paintStatic = () => {
      ctx.fillStyle = "rgba(26,26,26,0.28)";
      ctx.fillRect(0, 0, W, H);
      for (let i = 0; i < cols; i++) {
        drawChar(
          i * FONT,
          Math.floor(Math.random() * (H / FONT)) * FONT,
          COLORS[i % 2] + "55",
          GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        );
      }
    };

    const step = () => {
      // 拖尾：半透明覆盖上一帧
      ctx.fillStyle = "rgba(26,26,26,0.12)";
      ctx.fillRect(0, 0, W, H);
      for (let i = 0; i < cols; i++) {
        const y = Math.floor(drops[i]) * FONT;
        // 头部：亮纸白，醒目但不刺眼
        drawChar(i * FONT, y, "#FAF7F2", GLYPHS[Math.floor(Math.random() * GLYPHS.length)]);
        // 尾随 3 个渐隐字符（主题色交替）
        for (let j = 1; j <= 3; j++) {
          drawChar(
            i * FONT,
            y - j * FONT,
            COLORS[(i + j) % 2] + (j === 1 ? "88" : j === 2 ? "66" : "44"),
            GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          );
        }
        // 到底重置
        if (y > H && Math.random() > 0.975) drops[i] = 0;
        drops[i] += speed; // speed: 每帧下移步长（0.5 = 半速）
      }
      raf = requestAnimationFrame(step);
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = Math.max(1, Math.floor(W * DPR));
      canvas.height = Math.max(1, Math.floor(H * DPR));
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      cols = Math.max(1, Math.floor(W / FONT));
      drops = Array.from({ length: cols }, () => Math.floor(Math.random() * -30));
      if (reduced) paintStatic();
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    if (!reduced) start();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) start();
          else stop();
        });
      },
      { threshold: 0.05 }
    );
    io.observe(wrap);

    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("resize", resize);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", resize);
      stop();
    };
  }, [speed]);

  return (
    <div ref={wrapRef} className={"absolute inset-0 pointer-events-none " + (className || "")}>
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  );
};
