import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nataliia Bondarenko — Creative & Motion Designer",
  description:
    "Дизайн та монтаж відео для соцмереж: рекламні креативи, упаковка Instagram, презентації, Reels. Прайс і кейси кожної послуги.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className={`${interTight.variable} antialiased`}>
      <body className="bg-bg-base text-ink" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
