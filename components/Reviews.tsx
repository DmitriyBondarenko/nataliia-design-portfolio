import { MediaPlaceholder } from "./MediaPlaceholder";
import { Reveal } from "./Reveal";

export function Reviews() {
  return (
    <section
      id="reviews"
      data-screen-label="Testimonials"
      className="px-3.5 py-[clamp(20px,3vw,40px)]"
    >
      <Reveal className="relative flex aspect-[2/3] items-end overflow-hidden rounded-panel-lg md:aspect-[3/2] lg:aspect-[16/9]">
        <MediaPlaceholder
          ratio="4 / 5"
          kind="image"
          alt="Стіна скриншотів відгуків клієнтів"
          src="/media/reviews.webp"
          responsiveSrc={{
            mobile: "/media/reviews-mobile.webp",
            tablet: "/media/reviews-tablet.webp",
          }}
          fill
        />
        <div className="scrim-reviews pointer-events-none absolute inset-0" />
        <div className="pointer-events-none relative z-[2] p-[clamp(22px,4vw,52px)]">
          <span className="text-[24px] max-sm:text-[22px] text-bronze">✳︎</span>
          <h2 className="m-0 mt-3.5 text-[clamp(38px,9vw,108px)] leading-[0.94] font-normal tracking-[-0.04em] text-bg-base">
            відгуки
          </h2>
        </div>
      </Reveal>
    </section>
  );
}
