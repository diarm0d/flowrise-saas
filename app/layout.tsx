import type { Metadata } from "next";
import { Nunito, Nunito_Sans} from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flowrise",
  description: "Flowrise - The Flow Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body>
        {children}
      </body>
    </html>
  );
}
