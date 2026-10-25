"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function NextConcertTab() {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // 1 second scroll na hole hide hoye jabe
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="fixed left-0 top-1/2 -translate-y-1/2 z-[999] bg-white flex flex-col items-center py-6 px-2 border-r border-black"
        >
          {/* Top dot */}
          <span className="w-1.5 h-1.5 bg-black rounded-full mb-2" />

          {/* CONCERT vertical text */}
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase text-black"
            style={{ writingMode: "vertical-rl" }}
          >
            CONCERT
          </span>

          {/* Middle dot */}
          <span className="w-1.5 h-1.5 bg-black rounded-full my-3" />

          {/* Vertical line */}
          <div className="w-px h-10 bg-black" />

          {/* NEXT vertical text */}
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase text-black mt-3"
            style={{ writingMode: "vertical-rl" }}
          >
            NEXT
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
