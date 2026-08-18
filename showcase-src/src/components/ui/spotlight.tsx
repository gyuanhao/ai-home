"use client";
import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

export const Spotlight = ({
  className,
  fill = "rgba(14,165,233,0.15)",
}: {
  className?: string;
  fill?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    const parent = el ? (el.parentElement as HTMLElement) : null;
    if (!el || !parent) return;
    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      el.style.background = `radial-gradient(600px circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, ${fill}, transparent 40%)`;
    };
    parent.addEventListener("mousemove", onMove);
    return () => parent.removeEventListener("mousemove", onMove);
  }, [fill]);
  return (
    <div
      ref={ref}
      className={cn(
        "pointer-events-none absolute inset-0 z-[1] transition-opacity duration-300",
        className
      )}
    />
  );
};
