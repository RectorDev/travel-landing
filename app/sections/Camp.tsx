import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
export default function Camp() {
  return (
    <section className="border-4 border-purple-800 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] ">
        <CampSite backgroundImage="bg-bg-img-1" title="کمپ جنگل طبس" subtitle="سبزوار, طبس" peopleJoined="30+ Joined" />
        <CampSite backgroundImage="bg-bg-img-2" title="کوه های ششتمد" subtitle="سبزوار, ششتمد" peopleJoined="50+ Joined" />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:y-20 relative w-full overflow-hidden rounded-3xl">
          {" "}
          <h2 dir="rtl" className="regular-24 md:regular-32 2xl:regular-64 text-white">
            <strong>گم شدی</strong> و راه رو بلد نیستی؟
          </h2>
          <p dir="rtl" className="regular-14 xl:regular-16 mt-5 text-white">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
            شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
          </p>
          <Image src={'/quote.svg'} alt="camp-2" width={186} height={219} className="camp-quote"/>
        </div>
      </div>
    </section>
  );
}
function CampSite({ backgroundImage, title, subtitle, peopleJoined }: { backgroundImage: string; title: string; subtitle: string; peopleJoined: string }) {
  return (
    <div className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat object-center lg:rounded-r-5xl 2xl:rounded-5xl ${backgroundImage}`}>
      {" "}
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image width={28} height={28} alt="map" src={"/folded-map.svg"} />
          </div>
          <div className="flex flex-col gap-1 ">
            {" "}
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6 ">
          <span className="flex -space-x-4 overflow-hidden ">
            {PEOPLE_URL.map((item, index) => (
              <Image className="inline-block h-10 w-10 rounded-full " key={index} alt="person" width={52} height={52} src={item} />
            ))}
          </span>
          <p className="bold-16t md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
}
