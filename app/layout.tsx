import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Quant Engineering Lab",
  description:
    "A protocol for turning quantitative claims into independently verifiable artifacts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 text-neutral-900`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-neutral-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-sm font-semibold tracking-tight">
                Quant Engineering Lab
              </Link>
              <nav className="flex gap-4 text-sm text-neutral-600">
                <Link href="/writing" className="hover:text-neutral-900">
                  Writing
                </Link>
                <Link href="/about" className="hover:text-neutral-900">
                  About
                </Link>
              </nav>
            </div>
          </header>

          <main className="mx-auto w-full max-w-3xl px-6 py-12 leading-relaxed flex-1">
            {children}
          </main>

          <footer className="border-t border-neutral-200 bg-white">
            <div className="mx-auto w-full max-w-3xl px-6 py-6 text-sm text-neutral-500">
              © {new Date().getFullYear()} Quant Engineering Lab
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
