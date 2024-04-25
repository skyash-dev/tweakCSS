import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const urbanist = Urbanist({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "tweakCSS",
  description: "Dynamic Palette Manager!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-[#05051E]`}>
      {children}
      <Toaster/>
      </body>
    </html>
  );
}
