import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin-ext"] });


export const metadata: Metadata = {
  title: "Palette-Hub",
  description: "Dynamic Palette Manager!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>{children}</body>
    </html>
  );
}
