"use client";
import { cn } from "../../lib/utils";

/**
 * InkLink — text link with animated underline (CSS-only, no framer-motion).
 */
export const InkLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <a
      href={href}
      className={cn(
        "relative inline-block font-medium text-[#1A1A1A] hover:text-[#E8542C] transition-colors duration-300 group",
        className
      )}
    >
      {children}
      <span
        className="absolute left-0 bottom-0 h-[1.5px] bg-[#E8542C] w-0 group-hover:w-full transition-all duration-300 ease-out"
      />
    </a>
  );
};
