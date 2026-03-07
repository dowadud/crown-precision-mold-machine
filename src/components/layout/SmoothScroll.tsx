"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<unknown>(null);

  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;

    async function initLenis() {
      const Lenis = (await import("@studio-freight/lenis")).default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenisRef.current = lenis;

      function raf(time: number) {
        lenis!.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    initLenis();
    return () => {
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
