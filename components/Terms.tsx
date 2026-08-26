"use client";

import { useState } from "react";

type TermRow = { lead: string; text: string };
type TermItem = { title: string; rows: TermRow[] };

const TERMS: TermItem[] = [
  {
    title: "Оплата та старт проєкту",
    rows: [
      {
        lead: "Предоплата: ",
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

function pad(i: number) {
  return String(i + 1).padStart(2, "0");
}

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
          <p className="m-0 mb-3.5 text-[18px] text-label-lightest">
            Формат роботи
          </p>
          <h2 className="m-0 text-[clamp(38px,9vw,108px)] leading-[0.96] font-normal tracking-[-0.04em] text-ink">
            умови
            <br />
            <span className="text-bronze-deep">співпраці</span>
          </h2>
          <span className="mt-5 block text-[17px] tracking-[0.1em] text-bronze">
            {"///"}
          </span>
        </div>

        <div className="flex flex-col gap-2.5">
          {TERMS.map((term, i) => {
            const open = openIndex === i;
            return (
              <div
                key={term.title}
                className={`overflow-hidden rounded-card-sm border border-white/90 transition-colors duration-200 ${
                  open ? "bg-white" : "bg-[#F7F6F5] hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-center gap-4 bg-transparent px-5.5 py-5.5 text-left font-inherit text-inherit"
                >
                  <span className="text-[18px] tracking-[0.12em] text-label-lightest">
                    {pad(i)}
                  </span>
                  <span className="flex-1 text-[clamp(22px,1.6vw,24px)] font-medium tracking-[-0.02em]">
                    {term.title}
                  </span>
                  <span className="text-[20px] text-bronze-deep">
                    {open ? "−" : "+"}
                  </span>
                </button>
                {open ? (
                  <div className="flex flex-col gap-3 px-5.5 pb-6">
                    {term.rows.map((row, j) => (
                      <div
                        key={j}
                        className="flex gap-3 text-[20px] leading-[1.5] text-body-muted"
                      >
                        <span className="text-bronze">✳</span>
                        <p className="m-0">
                          <span className="font-semibold text-ink">
                            {row.lead}
                          </span>
                          {row.text}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
