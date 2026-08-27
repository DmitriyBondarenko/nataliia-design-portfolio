"use client";

import { useEffect, useRef, useState } from "react";
import type { MediaItem } from "@/data/services";
import { MediaPlaceholder } from "./MediaPlaceholder";

export function Lightbox({
  item,
  onClose,
}: {
  item: MediaItem;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const showVideo = item.kind === "video" && !!item.src && !videoFailed;

  useEffect(() => {
    closeRef.current?.focus();
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

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
            src={item.src}
            poster={item.poster}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-contain"
            onError={() => setVideoFailed(true)}
          />
        ) : (
          <MediaPlaceholder
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
          className="absolute top-3 right-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-pill bg-ink/70 text-lg text-bg-base"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
