import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

function AnimatedText({ texts, className = "", interval = 2000 }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Properly capitalize each word in the text
  const capitalizedTexts = texts.map(text => 
    text.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % capitalizedTexts.length);
    }, interval);
    return () => clearTimeout(timeoutId);
  }, [currentIndex, capitalizedTexts.length, interval]);

  return (
    <span className={`relative inline-block ${className}`} aria-live="polite" aria-atomic="true">
      {/* Animated text container - responsive width */}
      <span className="inline-block overflow-hidden min-w-[120px] sm:min-w-[140px] md:min-w-[160px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            className="inline-block whitespace-nowrap font-bold text-center w-full"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
              duration: 0.5
            }}
          >
            {capitalizedTexts[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}

export { AnimatedText };