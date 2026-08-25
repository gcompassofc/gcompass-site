import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://gcompass.com.br"),
  title: "Revisão | G Compass",
  description: "Área interna de revisão de materiais.",
  // Material de revisão: fora dos buscadores.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function RevisaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
