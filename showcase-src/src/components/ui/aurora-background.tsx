"use client";
import { cn } from "../../lib/utils";

export const AuroraBackground = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-full w-full items-center justify-center overflow-hidden bg-[#03030a] text-white",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 [mask-image:radial-gradient(50%_50%_at_50%_50%,white,transparent)] animate-aurora"
          style={{
            backgroundImage:
              "repeating-linear-gradient(100deg, rgba(14,165,233,0.25) 0%, transparent 15%, rgba(59,130,246,0.18) 30%, transparent 45%)",
            backgroundSize: "300% 300%",
          }}
        />
        <div
          className="absolute inset-0 opacity-20 [mask-image:radial-gradient(60%_60%_at_50%_40%,white,transparent)] animate-aurora"
          style={{
            backgroundImage:
              "repeating-linear-gradient(80deg, rgba(16,185,129,0.15) 0%, transparent 20%, rgba(14,165,233,0.2) 40%, transparent 60%)",
            backgroundSize: "250% 250%",
            animationDirection: "reverse",
          }}
        />
      </div>
      {children}
    </div>
  );
};
