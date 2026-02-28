import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header className="flex items-center justify-between">
        <Link href="/">
      <p>{settings.data.site_title}</p>
        </Link>
      <nav>
        <ul className="flex items-center gap-4">
          {settings.data.navigation.map((item, index) => (
            <li key={index}>
              <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}