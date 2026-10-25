"use client";

import Image from "next/image";
import Container from "../container/container";
import EchoKlassikSection from "../home_compo/EchoKlassikSection";
import MarqueeTicker from "../home_compo/MarqueeTicker";
import ChoirIdSection from "../home_compo/choirIdSection";
import CurtainMenu from "../home_compo/CurtainMenu";
import Footer from "../home_compo/Footer";
import { useAudio } from "../../context/AudioContext";
import { Play, Pause, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HomeHeader = () => {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <main className="w-full overflow-x-hidden">
      <div className="h-[35vh] sm:h-[45vh] md:h-[55vh] xl:h-[65vh] w-full bg-[#e6cac7] pt-8 relative">
        <Container className="flex flex-col justify-between h-full relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="flex items-center gap-3 group"
                aria-label="Play or pause audio"
              >
                <span className="w-8 h-8 rounded-full border border-black flex items-center justify-center overflow-hidden relative bg-white/40 backdrop-blur-sm">
                  <AnimatePresence mode="wait">
                    {isPlaying ? (
                      <motion.svg
                        key="pause"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                      >
                        <rect x="1" y="0" width="3" height="10" fill="black" />
                        <rect x="6" y="0" width="3" height="10" fill="black" />
                      </motion.svg>
                    ) : (
                      <motion.svg
                        key="play"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                      >
                        <polygon points="0,0 10,5 0,10" fill="black" />
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </span>
                <span className="text-xs md:text-sm tracking-wide uppercase text-neutral-900">
                  心に響くメロディー
                </span>
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right leading-none tracking-[0.4em] font-serif">
                <span className="block text-[11px] md:text-xs font-semibold text-neutral-700">
                  エムディー
                </span>
                <span className="block text-[11px] md:text-xs font-semibold text-neutral-700">
                  マヘディ
                </span>
                <span className="block text-sm md:text-base font-bold text-neutral-900">
                  ザマン
                </span>
                <span className="block text-sm md:text-base font-bold text-neutral-900">
                  アシフ
                </span>
              </div>
              <div className="sticky top-5 z-60">
                <CurtainMenu />
              </div>
            </div>
          </div>

          <motion.div className="mx-auto w-full pb-16 sm:pb-24 md:pb-32 lg:pb-40 xl:pb-48 2xl:pb-56 pt-10 md:pt-16">
            <h1 className="font-serif text-left sm:text-right leading-[0.95] text-3xl sm:text-4xl md:text-[3.2rem] lg:text-6xl xl:text-[4.5rem] tracking-tight text-neutral-900">
              <motion.span
                initial={{ opacity: 0, y: 40, scale: 0.1 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block"
              >
                SOME MUSIC
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 40, scale: 0.1 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="block"
              >
                YOU HEAR THAT SOME PEOPLE DO.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 40, scale: 0.1 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="block"
              >
                BECOMES PART OF ONE.
              </motion.span>
            </h1>
          </motion.div>
        </Container>
      </div>

      <div className="w-full relative">
        <Image
          src="/images/image9.jpeg"
          alt="Choir group walking"
          width={1920}
          height={1080}
          className="block h-[60vh] xl:h-screen w-full object-cover"
          priority
        />
      </div>
      <EchoKlassikSection />
      <MarqueeTicker />
      <ChoirIdSection />
      <Footer />
    </main>
  );
};

export default HomeHeader;
