import Image from "next/image";
import Hero from "./sections/Hero";
import Camp from "./sections/Camp";
import Guide from "./sections/Guide";
import GetApp from "./sections/GetApp";
import Features from "./sections/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
