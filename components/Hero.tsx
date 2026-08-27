"use client";

import { useState } from "react";
import { ArrowUpRightIcon, CloseIcon, MenuIcon } from "./icons";
import { MediaPlaceholder } from "./MediaPlaceholder";

const NAV_LINKS = [
  { href: "#about", label: "Про мене" },
  { href: "#services", label: "Послуги та прайс" },
  { href: "#reviews", label: "Відгуки" },
  { href: "#terms", label: "Умови співпраці" },
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      data-screen-label="Hero"
      className="relative flex min-h-[calc(92dvh+100px)] px-3.5 pt-3.5 pb-7"
    >
      <div className="relative flex flex-1 flex-col overflow-hidden rounded-panel-lg">
        <div className="absolute inset-0">
          <MediaPlaceholder
            ratio="4 / 5"
            kind="image"
            alt="Портрет Наталії Бондаренко, холодне сталеве освітлення"
            src="/media/hero.jpg"
            position="50% 36%"
            fill
          />
        </div>
        <div className="scrim-hero pointer-events-none absolute inset-0" />

        <nav
          className={`glass-nav pointer-events-auto relative z-[3] m-4 flex flex-col overflow-hidden transition-[border-radius] duration-200 md:rounded-pill ${
            menuOpen ? "rounded-[28px]" : "rounded-pill"
          }`}
        >
          <div className="flex items-center gap-2 py-2 pr-2.5 pl-5">
            <span className="text-[22px] font-medium uppercase text-white/92">NB</span>
            <span className="flex-1" />
            <div className="hidden items-center gap-x-[22px] md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[20px] tracking-[0.06em] text-white/82 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="whitespace-nowrap rounded-pill bg-bg-base px-5 py-[11px] text-[20px] tracking-[0.02em] text-ink transition-colors hover:bg-bronze-deep hover:text-bg-base"
              >
                Звʼязатись зі мною
              </a>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
              className="flex h-11 w-11 items-center justify-center rounded-pill text-white/92 md:hidden"
            >
              {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
          {menuOpen ? (
            <div className="flex flex-col gap-1 px-5 pt-1 pb-5 md:hidden">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 text-[22px] tracking-[0.06em] text-white/82 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-pill bg-bg-base px-5 py-3 text-center text-[20px] tracking-[0.02em] text-ink transition-colors hover:bg-bronze-deep hover:text-bg-base"
              >
                Звʼязатись зі мною
              </a>
            </div>
          ) : null}
        </nav>

        <div className="pointer-events-none relative z-[2] flex flex-1 flex-col justify-end px-[clamp(18px,4vw,46px)] pb-[clamp(24px,3vw,44px)]">
          <span className="mb-4.5 text-[26px] leading-none text-bronze">✳︎</span>

          <h1 className="m-0 text-[clamp(38px,9vw,108px)] leading-[0.9] font-medium tracking-[-0.035em] text-balance text-bg-base">
            Creative<span className="text-bronze">&nbsp;&amp;</span>
            <br />
            <span className="inline-block ml-[clamp(0px,6vw,90px)]">Motion</span>
            <br />
            Designer
          </h1>

          <div className="mt-[clamp(18px,3vw,32px)] flex flex-wrap items-center justify-between gap-5.5">
            <p className="m-0 text-[clamp(20px,2.2vw,24px)] font-light text-white/95">
              Nataliia Bondarenko
            </p>
            <a
              href="#services"
              className="group pointer-events-auto flex items-center gap-3.5 rounded-pill bg-bronze-deep py-2 pr-2 pl-6 text-[20px] text-bg-base transition-colors hover:bg-bg-base hover:text-ink"
            >
              Переглянути послуги
              <span className="flex h-10 w-10 items-center justify-center rounded-pill bg-bg-base text-bronze-deep transition-colors group-hover:bg-bronze group-hover:text-bg-base">
                <ArrowUpRightIcon size={20} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
