import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";
import Logo from "./Logo";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <Bounded
      as="header"
      className="py-4 md:py-6 lg:py-8"
    >
      <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul className="flex items-center gap-4">
            {settings.data.navigation.map((item, index) => (
              <li key={index}>
                <PrismicNextLink className="p-3" field={item.link}>
                  {item.label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}