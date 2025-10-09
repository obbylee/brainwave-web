import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";

const soraFont = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: "variable",
  preload: false,
});

const spaceGroteskFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: "variable",
  preload: false,
});

export const metadata: Metadata = {
  title: "Brainwave AI Landing Page Kit",
  description:
    "Unleash the power of AI with Brainwave — a fully customizable, responsive, and beautifully designed landing page kit for AI chat applications.",
  keywords: [
    "AI landing page",
    "AI chat UI kit",
    "Brainwave UI kit",
    "AI chat design",
    "responsive landing page",
    "Figma UI kit",
    "Tailwind UI kit",
    "AI product landing page",
    "UI8 design resources",
  ],
  openGraph: {
    title: "Brainwave AI Landing Page Kit",
    description:
      "Unleash the power of AI with Brainwave — a fully customizable, responsive, and beautifully designed landing page kit for AI chat applications.",
    url: "https://ui8.net/ui8/products/brainwave-ai-landing-page-kit",
    siteName: "UI8",
    images: [
      {
        url: "https://ui8.net/ui8/products/brainwave-ai-landing-page-kit",
        width: 1200,
        height: 630,
        alt: "Brainwave AI Landing Page Kit",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${soraFont.variable} ${spaceGroteskFont.variable} antialiased bg-gray-950 text-gray-300 font-space-grotesk`}
      >
        {children}
      </body>
    </html>
  );
}
