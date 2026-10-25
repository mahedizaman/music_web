"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function ChoirIdSection() {
  return (
    <section className="w-full">
      {/* ===== IMAGE (fill method - more reliable) ===== */}
      <div className="relative w-full h-[16vh] sm:h-[20vh] md:h-[25vh] xl:h-[50vh] overflow-hidden">
        <Image
          src="/images/image10.avif"
          alt="Choir group singing"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      {/* ===== LIGHT PURPLE SECTION (centered) ===== */}
      <div className="w-full bg-[#d9d6e3] px-6 py-16 md:py-20 flex justify-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-2xl w-full text-center md:text-left"
        >
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[0.95] text-neutral-900 mb-6">
            NO PROMISE. <br />
            AN ID CARD.
          </h2>

          <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-2">
            What makes a choir exceptional cannot be achieved through planning.
            It requires a conductor with uncompromising standards, voices that
            strive for more than mediocrity, and decades of consistent work.
          </p>
          <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-8">
            Shaped by Jörg Straube since 1981, the North German Figural Choir
            has developed a unique musical language.
          </p>

          <a
            href="#"
            className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-neutral-900 border-b-2 border-neutral-900 pb-1 hover:text-[#b8860b] hover:border-[#b8860b] transition-colors"
          >
            Meet Jörg Straube
          </a>
        </motion.div>
      </div>

      {/* ===== DARK SECTION (centered) ===== */}
      <div className="w-full bg-[#2e2e2e] px-6 py-16 md:py-24 flex flex-col items-center">
        {/* Quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-2xl w-full text-center md:text-left mb-16 md:mb-20"
        >
          <p className="font-serif italic text-base md:text-xl text-neutral-200 leading-relaxed mb-4">
            `This wonder turns into breathlessness when Jörg Straube has his
            choir sing pianissimo. To reduce the volume to the utmost while
            retaining the full sound – that is truly great art.`
          </p>
          <p className="text-xs md:text-sm tracking-[0.15em] uppercase text-neutral-400">
            Göttingen Cultural Office
          </p>
        </motion.div>

        {/* YOUR VOTE — OUR CHOIR */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-2xl w-full text-center md:text-left"
        >
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            <span className="italic text-white">YOUR</span>{" "}
            <span className="text-[#c69a3e]">VOTE —</span>
            <br />
            <span className="italic text-white">OUR</span>{" "}
            <span className="text-[#c69a3e]">CHOIR.</span>
          </h2>

          <p className="text-xs md:text-sm tracking-[0.15em] uppercase text-neutral-300 mb-8">
            Sing along — <br />
            your first Thursday starts here.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border border-white text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Apply Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
