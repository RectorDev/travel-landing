import Button from "@/components/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 md:gap-28 py-10 pb-32 lg:py-20 xl:flex-row ">
      <div className="hero-map" />
      {/* LEFT */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 " dir="rtl">
        <Image className="absolute right-[-5px] top-[-30px] w-10 lg:w-[50-px]" src={"/camp.svg"} alt="camp" width={50} height={50} />
        <h1 className="bold-52 lg:bold-88 font-vazir">منطقه کمپی طبس سبزوار</h1>
        <p className="refular-16 mt-6 text-secondary/80  xl:max-w-[520px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
        </p>
        <div className="my-11 flex-wrap flex gap-5">
          <div className="flex items-center gap-2 " dir="rtl">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image src={"/star.svg"} key={index} alt="star " width={24} height={24} />
              ))}
          </div>
          <p dir="rtl" className="text-blue-70 lg:bold-20 bold-16 dark:text-blue-50">
            198 هزار <span className="regular-16 lg:regular-20 ml-1">رضایت کامل</span>
          </p>
        </div>

        <div className="flex w-full gap-3 sm:flex-row flex-col">
          <Button title="دانلود اَپ" variant="btn_green" />
          <Button title="ما چیکار میکنم؟" variant="btn_white_text" icon="/play.svg" />
        </div>
      </div>
      <div className="relative flex flex-1 justify-end items-start ">
        <div className="relative z-20 w-[268px] flex-col rounded-3xl bg-secondary/90 gap-8 flex px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween ">
              <p className="regular-16 text-primary/60">مکان</p>
              <Image className="dark:invert" src={"/close.svg"} width={24} height={24} alt="close" />
            </div>
            <p className="bold-20 text-primary">جنگل طبس</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-primary/60">فاصله</p>
              <p className="bold-20 text-primary">173.2 ک.م</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-primary/60">فاصله</p>
              <p className="bold-20 text-primary">173.2 ک.م</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
