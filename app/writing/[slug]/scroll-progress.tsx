"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const article = document.querySelector<HTMLElement>("[data-article]");
    if (!article) return;

    let rafId: number | null = null;

    const update = () => {
      const rect = article.getBoundingClientRect();
      const scrollY = window.scrollY;
      const start = scrollY + rect.top;
      const max = article.offsetHeight - window.innerHeight;
      if (max <= 0) {
        setProgress(1);
        return;
      }
      const value = (scrollY - start) / max;
      setProgress(Math.min(1, Math.max(0, value)));
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 h-[2px] w-full bg-transparent">
      <div
        className="h-full origin-left bg-neutral-900/40 transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
