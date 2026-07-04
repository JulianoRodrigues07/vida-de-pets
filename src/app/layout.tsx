import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo",
});

export const metadata: Metadata = {
  title: "Vida de Pets | Petshop em Passo Fundo",
  description:
    "Atendimento veterinário, exames, estética animal, creche e hotel para o seu pet em Passo Fundo - RS.",
  icons: {
    icon: [
      { url: "favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${baloo.variable} ${baloo.className}`}>{children}</body>
    </html>
    
  );
}