import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Logo from "./Logo";
import Bounded from "./Bounded";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <Bounded as="footer" className="py-4 md:py-6 lg:py-8">
      <div className="flex sm:flex-row flex-col items-center justify-between gap-4">
        <Link href="/">
          <Logo />
        </Link>
        <p className="text-xs">
          Copyright © {new Date().getFullYear()} {settings.data.site_title}
        </p>
        <ul className="flex items-center gap-4">
          {settings.data.navigation.map((item, index) => (
            <li key={index}>
              <PrismicNextLink className="p-3" field={item.link}>
                {item.label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </Bounded>
  );
}
