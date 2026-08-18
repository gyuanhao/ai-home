"use client";
import { cn } from "../../lib/utils";

/**
 * NoiseBackground — layered, non-flat background with subtle noise texture
 * + soft radial gradient blobs. Anti-SaaS: warm, organic, textured.
 */
export const NoiseBackground = ({
  className,
  children,
  variant = "cream",
}: {
  className?: string;
  children?: React.ReactNode;
  variant?: "cream" | "ink" | "warm";
}) => {
  const palettes = {
    cream: {
      base: "#FAF7F2",
      blobs: [
        { color: "rgba(232,84,44,0.08)", x: "10%", y: "5%", size: "500px" },
        { color: "rgba(74,124,89,0.06)", x: "85%", y: "15%", size: "400px" },
        { color: "rgba(212,165,116,0.07)", x: "50%", y: "80%", size: "600px" },
      ],
    },
    ink: {
      base: "#121210",
      blobs: [
        { color: "rgba(232,84,44,0.10)", x: "15%", y: "10%", size: "450px" },
        { color: "rgba(74,124,89,0.07)", x: "80%", y: "20%", size: "380px" },
      ],
    },
    warm: {
      base: "#F5EFE6",
      blobs: [
        { color: "rgba(232,84,44,0.06)", x: "20%", y: "30%", size: "550px" },
        { color: "rgba(212,165,116,0.08)", x: "75%", y: "60%", size: "500px" },
      ],
    },
  };
  const p = palettes[variant];
  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{ background: p.base }}
    >
      {/* Radial gradient blobs for depth */}
      {p.blobs.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            background: b.color,
            transform: "translate(-50%,-50%)",
          }}
        />
      ))}
      {/* SVG noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px",
        }}
      />
      {/* Content above background layers */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
