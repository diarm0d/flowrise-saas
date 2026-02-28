import type { Metadata, ResolvingMetadata } from "next";
import { Nunito, Nunito_Sans} from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { createClient } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-mono",
  subsets: ["latin"],
});

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle('settings')
  return {
    title: settings.data.site_title || "Flowrise",
    description: settings.data.meta_description || "Flowrise - The Flow Designer",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
}
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body>
        <Header />
        {children}
      </body>
      <Footer />
    </html>
  );
}
