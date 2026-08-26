// Services, prices and case content for "Послуги та прайс".
// Copy is verbatim from design_handoff_reels_landing/README.md § 3 "Content (verbatim from the brief)".
// Media has no real assets yet — every item renders through <MediaPlaceholder> until
// real files/URLs land (see README § "Assets & Media").

export type Ratio = "9 / 16" | "4 / 5" | "16 / 10";

export type MediaKind = "image" | "video";

export type PriceRow = {
  label: string;
  value: string;
};

export type MediaItem = {
  id: string;
  kind: MediaKind;
  ratio: Ratio;
  alt: string;
  src?: string;
  poster?: string;
};

export type ServiceItem = {
  key: string;
  title: string;
  includes: string[];
  prices: PriceRow[];
  packagesTitle?: string;
  packages?: PriceRow[];
  note?: string;
  /** Case media for this service, used unless `mediaByFormat` is set. */
  media: MediaItem[];
  /** Дизайн only: 9:16 and 4:5 case sets never mix, keyed by the active format. */
  mediaByFormat?: Partial<Record<Ratio, MediaItem[]>>;
};

export type ServiceTabId = "design" | "video";

export type ServiceTab = {
  id: ServiceTabId;
  label: string;
  services: ServiceItem[];
};

function buildCases(
  idPrefix: string,
  count: number,
  kind: MediaKind,
  ratio: Ratio,
  altPrefix: string
): MediaItem[] {
  return Array.from({ length: count }, (_, i) => {
    const id = `${idPrefix}-${i}`;
    // Convention: drop a file at public/media/<id>.jpg (photo, or video poster
    // frame) and it's picked up automatically — no code change needed. Until
    // the file exists, <MediaPlaceholder> falls back to the placeholder UI.
    return {
      id,
      kind,
      ratio,
      alt: `${altPrefix} ${i + 1}`,
      ...(kind === "video"
        ? { poster: `/media/${id}.jpg`, src: `/media/${id}.mp4` }
        : { src: `/media/${id}.jpg` }),
    };
  });
}

export const SERVICE_TABS: ServiceTab[] = [
  {
    id: "design",
    label: "Дизайн",
    services: [
      {
        key: "design",
        title: "Дизайн",
        includes: [
          "Аналіз ніші",
          "Розробка графічної концепції",
          "Підбір зображень / генерація елементів",
          "Для креативів один ресайз 4:5 або 1:1 на вибір (або інші)",
        ],
        prices: [
          { label: "1 креатив", value: "450 грн" },
          { label: "Пост", value: "400 грн" },
          { label: "Карусель", value: "200 грн / слайд" },
          { label: "Історія", value: "200 грн" },
          { label: "Highlights (обкладинка)", value: "100 грн" },
          { label: "Додатковий ресайз", value: "50 грн" },
        ],
        packagesTitle: "Пакети статичних креативів",
        packages: [
          { label: "5 шт", value: "2 000 грн" },
          { label: "10 шт", value: "3 900 грн" },
          { label: "20 шт", value: "7 600 грн" },
        ],
        note: "Термін виконання: 1–2 дні (залежить від обʼєму).",
        media: [],
        mediaByFormat: {
          "9 / 16": buildCases(
            "ex-design-916",
            10,
            "image",
            "9 / 16",
            "Приклад дизайн-кейсу, формат 9:16, №"
          ),
          "4 / 5": buildCases(
            "ex-design-45",
            10,
            "image",
            "4 / 5",
            "Приклад дизайн-кейсу, формат 4:5, №"
          ),
        },
      },
      {
        key: "insta",
        title: "Упаковка Instagram",
        includes: [
          "Аналіз конкурентів для створення унікального візуалу",
          "Підбір фірмових шрифтів та палітри кольорів",
          "Розробка єдиної візуальної концепції стрічки",
          "Обкладинки Highlights (до 5 шт)",
        ],
        prices: [
          { label: "6 постів", value: "2 900 грн" },
          { label: "9 постів", value: "4 100 грн" },
        ],
        note: "Примітка: наступні слайди каруселі — 200 грн / слайд.",
        media: buildCases(
          "ex-insta",
          10,
          "image",
          "16 / 10",
          "Приклад упаковки Instagram, №"
        ),
      },
      {
        key: "decks",
        title: "Презентації",
        includes: [
          "Аналіз ніші",
          "Розробка графічної концепції",
          "Підбір зображень / генерація елементів",
        ],
        prices: [
          { label: "1–19 сторінок", value: "250 грн / слайд" },
          { label: "20–40 сторінок", value: "200 грн / слайд" },
          { label: "41+ сторінок", value: "150 грн / слайд" },
        ],
        note: "Примітка: для великих інфопродуктів вартість обговорюється індивідуально.",
        media: buildCases(
          "ex-decks",
          10,
          "image",
          "16 / 10",
          "Приклад презентації, №"
        ),
      },
    ],
  },
  {
    id: "video",
    label: "Монтаж відео",
    services: [
      {
        key: "basic",
        title: "Базовий монтаж",
        includes: [
          "Нарізка та склейка вихідних матеріалів",
          "Видалення пауз, базова кольорокорекція",
          "Підбір фонової музики",
        ],
        prices: [{ label: "до 1 хв", value: "від 11$" }],
        media: buildCases(
          "ex-basic",
          10,
          "video",
          "9 / 16",
          "Відео-кейс базового монтажу, №"
        ),
      },
      {
        key: "dynamic",
        title: "Динамічний монтаж / Відеокреатив",
        includes: [
          "Нарізка та склейка вихідних матеріалів",
          "Видалення пауз, базова кольорокорекція",
          "Додавання субтитрів та стилізація (вручну)",
          "Додавання анімації, вставок та плашок",
          "Підбір та генерація контенту (за потреби)",
          "Переходи",
          "Покращення звуку (або генерація озвучки) та підбір фонової музики",
          "Саунд-дизайн",
        ],
        prices: [
          { label: "до 30 секунд", value: "25$" },
          { label: "до 1 хв", value: "35$" },
        ],
        media: buildCases(
          "ex-dynamic",
          10,
          "video",
          "9 / 16",
          "Відео-кейс динамічного монтажу, №"
        ),
      },
      {
        key: "motion",
        title: "Motion",
        includes: [
          "Складний монтаж в After Effects",
          "Підбір та генерація контенту (за потреби)",
          "Анімована інфографіка",
          "Переходи",
          "Покращення звуку (або генерація озвучки) та підбір фонової музики",
          "Саунд-дизайн",
        ],
        prices: [
          { label: "до 30 секунд", value: "50$" },
          { label: "до 1 хв", value: "70$" },
        ],
        media: buildCases("ex-motion", 10, "video", "9 / 16", "Моушн-кейс, №"),
      },
    ],
  },
];

export const STATS: PriceRow[] = [
  { label: "готових проєктів", value: "2800+" },
  { label: "роки роботи на фрілансі та в агенції", value: "4+" },
  { label: "пройдених програм підвищення кваліфікації", value: "8+" },
  { label: "місяців наставництва та менторства", value: "9+" },
];

export function perPageFor(ratio: Ratio): number {
  if (ratio === "16 / 10") return 1;
  if (ratio === "4 / 5") return 4;
  return 2;
}

export function mediaForService(service: ServiceItem, format: Ratio): MediaItem[] {
  if (service.mediaByFormat) {
    return service.mediaByFormat[format] ?? [];
  }
  return service.media;
}
