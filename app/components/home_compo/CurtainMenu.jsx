"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

const COLORS = {
  mist: "#DDE3E8",
  plum: "#3A0F34",
  gold: "#EAAA00",
};

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Concerts", href: "/concerts" },
  { label: "About Us", href: "/about" },
  { label: "The Choir", href: "/choir" },
  { label: "Jörg Straube", href: "/joerg-straube" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { label: "Github", href: "https://www.github.com/mahedizaman" },
  { label: "Linkedn", href: "https://www.linkedin.com/in/md-mahedi-zaman/" },
  { label: "Instagram", href: "https://www.instagram.com/ki_dekho_chicks/" },
];

const CURTAIN_PANELS = [COLORS.gold, COLORS.mist, COLORS.plum];

const EASE_CURTAIN = [0.76, 0, 0.24, 1];
const EASE_REVEAL = [0.22, 1, 0.36, 1];

export default function CurtainMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const [isOpen, setIsOpen] = useState(false);
  const [curtain, setCurtain] = useState(null);
  const [hovered, setHovered] = useState(null);

  const timers = useRef([]);
  const isBusy = useRef(false);
  const closeBtnRef = useRef(null);

  const cover = reduceMotion ? 0.01 : 1.15;
  const stagger = reduceMotion ? 0 : 0.25;
  const hold = reduceMotion ? 0 : 500;
  const lastIndex = CURTAIN_PANELS.length - 1;
  const sweepMs = (cover + stagger * lastIndex) * 1000;
  const coverMs = sweepMs + hold;

  const runCurtain = useCallback(
    (direction, label, onCovered) => {
      if (isBusy.current) return;
      isBusy.current = true;
      setCurtain({ direction, label });

      const t1 = setTimeout(onCovered, coverMs);
      const t2 = setTimeout(() => setCurtain(null), coverMs + 150);
      const t3 = setTimeout(
        () => {
          isBusy.current = false;
        },
        coverMs + 150 + sweepMs,
      );

      timers.current.push(t1, t2, t3);
    },
    [coverMs, sweepMs],
  );

  const openMenu = useCallback(() => {
    runCurtain("open", "Md. Mahedi Zaman", () => setIsOpen(true));
  }, [runCurtain]);

  const closeMenu = useCallback(
    (item) => {
      runCurtain("close", item?.label ?? "", () => {
        setIsOpen(false);
        setHovered(null);
        if (item?.href) router.push(item.href);
      });
    },
    [runCurtain, router],
  );

  useEffect(() => {
    const list = timers.current;
    return () => list.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") closeMenu(null);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeMenu]);

  return (
    <>
      {}
      <button
        type="button"
        onClick={openMenu}
        aria-label="Open menu"
        aria-expanded={isOpen}
        className="group relative bottom-6 right-3 border-2 border-white/35 p-3 h-14 w-14 rounded-4xl"
      >
        <span className="flex flex-col items-end gap-1.5">
          <span className="block h-[2px] w-7 bg-current transition-all duration-300 " />
          <span className="block h-[2px] w-7 bg-current transition-all duration-300 " />

          <span className="block h-[2px] w-7 bg-current transition-all duration-300 " />
        </span>
      </button>

      {}
      <AnimatePresence>
        {curtain && (
          <div
            key="curtain"
            className="fixed inset-0 z-[1000] overflow-hidden"
            aria-hidden="true"
          >
            {CURTAIN_PANELS.map((color, i) => {
              const isOpening = curtain.direction === "open";
              const isTop = i === lastIndex;

              return (
                <motion.div
                  key={color}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ backgroundColor: color, zIndex: i + 1 }}
                  initial={{ x: isOpening ? "-100%" : "100%" }}
                  animate={{
                    x: "0%",
                    transition: {
                      duration: cover,
                      delay: i * stagger,
                      ease: EASE_CURTAIN,
                    },
                  }}
                  exit={{
                    x: isOpening ? "100%" : "-100%",
                    transition: {
                      duration: cover,
                      delay: (lastIndex - i) * stagger,
                      ease: EASE_CURTAIN,
                    },
                  }}
                >
                  {}
                  {isTop && curtain.label && (
                    <motion.span
                      className="font-serif italic"
                      style={{
                        color: COLORS.gold,
                        fontSize: "clamp(2rem, 7vw, 4.5rem)",
                      }}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: sweepMs / 1000 - 0.25,
                          duration: 0.45,
                          ease: EASE_REVEAL,
                        },
                      }}
                      exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    >
                      {curtain.label}
                    </motion.span>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          className="fixed inset-0 z-[900] flex flex-col overflow-y-auto md:flex-row"
          style={{
            background: `radial-gradient(circle at 12% 105%, ${COLORS.gold}2E, transparent 48%), ${COLORS.plum}`,
          }}
        >
          {}
          <button
            ref={closeBtnRef}
            type="button"
            onClick={() => closeMenu(null)}
            aria-label="Close menu"
            className="group absolute top-5 right-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#DDE3E8]/30 text-[#DDE3E8] transition-colors duration-300 hover:border-[#EAAA00] hover:bg-[#EAAA00] hover:text-[#3A0F34] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAAA00] md:right-[calc(34%+1.25rem)]"
          >
            <X
              className="h-6 w-6 transition-transform duration-500 group-hover:rotate-90"
              strokeWidth={1.5}
            />
          </button>

          {}
          <nav
            className="flex flex-1 flex-col justify-center px-8 py-24 md:px-20"
            aria-label="Main"
          >
            <ul className="flex flex-col gap-1 md:gap-2">
              {MENU_ITEMS.map((item, i) => {
                const isHovered = hovered === item.label;
                const isDimmed = hovered !== null && !isHovered;
                const isCurrent = pathname === item.href;

                return (
                  <li key={item.label} className="overflow-hidden py-1">
                    <motion.div
                      initial={{ y: "115%" }}
                      animate={{ y: 0 }}
                      transition={{
                        delay: 0.3 + i * 0.07,
                        duration: 0.8,
                        ease: EASE_REVEAL,
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => closeMenu(item)}
                        onMouseEnter={() => setHovered(item.label)}
                        onMouseLeave={() => setHovered(null)}
                        onFocus={() => setHovered(item.label)}
                        onBlur={() => setHovered(null)}
                        className={`relative inline-flex items-center gap-4 pb-1 text-left font-serif leading-[1.1] transition-all duration-500 focus-visible:outline-none ${
                          isHovered ? "italic" : ""
                        }`}
                        style={{
                          fontSize: "clamp(2rem, 6vw, 3.75rem)",
                          color: isHovered ? COLORS.gold : COLORS.mist,
                          opacity: isDimmed ? 0.35 : 1,
                          transform: isHovered ? "translateX(14px)" : "none",
                        }}
                      >
                        {item.label}

                        {}
                        {isCurrent && (
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ background: COLORS.gold }}
                            aria-label="Current page"
                          />
                        )}

                        {}
                        <span
                          className="absolute bottom-0 left-0 h-px w-full origin-left transition-transform duration-500"
                          style={{
                            background: COLORS.gold,
                            transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                          }}
                        />
                      </button>
                    </motion.div>
                  </li>
                );
              })}
            </ul>
          </nav>

          {}
          <motion.aside
            className="hidden w-[34%] shrink-0 flex-col justify-between p-14 md:flex"
            style={{ background: COLORS.mist, color: COLORS.plum }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: EASE_REVEAL }}
          >
            <span
              className="block h-1 w-14"
              style={{ background: COLORS.gold }}
            />

            <div className="flex flex-col gap-10">
              <div>
                <p className="text-sm opacity-60">Get in touch</p>
                <a
                  href="mailto:hello@example.com"
                  className="mt-2 inline-block font-serif max-w-full break-all text-2xl underline decoration-transparent underline-offset-4 transition-colors hover:decoration-[#EAAA00] focus-visible:decoration-[#EAAA00] focus-visible:outline-none overflow-hidden"
                >
                  info.zaman.profile@gmail.com
                </a>
              </div>

              <ul className="flex flex-col gap-3">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-sm font-medium focus-visible:outline-none"
                    >
                      <span
                        className="h-px w-6 transition-all duration-300 group-hover:w-12 group-focus-visible:w-12"
                        style={{ background: COLORS.gold }}
                      />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      )}
    </>
  );
}
