"use client";

import { useState, type KeyboardEvent, type ReactNode, type TouchEvent } from "react";
import {
  SERVICE_TABS,
  mediaForService,
  perPageFor,
  type MediaItem,
  type Ratio,
  type ServiceTabId,
} from "@/data/services";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon, CursorIcon, PlayIcon } from "./icons";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { Lightbox } from "./Lightbox";

function pad(i: number) {
  return String(i + 1).padStart(2, "0");
}

const TAB_META: Record<ServiceTabId, { label: string; icon: ReactNode }> = {
  design: { label: "Дизайн", icon: <CursorIcon size={17} /> },
  video: { label: "Монтаж відео", icon: <PlayIcon size={16} /> },
};

export function Services() {
  const [tabId, setTabId] = useState<ServiceTabId>("design");
  const [svcIndex, setSvcIndex] = useState(0);
  const [format, setFormat] = useState<Ratio>("9 / 16");
  const [page, setPage] = useState(0);
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const tab = SERVICE_TABS.find((t) => t.id === tabId)!;
  const service = tab.services[svcIndex];
  const isDesign = service.key === "design";

  const media = mediaForService(service, format);
  const ratio = media[0]?.ratio ?? "9 / 16";
  const perPage = perPageFor(ratio);
  const pages = Math.max(1, Math.ceil(media.length / perPage));
  const currentPage = Math.min(page, pages - 1);
  const pageItems = media.slice(
    currentPage * perPage,
    currentPage * perPage + perPage
  );
  const stretchPanel = !(isDesign && format === "9 / 16");

  function selectTab(id: ServiceTabId) {
    setTabId(id);
    setSvcIndex(0);
    setPage(0);
  }
  function selectService(i: number) {
    setSvcIndex(i);
    setPage(0);
  }
  function selectFormat(f: Ratio) {
    setFormat(f);
    setPage(0);
  }
  function prevPage() {
    setPage((p) => (Math.min(p, pages - 1) - 1 + pages) % pages);
  }
  function nextPage() {
    setPage((p) => (Math.min(p, pages - 1) + 1) % pages);
  }

  function onTouchStart(e: TouchEvent) {
    setTouchStartX(e.touches[0].clientX);
  }
  function onTouchEnd(e: TouchEvent) {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) nextPage();
      else prevPage();
    }
    setTouchStartX(null);
  }
  function onGalleryKeyDown(e: KeyboardEvent) {
    if (pages <= 1) return;
    if (e.key === "ArrowLeft") prevPage();
    if (e.key === "ArrowRight") nextPage();
  }

  return (
    <section
      id="services"
      data-screen-label="Services"
      className="px-[clamp(14px,4vw,60px)] py-[clamp(48px,7vw,110px)]"
    >
      <div className="rounded-panel-services border border-white/90 bg-[linear-gradient(180deg,#ECE9E6_0%,#F4F3EF_60%)] p-[clamp(24px,4vw,56px)]">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <h2 className="m-0 text-[80px] leading-[0.95] font-normal tracking-[-0.04em]">
            послуги
            <br />
            <span className="text-[80px] text-bronze-deep">та прайс</span>
          </h2>
          <p className="m-0 text-[18px] text-label-light">Оберіть напрям</p>
        </div>

        <div className="mt-[clamp(24px,3vw,40px)] flex flex-wrap gap-2.5">
          {SERVICE_TABS.map((t) => {
            const active = t.id === tabId;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => selectTab(t.id)}
                className={`flex flex-[1_1_200px] items-center gap-3.5 rounded-card-sm border px-5.5 py-4.5 text-left text-[clamp(22px,1.6vw,24px)] font-medium tracking-[-0.01em] transition-all duration-200 ${
                  active
                    ? "border-ink bg-ink text-bg-base"
                    : "border-ink/12 bg-white/60 text-ink"
                }`}
              >
                <span className="inline-flex text-[19px] opacity-90">
                  {TAB_META[t.id].icon}
                </span>
                {TAB_META[t.id].label}
              </button>
            );
          })}
        </div>

        <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-stretch gap-4">
          <div className="flex flex-col gap-2.5">
            {tab.services.map((sv, i) => {
              const open = i === svcIndex;
              return (
                <div
                  key={sv.key}
                  className={`overflow-hidden rounded-card border transition-colors duration-200 ${
                    open
                      ? "border-bronze/50 bg-white/92"
                      : "border-ink/8 bg-white/45"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => selectService(i)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-4 bg-transparent px-5 py-5 text-left text-inherit"
                  >
                    <span className="text-[18px] tracking-[0.12em] text-label-lightest">
                      {pad(i)}
                    </span>
                    <span className="flex-1 text-[clamp(22px,1.7vw,24px)] font-medium tracking-[-0.02em]">
                      {sv.title}
                    </span>
                    <span
                      className={`flex h-8.5 w-8.5 flex-none items-center justify-center rounded-pill border border-ink/18 ${
                        open ? "bg-ink text-bg-base" : "bg-transparent text-ink"
                      }`}
                    >
                      <ArrowUpRightIcon size={17} />
                    </span>
                  </button>
                  {open ? (
                    <div className="px-5 pb-6">
                      <p className="m-0 mb-2.5 text-[18px] text-label-lightest">
                        Що входить
                      </p>
                      {sv.includes.map((inc) => (
                        <div
                          key={inc}
                          className="flex gap-2.5 py-1.5 text-[18px] leading-[1.45] text-body-muted"
                        >
                          <span className="text-bronze">✓</span>
                          {inc}
                        </div>
                      ))}

                      <p className="m-0 mt-5.5 mb-2.5 text-[18px] text-label-lightest">
                        Вартість
                      </p>
                      {sv.prices.map((p) => (
                        <div
                          key={p.label}
                          className="flex items-baseline gap-2.5 border-b border-ink/7 py-1.5"
                        >
                          <span className="text-[20px] text-body-muted">
                            {p.label}
                          </span>
                          <span className="h-px flex-1" />
                          <span className="text-[20px] font-semibold tracking-[-0.01em] whitespace-nowrap">
                            {p.value}
                          </span>
                        </div>
                      ))}

                      {sv.packages ? (
                        <div className="mt-4.5 rounded-plate border border-ink/6 bg-bg-raised p-4.5">
                          <p className="m-0 mb-2.5 text-[20px] font-semibold tracking-[-0.01em]">
                            {sv.packagesTitle}
                          </p>
                          {sv.packages.map((pk) => (
                            <div
                              key={pk.label}
                              className="flex items-baseline gap-2.5 py-1.5"
                            >
                              <span className="text-[20px] text-body-muted">
                                {pk.label}
                              </span>
                              <span className="flex-1 border-b border-dotted border-ink/20" />
                              <span className="text-[20px] font-semibold">
                                {pk.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {sv.note ? (
                        <p className="m-0 mt-3.5 text-[18px] leading-[1.5] text-label-light">
                          {sv.note}
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div
            className={`glass-showcase relative flex flex-col rounded-panel-showcase p-[clamp(16px,2vw,24px)] ${
              stretchPanel ? "self-stretch" : "self-start"
            }`}
          >
            <div className="mb-4 flex items-center justify-between gap-3.5">
              <p className="m-0 text-[18px] text-label">Приклад</p>
              <div className="flex items-center gap-2.5">
                {isDesign ? (
                  <div className="flex gap-1 rounded-pill border border-white/90 bg-white/50 p-1">
                    {(["9 / 16", "4 / 5"] as Ratio[]).map((f) => {
                      const active = format === f;
                      return (
                        <button
                          key={f}
                          type="button"
                          onClick={() => selectFormat(f)}
                          className={`rounded-pill px-3.5 py-1.5 text-[18px] transition-all duration-200 ${
                            active ? "bg-ink text-bg-base" : "bg-transparent text-label"
                          }`}
                        >
                          {f === "4 / 5" ? "4:5" : "9:16"}
                        </button>
                      );
                    })}
                  </div>
                ) : null}
                <p className="m-0 text-[18px] text-label">{service.title}</p>
              </div>
            </div>

            <div
              tabIndex={pages > 1 ? 0 : -1}
              onKeyDown={onGalleryKeyDown}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              className="relative overflow-hidden rounded-frame bg-ink/6 outline-none"
            >
              <div
                className="flex items-stretch transition-transform duration-[480ms] ease-[cubic-bezier(0.65,0.05,0.36,1)]"
                style={{
                  flexWrap: perPage === 4 ? "wrap" : "nowrap",
                  gap: perPage === 1 ? "0px" : "12px",
                }}
              >
                {pageItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setLightboxItem(item)}
                    className="relative min-w-0 flex-none cursor-zoom-in"
                    style={{
                      width: perPage === 1 ? "100%" : "calc(50% - 6px)",
                      aspectRatio: item.ratio,
                    }}
                  >
                    <MediaPlaceholder
                      ratio={item.ratio}
                      kind={item.kind}
                      alt={item.alt}
                      src={item.src}
                      poster={item.poster}
                      fill
                    />
                  </div>
                ))}
              </div>
            </div>

            {pages > 1 ? (
              <div className="mt-3.5 flex items-center justify-between gap-3.5">
                <p className="m-0 text-[18px] tracking-[0.08em] text-label">
                  {currentPage + 1} / {pages}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prevPage}
                    aria-label="Попередній приклад"
                    className="flex h-10.5 w-10.5 items-center justify-center rounded-pill border border-ink/16 bg-white/70 text-ink transition-colors hover:bg-ink hover:text-bg-base"
                  >
                    <ArrowLeftIcon size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={nextPage}
                    aria-label="Наступний приклад"
                    className="flex h-10.5 w-10.5 items-center justify-center rounded-pill border border-ink/16 bg-white/70 text-ink transition-colors hover:bg-ink hover:text-bg-base"
                  >
                    <ArrowRightIcon size={20} />
                  </button>
                </div>
              </div>
            ) : null}
            <div className="min-h-0 flex-1" />
          </div>
        </div>
      </div>

      {lightboxItem ? (
        <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      ) : null}
    </section>
  );
}
