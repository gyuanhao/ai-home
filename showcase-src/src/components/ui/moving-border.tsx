"use client";
import { cn } from "../../lib/utils";

export const MovingBorder = ({
  children,
  className,
  containerClassName,
  borderClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-[1.5px] overflow-hidden",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-2xl animate-[spin_5s_linear_infinite]",
          borderClassName ??
            "bg-[conic-gradient(from_0deg,#0ea5e9,#0284c7,#10b981,#0ea5e9)]"
        )}
      />
      <div
        className={cn(
          "relative rounded-2xl bg-[#0a0a14] p-6 h-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
