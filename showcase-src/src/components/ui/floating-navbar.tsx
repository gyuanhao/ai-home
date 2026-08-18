"use client";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "../../lib/utils";

export const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const prev = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - prev.current;
      if (direction < 0) {
        setVisible(true);
      } else if (current > 30) {
        setVisible(false);
      }
      prev.current = current;
    }
  });

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.35 }}
      className={cn(
        "fixed top-4 inset-x-0 mx-auto max-w-5xl z-50",
        className
      )}
    >
      <nav className="flex items-center justify-between px-5 py-3 rounded-full border border-white/10 bg-black/40 backdrop-blur-md shadow-lg">
        <a
          href="../"
          className="flex items-center gap-2 font-bold text-white tracking-tight"
        >
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
          AI家AI户
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="px-3 py-1.5 rounded-full text-sm text-neutral-300 hover:text-white hover:bg-white/10 transition"
            >
              {item.name}
            </a>
          ))}
        </div>
        <a
          href="../tools.html"
          className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary text-white hover:bg-primary-dark transition"
        >
          进入站点
        </a>
      </nav>
    </motion.div>
  );
};
