import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://gcompass.com.br"),
  title: "Política de Privacidade | G Compass",
  description:
    "Como a G Compass coleta, usa, compartilha e protege seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018). Saiba como exercer seus direitos de titular.",
  alternates: { canonical: "/politica-de-privacidade" },
  openGraph: {
    title: "Política de Privacidade | G Compass",
    description:
      "Como tratamos seus dados pessoais em conformidade com a LGPD e como exercer seus direitos.",
    type: "website",
    locale: "pt_BR",
    url: "/politica-de-privacidade",
    siteName: "G Compass",
  },
  robots: { index: true, follow: true },
};

export default function PoliticaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
