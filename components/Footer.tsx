import { ArrowUpRightIcon } from "./icons";

export function Footer() {
  return (
    <section id="contact" data-screen-label="Contact" className="px-3.5 pt-3.5 pb-[clamp(20px,3vw,34px)]">
      <div className="relative overflow-hidden rounded-panel-lg bg-ink-deep px-[clamp(22px,5vw,72px)] py-[clamp(36px,7vw,96px)]">
        <div className="footer-glow pointer-events-none absolute inset-0" />
        <div className="relative">
          <span className="text-[24px] text-bronze">✳</span>
          <h2 className="m-0 mt-4 text-[clamp(38px,9vw,108px)] leading-[0.95] font-normal tracking-[-0.04em] text-bg-base">
            Обговоримо
            <br />
            <span className="ml-[clamp(0px,5vw,70px)] inline-block">
              ваш проект?
            </span>
          </h2>
          <p className="m-0 mt-[clamp(20px,3vw,34px)] max-w-[68ch] text-[20px] leading-[1.55] text-bg-base/72">
            Напишіть мені в Telegram або Instagram — розберемо ваші задачі,
            підберемо оптимальний формат та розрахуємо точну вартість.
          </p>
          <div className="mt-[clamp(26px,4vw,44px)] flex flex-wrap gap-3">
            <a
              href="https://t.me/natalii_bnd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 rounded-pill bg-bg-base py-2 pr-2 pl-6.5 text-[22px] font-medium text-ink transition-colors hover:bg-bronze hover:text-bg-base"
            >
              Написати в Telegram
              <span className="flex h-10.5 w-10.5 items-center justify-center rounded-pill bg-ink/10">
                <ArrowUpRightIcon size={20} />
              </span>
            </a>
            <a
              href="https://www.instagram.com/nataliia_bnd?igsi=MWVpOGJwYjI1NWZkdQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 rounded-pill border border-bg-base/28 bg-bg-base/10 py-2 pr-2 pl-6.5 text-[22px] font-medium text-bg-base transition-colors hover:bg-bg-base/20"
            >
              Написати в Instagram
              <span className="flex h-10.5 w-10.5 items-center justify-center rounded-pill bg-bg-base/14">
                <ArrowUpRightIcon size={20} />
              </span>
            </a>
          </div>
          <div className="mt-[clamp(34px,5vw,64px)] flex flex-wrap justify-between gap-4 border-t border-bg-base/14 pt-5.5">
            <p className="m-0 text-[18px] text-bg-base/50">
              Nataliia Bondarenko — Creative &amp; Motion Designer
            </p>
            <p className="m-0 text-[18px] tracking-[0.1em] text-bg-base/50">
              {"/// 2026"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
