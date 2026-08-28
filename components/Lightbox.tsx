"use client";

import { useEffect, useRef, useState } from "react";
import type { MediaItem } from "@/data/services";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";
import { MediaPlaceholder } from "./MediaPlaceholder";

export function Lightbox({
  items,
  index,
  onNavigate,
  onClose,
}: {
  items: MediaItem[];
  index: number;
  onNavigate: (index: number) => void;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  // Tracks the id of a video that failed to load, so switching to a
  // different item doesn't need an effect to reset the failure state.
  const [failedId, setFailedId] = useState<string | null>(null);
  const item = items[index];
  const hasMultiple = items.length > 1;
  const showVideo = item.kind === "video" && !!item.src && failedId !== item.id;

  function goPrev() {
    onNavigate((index - 1 + items.length) % items.length);
  }
  function goNext() {
    onNavigate((index + 1) % items.length);
  }

  useEffect(() => {
    closeRef.current?.focus();
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (!hasMultiple) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose, index, hasMultiple]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex cursor-zoom-out items-center justify-center bg-[rgba(18,18,18,0.86)] p-5 backdrop-blur-[10px]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-[min(1200px,94vw)] overflow-hidden rounded-[20px]"
        style={{ aspectRatio: item.ratio }}
      >
        {showVideo ? (
          <video
            key={item.id}
            ref={(el) => {
              el?.play().catch(() => {});
            }}
            src={item.src}
            poster={item.poster}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="h-full w-full object-contain"
            onError={() => setFailedId(item.id)}
          />
        ) : (
          <MediaPlaceholder
            key={item.id}
            ratio={item.ratio}
            kind={item.kind}
            alt={item.alt}
            src={item.src}
            poster={item.poster}
            fit="contain"
            fill
          />
        )}
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Закрити"
          className="absolute top-3 right-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-pill bg-ink/70 text-[18px] max-sm:text-[15px] text-bg-base"
        >
          ✕
        </button>
        {hasMultiple ? (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Попередній приклад"
              className="absolute top-1/2 left-3 flex h-10.5 w-10.5 -translate-y-1/2 cursor-pointer items-center justify-center rounded-pill bg-ink/70 text-bg-base transition-colors hover:bg-ink"
            >
              <ArrowLeftIcon size={20} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Наступний приклад"
              className="absolute top-1/2 right-3 flex h-10.5 w-10.5 -translate-y-1/2 cursor-pointer items-center justify-center rounded-pill bg-ink/70 text-bg-base transition-colors hover:bg-ink"
            >
              <ArrowRightIcon size={20} />
            </button>
            <p className="absolute bottom-3 left-1/2 m-0 -translate-x-1/2 rounded-pill bg-ink/70 px-3.5 py-1.5 text-[15px] tracking-[0.06em] text-bg-base">
              {index + 1} / {items.length}
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}
