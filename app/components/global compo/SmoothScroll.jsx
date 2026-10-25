"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.03,
        wheelMultiplier: 0.4,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
