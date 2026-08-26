import { STATS } from "@/data/services";
import { AnimatedStat } from "./AnimatedStat";
import { SystemIcon } from "./icons";

export function About() {
  return (
    <section
      id="about"
      data-screen-label="About"
      className="px-[clamp(18px,5vw,80px)] py-[clamp(56px,9vw,130px)]"
    >
      <div className="flex flex-wrap items-baseline gap-4.5">
        <h2 className="m-0 text-[clamp(38px,9vw,108px)] leading-[0.92] font-normal tracking-[-0.04em] text-ink">
          коротко
          <br />
          <span className="ml-[clamp(0px,8vw,120px)] inline-block text-bronze-deep">
            про мене
          </span>
        </h2>
        <span className="text-[22px] text-bronze">✳︎</span>
      </div>

      <div className="mt-[clamp(34px,5vw,64px)] grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] items-start gap-[clamp(24px,3vw,54px)]">
        <p className="m-0 text-[20px] leading-[1.45] font-normal tracking-[-0.015em]">
          Допомагаю експертам та бізнесам вибудувати
          <span className="mx-2 inline-flex -translate-y-[5px] items-center justify-center align-middle">
            <SystemIcon size={26} />
          </span>
          цілісну візуальну систему: рекламні креативи, упаковка, презентації та{" "}
          <span className="text-bronze-deep">монтаж відео</span>.
        </p>
        <p className="m-0 max-w-[46ch] text-[20px] leading-[1.6] font-normal text-body-muted-2">
          <b>Закриваю весь спектр задач для соцмереж в єдиній естетиці</b> — вам
          більше не доведеться збирати команду з різних фрілансерів та
          контролювати розбіжності в стилі.
        </p>
      </div>

      <div className="mt-[clamp(38px,5vw,70px)] grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-3.5">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="stat-card-shadow rounded-card border border-white/90 bg-surface px-6 pt-6.5 pb-5.5"
          >
            <AnimatedStat value={stat.value} />
            <p className="m-0 mt-3 text-[18px] leading-[1.45] text-label">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
