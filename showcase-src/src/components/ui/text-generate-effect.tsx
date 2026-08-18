"use client";
import { useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = Array.from(words);
  useEffect(() => {
    animate(
      "span",
      { opacity: 1 },
      { duration: 1.5, delay: stagger(0.04) }
    );
  }, [animate, words]);
  return (
    <div ref={scope} className={cn(className)}>
      {wordsArray.map((word, idx) => (
        <motion.span key={idx} className="opacity-0 inline-block">
          {word}
        </motion.span>
      ))}
    </div>
  );
};
