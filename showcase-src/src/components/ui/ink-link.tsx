"use client";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * InkLink — a text link with an animated underline that draws like ink.
 * Anti-SaaS: no button-styled links, just editorial underlines.
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
        "relative inline-block font-medium text-[#1A1A1A] hover:text-[#E8542C] transition-colors duration-300",
        className
      )}
    >
      {children}
      <motion.span
        className="absolute left-0 bottom-0 h-[1.5px] bg-[#E8542C]"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />
    </a>
  );
};
