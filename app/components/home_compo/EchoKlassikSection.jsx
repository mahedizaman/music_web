"use client";

import { motion } from "framer-motion";

export default function EchoKlassikSection() {
  return (
    <section className="w-full bg-white px-6 md:px-16 lg:px-24 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.92] tracking-tight text-neutral-900 mb-6">
            FIVE TIMES <br />
            ECHO KLASSIK.
          </h2>

          <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-md mb-8">
            The North German Figural Choir has been performing concerts that
            move people since 1981 — on stage, in the audience and beyond.
          </p>

          <div className="flex flex-wrap gap-8 md:gap-12">
            <a
              href="#"
              className="text-xs font-bold tracking-[0.15em] uppercase text-neutral-900 border-b-2 border-neutral-900 pb-1 hover:text-[#bfa065] hover:border-[#bfa065] transition-colors"
            >
              Discover Concerts
            </a>
            <a
              href="#"
              className="text-xs font-bold tracking-[0.15em] uppercase text-neutral-900 border-b-2 border-neutral-900 pb-1 hover:text-[#bfa065] hover:border-[#bfa065] transition-colors"
            >
              Get to Know the Choir
            </a>
          </div>
        </motion.div>

        {/* VERTICAL DIVIDER (hidden on mobile, visible md+) */}
        <div className="hidden md:block w-px bg-neutral-300 self-stretch min-h-[260px]" />

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex-1 md:pl-8 flex flex-col items-start md:items-center text-center"
        >
          {/* Gold 5 */}
          <span className="font-serif text-[10rem] md:text-[12rem] lg:text-[14rem] leading-none text-[#c69a3e] -mb-6 md:-mb-10 select-none">
            5
          </span>

          <h3 className="font-sans text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-neutral-800 mb-10">
            Echo Klassik <br /> Awards
          </h3>

          {/* Small vertical line under text */}
          <div className="w-px h-12 bg-neutral-300 mb-4" />

          <p className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-neutral-500">
            And many more <br /> awarded a prize.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
