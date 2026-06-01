import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-bio-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-bio-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GCompass — Mini Site Comercial por R$197",
  description:
    "Reúna WhatsApp, Instagram, localização e todos os seus links em uma página profissional, rápida e personalizada com a sua marca. Pronta em até 3 dias.",
  openGraph: {
    title: "GCompass — Mini Site Comercial",
    description:
      "Sua empresa merece mais do que links soltos. Mini Site Comercial personalizado por R$197, entregue em até 3 dias.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export default function BioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${manrope.variable} ${instrumentSerif.variable}`}>
      {children}
    </div>
  );
}
