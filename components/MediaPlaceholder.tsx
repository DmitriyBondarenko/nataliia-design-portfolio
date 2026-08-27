"use client";

import Image from "next/image";
import { useState } from "react";
import type { MediaKind, Ratio } from "@/data/services";
import { PlayIcon } from "./icons";

// Real media slot. Pass `src` (photos) or `poster` (video cover frame) once the
// file exists in /public — until then, or if it 404s, this falls back to a
// placeholder that keeps the design's exact aspect ratio so layout never shifts.
export function MediaPlaceholder({
  ratio,
  alt,
  kind = "image",
  src,
  poster,
  fit = "cover",
  /** CSS object-position for the crop, e.g. "75% 20%". Defaults to centered. */
  position,
  /** Fill the positioned parent instead of sizing by aspect-ratio — for full-bleed backgrounds. */
  fill = false,
  className = "",
  /** Art-directed crops swapped in by viewport width via a <picture> element. */
  responsiveSrc,
}: {
  ratio: Ratio;
  alt: string;
  kind?: MediaKind;
  src?: string;
  poster?: string;
  fit?: "cover" | "contain";
  position?: string;
  fill?: boolean;
  className?: string;
  responsiveSrc?: { mobile: string; tablet: string };
}) {
  const [failed, setFailed] = useState(false);
  const imageSrc = kind === "video" ? poster : src;
  const showImage = !!imageSrc && !failed;

  return (
    <div
      role={showImage ? undefined : "img"}
      aria-label={showImage ? undefined : alt}
      className={`flex items-center justify-center overflow-hidden ${
        fill ? "absolute inset-0 h-full w-full" : "relative h-full w-full"
      } ${className}`}
      style={fill ? undefined : { aspectRatio: ratio }}
    >
      {showImage ? (
        <>
          {responsiveSrc ? (
            <picture>
              <source media="(max-width: 767px)" srcSet={responsiveSrc.mobile} />
              <source media="(max-width: 1023px)" srcSet={responsiveSrc.tablet} />
              <Image
                src={imageSrc}
                alt={alt}
                fill
                sizes="100vw"
                className={fit === "contain" ? "object-contain" : "object-cover"}
                style={position ? { objectPosition: position } : undefined}
                onError={() => setFailed(true)}
              />
            </picture>
          ) : (
            <Image
              src={imageSrc}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={fit === "contain" ? "object-contain" : "object-cover"}
              style={position ? { objectPosition: position } : undefined}
              onError={() => setFailed(true)}
            />
          )}
          {kind === "video" ? (
            <span className="absolute flex h-9 w-9 items-center justify-center rounded-full bg-tally text-bg-base">
              <PlayIcon size={15} />
            </span>
          ) : null}
        </>
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center bg-[rgba(18,18,18,0.045)] bg-[repeating-linear-gradient(135deg,rgba(18,18,18,0.07)_0px,rgba(18,18,18,0.07)_1.5px,transparent_1.5px,transparent_13px)]`}
        >
          <div className="flex flex-col items-center gap-2 px-3 text-center">
            {kind === "video" ? (
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-tally text-bg-base">
                <PlayIcon size={15} />
              </span>
            ) : null}
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-label-light">
              {ratio.replace(/\s/g, "")} · {kind === "video" ? "відео" : "фото"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
