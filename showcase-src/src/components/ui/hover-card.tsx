"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * HoverCard — tilt + spotlight on hover, but with warm shadow and
 * organic border-radius (not the default dark SaaS card).
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
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], ["6deg", "-6deg"]), { stiffness: 120, damping: 12 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], ["-6deg", "6deg"]), { stiffness: 120, damping: 12 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        mx.set((e.clientX - r.left - r.width / 2) / r.width);
        my.set((e.clientY - r.top - r.height / 2) / r.height);
        setPos({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
        });
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className={cn(
        "relative rounded-3xl border border-[#E8DFD3] bg-white/70 backdrop-blur-sm overflow-hidden",
        "transition-shadow duration-300 hover:shadow-[0_20px_60px_-15px_rgba(232,84,44,0.12)]",
        className
      )}
    >
      {/* Warm spotlight follow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(300px circle at ${pos.x}% ${pos.y}%, ${spotlightColor}, transparent 50%)`,
        }}
      />
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
};
