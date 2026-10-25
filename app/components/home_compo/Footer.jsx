"use client";

import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="w-full bg-black px-6 md:px-16 lg:px-24 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-6"
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-3">
          <p className="text-xs md:text-sm tracking-[0.15em] uppercase text-neutral-300">
            North German Figural Choir eV Hanover
          </p>
          <p className="text-xs md:text-sm tracking-[0.15em] uppercase text-neutral-300">
            contact@norddeutscher-figuralchor.de
          </p>
          <p className="text-xs md:text-sm tracking-[0.15em] uppercase text-neutral-500 mt-3">
            © 2026 North German Figural Choir.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-3 items-start md:items-end">
          <a
            href="#"
            className="text-xs md:text-sm tracking-[0.15em] uppercase text-neutral-300 hover:text-[#c69a3e] transition-colors"
          >
            Imprint
          </a>
          <a
            href="#"
            className="text-xs md:text-sm tracking-[0.15em] uppercase text-neutral-300 hover:text-[#c69a3e] transition-colors"
          >
            Data Protection
          </a>

          {/* Social Icons */}
          <div className="flex gap-3 mt-3">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, backgroundColor: "#c69a3e" }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <ImInstagram className="w-4 h-4 text-black" strokeWidth={1.5} />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.1, backgroundColor: "#c69a3e" }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF
                className="w-4 h-4 text-black fill-black"
                strokeWidth={0}
              />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
