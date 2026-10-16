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
  process.env.NEXT_PUBLIC_CLIENT_NAME ?? "Psicaanalise Metanoia";
const city = process.env.NEXT_PUBLIC_CITY ?? "Ji-Paraná RO";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://seudominio.com.br";
const address =
  process.env.NEXT_PUBLIC_ADDRESS ??
  "Av Aracaju, 3368, Jorge Texeira, Ji-Paraná - RO";
const phone = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+55 69 9917-5555"
).replace(/[^\d+]/g, "");
const hours = process.env.NEXT_PUBLIC_HOURS ?? "";
const description =
  "Um espaço de escuta, acolhimento e reflexão, onde você pode explorar suas emoções, compreender seus conflitos e construir uma relação mais consciente consigo mesmo.";
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: clientName,
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: address,
    addressLocality: city,
    addressCountry: "BR",
  },
  telephone: phone,
  ...(hours ? { openingHours: hours } : {}),
  url: siteUrl,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${clientName} — Tratamento confiável e de qualidade | ${city}`,
  description: `${description} ${clientName} em ${city}. Atendimento personalizado.`,
  keywords: [
    "Clínica de Psicanálise",
    city,
    clientName,
    "Atendimento personalizado",
    "terapia individual",
    "terapia de casal",
    "terapia familiar",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${clientName} — Tratamento confiável e de qualidade`,
    description: `${description} ${clientName} em ${city}.`,
    url: siteUrl,
    siteName: clientName,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${clientName} — Tratamento confiável e de qualidade`,
    description: `${description} ${clientName} em ${city}.`,
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
            __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
