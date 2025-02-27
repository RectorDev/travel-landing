import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function Footer() {
  return (
    <section className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14 ">
        <div className="flex flex-col items-start justify-center gap-10 md:flex-row">
          <Link href="#">
            <Image src={"hilink-logo.svg"} alt="logo" width={74} height={29} />
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((item, index) => (
              <FooterCol key={item.title} title={item.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {item.links.map((item) => (
                    <Link href={"#"} key={item}>
                      {item}
                    </Link>
                  ))}
                </ul>
              </FooterCol>
            ))}
            <div className="flex flex-col gap-5">
              <FooterCol title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((item) => (
                  <Link className="flex gap-4 md:flex-col lg:flex-row" key={item.label} href={"/"}>
                    <p className="whitespace-nowrap">{item.label}</p>
                    <p className="medium-14 text-secondary/70 whitespace-nowrap">{item.value}</p>
                  </Link>
                ))}
              </FooterCol>
            </div>
            <div className="flex flex-col gap-5 ">
              <FooterCol title={SOCIALS.title}>
                <ul className="tegular-14 flex gap-4 text-secondary/60">
                  {SOCIALS.links.map((item) => (
                    <Link href={"/"} key={item}>
                      <Image src={item} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterCol>
            </div>
          </div>
        </div>
        <div className="border bg-slate-500"></div>
        <p className=" regular-14 w-full text-center text-gray-600"><span className="text-amber-500">رِکتور</span> اینجا بوده</p>
      </div>
    </section>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
}
