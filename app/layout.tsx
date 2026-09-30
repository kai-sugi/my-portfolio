import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "Your Name | Projects",
  description: "Things I'm building while learning to code.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.variable}>
      <body>{children}</body>
    </html>
  );
}
