import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const clientName =
  process.env.NEXT_PUBLIC_CLIENT_NAME ?? "Psicanálise Metanoia";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://seudominio.com.br";
const description =
  "Atendimento online em português para brasileiros que vivem no exterior. Um espaço de escuta para acolher os desafios emocionais da imigração.";
const onlineService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: clientName,
  description,
  serviceType: "Atendimento online de psicanálise em português",
  provider: {
    "@type": "Organization",
    name: clientName,
  },
  url: siteUrl,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${clientName} — Terapia online para brasileiros no exterior`,
  description,
  keywords: [
    clientName,
    "terapia online para brasileiros no exterior",
    "psicanálise em português",
    "saúde mental na imigração",
    "solidão e ansiedade no exterior",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${clientName} — Atendimento online em português`,
    description,
    url: siteUrl,
    siteName: clientName,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${clientName} — Atendimento online em português`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(onlineService).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
