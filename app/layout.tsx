import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Literata } from "next/font/google";
import { GoogleTag } from "@/components/google-tag";
import { MotionProvider, ScrollProgress } from "@/components/motion-elements";
import { SmoothAnchor } from "@/components/smooth-anchor";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";
import "lenis/dist/lenis.css";
import "./globals.css";

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TITLE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Salud mental",
  keywords: [
    "psicóloga online",
    "psicoterapia online Argentina",
    "terapia para adultos online",
    "terapia de pareja online",
    "terapia familiar online",
    "psicoanalista online",
    "psicoterapia adultos parejas familias",
    "Melina Santos psicóloga",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Psicoterapia online`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Psicoterapia online`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcf9f4",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${literata.variable} ${beVietnamPro.variable}`}>
      <body>
        <SmoothAnchor href="#contenido" className="skip-link">Saltar al contenido</SmoothAnchor>
        <MotionProvider>
          <ScrollProgress />
          {children}
        </MotionProvider>
        <GoogleTag />
      </body>
    </html>
  );
}
