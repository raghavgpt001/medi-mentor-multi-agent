import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MediMentor AI",
  description: "MediMentor AI is a demo app designed for Medical Students to practice their clinical skills.",
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
