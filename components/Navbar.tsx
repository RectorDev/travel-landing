import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flexBetween max-container padding-container z-30 relative py-5 font-noto">
      
      <Link href={"/"}>
        <Image src={"/hilink-logo.svg"} alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex" dir="rtl">
        {NAV_LINKS.map((item) => (
          <li key={item.key}>
            <Link className="regular-16 text-secondary/70 flexCenter cursor-pointer pb-1.5  transition-all hover:font-bold" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button />
      </div>

      <Image src={"menu.svg"} width={32} height={32} alt="menu" className="inline-block cursor-pointer lg:hidden" />
      <div></div>
    </nav>
  );
}
