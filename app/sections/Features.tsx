import { FEATURES } from "@/constants";
import Image from "next/image";

export default function Features() {
  return (
    <section className="flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image src={"/phone.png"} alt="phone" width={440} height={100} className="feature-phone" />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%] ">
          <div className="relative">
            <Image src={"/camp.svg"} className="absolute right-[-5px] top-[-49px]" alt="camp" width={50} height={50} />
            <h2 dir="rtl" className="bold-40 lg:bold-64">قابلیت های ما</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20 " dir="rtl">
            {FEATURES.map((item) => (
              <FeatureItem title={item.title} key={item.icon} icon={item.icon} description={item.description} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, icon, description }: { icon: string; description: string; title: string }) {
  return (
    <li className="flex flex-1 w-full flex-col items-start ">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold32 mt-5 ">{title}</h2>
      <p className="regular-16 mt-5 bg-white/50 text-secondary/70 lg:mt-[30px] lg:bg-none">{description}</p>
    </li>
  );
}
