"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Extra transition-delay in ms, for staggering a list of siblings. */
  delay?: number;
};

// Slides an element up into place once it scrolls into view. Content stays
// visible throughout (no opacity animation) so the page never flashes empty
// on load. Skips the animation under prefers-reduced-motion, matching
// AnimatedStat's convention.
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.unobserve(el);
        setVisible(true);
      },
      { threshold: 0, rootMargin: "0px 0px 100px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`motion-reduce:transition-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "translate-y-0" : "translate-y-8"
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
