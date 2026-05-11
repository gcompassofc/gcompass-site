import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-saltur",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saltur Viagens & Turismo — Links Oficiais",
  description:
    "Sonhe, planeje, viaje. Acesse WhatsApp, site, redes sociais e pacotes em destaque da Saltur Viagens & Turismo.",
  openGraph: {
    title: "Saltur Viagens & Turismo — Links Oficiais",
    description: "47 anos transformando sonhos em viagens. Acesse nossos canais oficiais.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export default function SalturBioLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${montserrat.variable}`}>{children}</div>;
}
