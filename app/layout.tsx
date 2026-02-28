import type { Metadata, ResolvingMetadata } from "next";
import { Nunito, Nunito_Sans} from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { createClient } from "@/prismicio";
import Link from "next/link";

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
  const page = await client.getSingle('settings')
  return {
    title: page.data.site_title || "Flowrise",
    description: page.data.meta_description || "Flowrise - The Flow Designer",
    openGraph: {
      images: [page.data.og_image.url || ""],
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
        <header>
          <nav>
            <ul>
              {/* {navigation.data.navigation.map((item, index) => (
                <li key={index}>
                  <Link href={item.link.url}>{item.label}</Link>
                </li>
              ))} */}
            </ul>
          </nav>
        </header>
        {children}
      </body>
      <footer>
        <p>Flowrise - The Flow Designer</p>
      </footer>
    </html>
  );
}
