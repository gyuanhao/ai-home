"use client";
import { useRef, useState } from "react";
import { cn } from "../../lib/utils";

/**
 * HoverCard — tilt + spotlight on hover (CSS-only, no framer-motion).
 * Anti-SaaS: warm shadow, rounded-3xl, cream border.
 */
export const HoverCard = ({
  children,
  className,
  spotlightColor = "rgba(232,84,44,0.10)",
}: {
  children?: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50, rx: 0, ry: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        setPos({
          x: px * 100,
          y: py * 100,
          rx: (py - 0.5) * -12,
          ry: (px - 0.5) * 12,
        });
      }}
      onMouseLeave={() => setPos({ x: 50, y: 50, rx: 0, ry: 0 })}
      className={cn(
        "relative rounded-3xl border border-[#E8DFD3] bg-white/70 backdrop-blur-sm overflow-hidden",
        "transition-shadow duration-300 hover:shadow-[0_20px_60px_-15px_rgba(232,84,44,0.12)]",
        className
      )}
      style={{
        transform: `perspective(800px) rotateX(${pos.rx}deg) rotateY(${pos.ry}deg)`,
        transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(300px circle at ${pos.x}% ${pos.y}%, ${spotlightColor}, transparent 50%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
