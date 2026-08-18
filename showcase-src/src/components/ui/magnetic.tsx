"use client";
import { useRef, useState } from "react";
import { cn } from "../../lib/utils";

export const Magnetic = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        setOffset({
          x: (e.clientX - (r.left + r.width / 2)) * 0.3,
          y: (e.clientY - (r.top + r.height / 2)) * 0.3,
        });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.2s ease-out",
      }}
      className={cn("inline-block", className)}
    >
      {children}
    </div>
  );
};
