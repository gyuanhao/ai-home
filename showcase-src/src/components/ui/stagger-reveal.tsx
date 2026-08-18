"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";

/**
 * StaggerReveal — children fade/slide in sequence on scroll enter.
 * Anti-SaaS: not a simultaneous blast; staggered, organic reveal.
 */
export const StaggerReveal = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 30%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
