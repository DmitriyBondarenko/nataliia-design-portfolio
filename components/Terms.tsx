"use client";

import { useState } from "react";
import { PlusIcon } from "./icons";
import { Reveal } from "./Reveal";

type TermRow = { lead: string; text: string };
type TermItem = { title: string; rows: TermRow[] };

const TERMS: TermItem[] = [
  {
    title: "Оплата та старт проєкту",
    rows: [
      {
        lead: "Передплата: ",
        text: "Робота починається після внесення 50% передплати та надання повного ТЗ із матеріалами. Друга частина оплачується після фінального затвердження проєкту (до відправки вихідних файлів у високій якості).",
      },
      {
        lead: "Пакети послуг: ",
        text: "Оплачуються на 100% перед стартом. Термін дії пакету — 1 календарний місяць. Якщо матеріали від замовника не надані впродовж цього терміну, кошти не повертаються.",
      },
      {
        lead: "",
        text: "Внесення передплати є єдиним гарантом фіксації місця у робочому графіку. Усні домовленості без передплати не є бронюванням дати.",
      },
      {
        lead: "",
        text: "Працюю офіційно (ФОП 3 група). Оплата на розрахунковий рахунок IBAN.",
      },
    ],
  },
  {
    title: "Терміни виконання",
    rows: [
      {
        lead: "Стандартні терміни: ",
        text: "1–3 робочих дні з моменту отримання матеріалів. Якщо ТЗ або матеріали надіслані після 12:00, відлік терміну починається з наступного робочого дня.",
      },
      {
        lead: "Термінові замовлення: ",
        text: "Виконання протягом 24 годин або робота у вихідні дні (сб–нд) розраховується за тарифом ×2 від вартості.",
      },
    ],
  },
  {
    title: "Правки та ТЗ",
    rows: [
      {
        lead: "Безкоштовні правки: ",
        text: "Включено до 2-х кіл правок у межах початкового ТЗ. Кожне наступне коло правок — 50-200 грн (залежить від обʼєму).",
      },
      {
        lead: "Формат ТЗ та правок: ",
        text: "Приймаються виключно в текстовому форматі (списком або файлом) з чіткими таймкодами для відео та коментарями для дизайну.",
      },
    ],
  },
  {
    title: "Збереження матеріалів та авторські права",
    rows: [
      {
        lead: "Зберігання вихідників: ",
        text: "Готовий проєкт зберігається протягом 30 календарних днів після здачі. У цей період можна внести фінальні корективи.",
      },
      {
        lead: "Портфоліо: ",
        text: "Залишаю за собою право публікувати виконані роботи у власному портфоліо та соцмережах. (Якщо ваш проєкт під NDA — це обговорюється до початку роботи).",
      },
    ],
  },
];

export function Terms() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="terms"
      data-screen-label="Terms"
      className="px-[clamp(18px,5vw,80px)] py-[clamp(56px,8vw,120px)]"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[clamp(28px,4vw,60px)]">
        <div>
          <p className="m-0 mb-3.5 text-[18px] max-sm:text-[15px] text-label-lightest">
            Формат роботи
          </p>
          <h2 className="m-0 text-[clamp(38px,9vw,108px)] leading-[0.96] font-normal tracking-[-0.04em] text-ink">
            умови
            <br />
            <span className="text-bronze-deep">співпраці</span>
          </h2>
          <span className="mt-5 block text-[17px] max-sm:text-[15px] tracking-[0.1em] text-bronze">
            {"///"}
          </span>
        </div>

        <div className="flex flex-col border-t border-ink/10">
          {TERMS.map((term, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={term.title} delay={i * 70} className="border-b border-ink/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-center gap-4 bg-transparent py-5.5 text-left font-inherit text-inherit transition-colors hover:text-bronze-deep"
                >
                  <span className="flex-1 text-[clamp(22px,1.6vw,24px)] max-sm:text-[20px] font-medium tracking-[-0.02em]">
                    {term.title}
                  </span>
                  <span
                    className={`flex h-6 w-6 flex-none items-center justify-center text-label-lightest transition-transform duration-200 ${
                      open ? "rotate-45 text-bronze-deep" : ""
                    }`}
                  >
                    <PlusIcon size={16} />
                  </span>
                </button>
                {open ? (
                  <div className="pb-6">
                    <div className="flex flex-col gap-3 border-l-2 border-bronze/25 pl-4">
                      {term.rows.map((row, j) => (
                        <p
                          key={j}
                          className="m-0 text-[20px] max-sm:text-[18px] leading-[1.5] text-body-muted"
                        >
                          <span className="font-semibold text-ink">
                            {row.lead}
                          </span>
                          {row.text}
                        </p>
                      ))}
                    </div>
                  </div>
                ) : null}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
