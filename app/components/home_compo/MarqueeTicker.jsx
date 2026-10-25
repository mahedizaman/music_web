"use client";

import { motion } from "framer-motion";

export default function MarqueeTicker() {
  const items = [
    "LOSA",
    "HEINZ HENNIG PRIZE",
    "2 X GERMAN RECORD CRITICS",
    "5 X ECHO KLASSIK",
    "BRAHMS COMPETITION HAMBURG",
    "LOSA",
    "HEINZ HENNIG PRIZE",
    "2 X GERMAN RECORD CRITICS",
    "5 X ECHO KLASSIK",
    "BRAHMS COMPETITION HAMBURG",
    "LOSA",
    "HEINZ HENNIG PRIZE",
    "2 X GERMAN RECORD CRITICS",
    "5 X ECHO KLASSIK",
    "BRAHMS COMPETITION HAMBURG",
    "LOSA",
    "HEINZ HENNIG PRIZE",
    "2 X GERMAN RECORD CRITICS",
    "5 X ECHO KLASSIK",
    "BRAHMS COMPETITION HAMBURG",
    "LOSA",
    "HEINZ HENNIG PRIZE",
    "2 X GERMAN RECORD CRITICS",
    "5 X ECHO KLASSIK",
    "BRAHMS COMPETITION HAMBURG",
    "LOSA",
    "HEINZ HENNIG PRIZE",
    "2 X GERMAN RECORD CRITICS",
    "5 X ECHO KLASSIK",
    "BRAHMS COMPETITION HAMBURG",
    "LOSA",
    "HEINZ HENNIG PRIZE",
    "2 X GERMAN RECORD CRITICS",
    "5 X ECHO KLASSIK",
    "BRAHMS COMPETITION HAMBURG",
    "LOSA",
    "HEINZ HENNIG PRIZE",
    "2 X GERMAN RECORD CRITICS",
    "5 X ECHO KLASSIK",
    "BRAHMS COMPETITION HAMBURG",
    "LOSA",
    "HEINZ HENNIG PRIZE",
    "2 X GERMAN RECORD CRITICS",
    "5 X ECHO KLASSIK",
    "BRAHMS COMPETITION HAMBURG",
  ];

  return (
    <div className="w-full bg-black overflow-hidden py-4 md:py-5 relative">
      <motion.div
        className="flex gap-6 md:gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 5,
        }}
      >
       
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 md:gap-10 text-white text-xs md:text-base font-bold tracking-[0.2em] uppercase"
          >
            {item}
            <span className="text-[#bfa065]"></span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
