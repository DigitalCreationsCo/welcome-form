import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Sans } from 'next/font/google'
import "./globals.css";
import { FormProvider } from '../context/FormContext';
import { AnimatePresence } from 'framer-motion';
import { Card } from "@/components/ui/card";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: "--font-noto-sans",
})

export const metadata: Metadata = {
  title: "Web Form",
  description: "A sample project by Bryant Mejia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} ${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden animate-gradient flex min-h-screen items-center justify-center`}
      >
        <Card className="w-full max-w-md p-8">
        <FormProvider>
        <AnimatePresence mode="wait">
        {children}
        </AnimatePresence>
    </FormProvider>
        </Card>
      </body>
    </html>
  );
}
