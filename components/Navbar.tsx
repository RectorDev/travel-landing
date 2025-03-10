"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

      {
        <Image
          onClick={() => setIsOpen(!isOpen)}
          src={`${!isOpen ? "menu.svg" : "close.svg"}`}
          width={32}
          height={32}
          alt="menu"
          className="z-10 inline-block cursor-pointer lg:hidden"
        />
      }
      {isOpen && (
        <div className="fixed flex top-0 right-0 h-full lg:hidden w-[340px] bg-slate-500">
          <div className="w-full pt-24 ">
            <ul className="flex flex-col m-10 h-full gap-1 " dir="rtl">
              {NAV_LINKS.map((item) => (
                <Link key={item.key} className="regular-20 text-secondary cursor-pointer pb-1.5  transition-all hover:font-bold" href={item.href}>
                  <li  className="bg-green-50 py-4 px-2">
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
