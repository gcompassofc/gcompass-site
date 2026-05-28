import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elite Pizzaria — Shopping Ilhabela",
  description:
    "A verdadeira pizza napolitana encontrou a culinária árabe. E a vista para o mar de Ilhabela. Todos os links da Elite Pizzaria em um só lugar.",
  openGraph: {
    title: "Elite Pizzaria — Shopping Ilhabela",
    description:
      "Delivery, reservas, cardápio e redes sociais da Elite Pizzaria. Todos os links em um só lugar.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export default function EliteLayout({ children }: { children: React.ReactNode }) {
  return <div className={inter.className}>{children}</div>;
}
