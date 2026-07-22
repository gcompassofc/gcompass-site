import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-proposta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Proposta Comercial | Auxiliadora Predial Agência Centro",
  description:
    "Estruturação da aquisição de clientes: transformar investimento em anúncio em dado rastreável, lead qualificado e decisão comercial baseada em número.",
  robots: { index: false, follow: false },
};

export default function PropostaLayout({ children }: { children: React.ReactNode }) {
  return <div className={outfit.variable}>{children}</div>;
}
