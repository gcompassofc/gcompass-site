import type { Metadata } from "next";
import { Manrope, Bricolage_Grotesque } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-b2-sans",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-b2-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gcompass.com.br"),
  title: "Sua bio do Instagram por R$197 — GCompass",
  description:
    "Uma página só sua, com WhatsApp, Instagram, endereço e catálogo num link só. Pronta em até 3 dias. Pagamento único de R$197.",
  alternates: { canonical: "/bio2" },
  openGraph: {
    title: "Sua bio do Instagram por R$197",
    description:
      "Uma página só sua, com todos os seus links. Pronta em até 3 dias. Pagamento único.",
    type: "website",
    locale: "pt_BR",
    url: "/bio2",
    siteName: "GCompass",
  },
  robots: { index: false, follow: false },
};

export default function Bio2Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${manrope.variable} ${bricolage.variable}`}>{children}</div>;
}
