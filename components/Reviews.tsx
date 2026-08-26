import { MediaPlaceholder } from "./MediaPlaceholder";

export function Reviews() {
  return (
    <section
      id="reviews"
      data-screen-label="Testimonials"
      className="px-3.5 py-[clamp(20px,3vw,40px)]"
    >
      <div className="relative flex min-h-[88dvh] items-end overflow-hidden rounded-panel-lg">
        <MediaPlaceholder
          ratio="4 / 5"
          kind="image"
          alt="Стіна скриншотів відгуків клієнтів"
          src="/media/reviews.jpg"
          fill
        />
        <div className="scrim-reviews pointer-events-none absolute inset-0" />
        <div className="pointer-events-none relative z-[2] p-[clamp(22px,4vw,52px)]">
          <span className="text-[24px] text-bronze">✳</span>
          <h2 className="m-0 mt-3.5 text-[clamp(38px,9vw,108px)] leading-[0.94] font-normal tracking-[-0.04em] text-bg-base">
            відгуки
          </h2>
        </div>
      </div>
    </section>
  );
}
