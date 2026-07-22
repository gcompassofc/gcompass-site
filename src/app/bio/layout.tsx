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
  metadataBase: new URL("https://gcompass.com.br"),
  title: "GCompass — Mini Site Comercial por R$197",
  description:
    "Reúna WhatsApp, Instagram, localização e todos os seus links em uma página profissional, rápida e personalizada com a sua marca. Pronta em até 3 dias.",
  alternates: { canonical: "/bio" },
  openGraph: {
    title: "GCompass — Mini Site Comercial",
    description:
      "Sua empresa merece mais do que links soltos. Mini Site Comercial personalizado por R$197, entregue em até 3 dias.",
    type: "website",
    locale: "pt_BR",
    url: "/bio",
    siteName: "GCompass",
    images: [
      {
        url: "/bio/og-bio.png",
        width: 1200,
        height: 630,
        alt: "Mini Site Comercial GCompass — reúna seus links em uma página profissional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GCompass — Mini Site Comercial",
    description:
      "Sua empresa merece mais do que links soltos. Mini Site Comercial personalizado por R$197, entregue em até 3 dias.",
    images: ["/bio/og-bio.png"],
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
