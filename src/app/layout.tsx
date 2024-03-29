import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Promo50K Cadena + Dije",
  description: "Cadenas y dijes para combinar con tu outfit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={cn(
        'min-h-screen font-sans antialiased grainy',
        inter.className
      )}>
        {children}
      </body>
    </html>
  );
}
