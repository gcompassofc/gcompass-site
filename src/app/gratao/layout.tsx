import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./gratao.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Virada 40+ | Planejamento Financeiro com Luís Gratão",
  description:
    "Pare de empurrar a vida financeira com a barriga. O lugar certo para quem tem 40+ e quer garantir um futuro seguro para a família.",
  robots: { index: true, follow: true },
};

export default function GrataoLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${inter.variable} gratao`}>{children}</div>;
}
