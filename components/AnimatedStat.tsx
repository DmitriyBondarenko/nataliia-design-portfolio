"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1400;

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function formatThousands(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Counts up from 0 to the number in `value` (e.g. "2800+" -> 0..2800, "+" kept
// static) once the card scrolls into view. Skips the animation entirely under
// prefers-reduced-motion, per README § "Interactions & Behavior".
export function AnimatedStat({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(target === null ? value : "0");
  const ref = useRef<HTMLParagraphElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || animated.current) return;
        animated.current = true;
        observer.unobserve(el);

        const reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        if (reduceMotion) {
          setDisplay(formatThousands(target));
          return;
        }

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION_MS, 1);
          setDisplay(formatThousands(Math.round(target * easeOutExpo(progress))));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <p
      ref={ref}
      className="m-0 text-[clamp(32px,3.6vw,48px)] leading-none font-medium tracking-[-0.04em] text-ink tabular-nums"
    >
      {display}
      {suffix}
    </p>
  );
}
