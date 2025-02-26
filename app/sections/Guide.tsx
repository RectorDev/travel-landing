import Image from "next/image";

export default function Guide() {
  return (
    <section className="flexCenter flex-col" dir="rtl">
      <div className="padding-container max-container w-full pb-24">
        <Image src={"/camp.svg"} alt="camp" width={50} height={50} />
        <p className=" regular-18 -mt-1 mb-3 text-green-50">ما برای شما هستیم</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-14  lg:bold-64 xl:max-w-[560px]">راهنمای شما برای مسیری آسان</h2>
          <p className="regular-16 text-secondary/70 xl:max-w-[520px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
            شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full ">
        <Image src={"/boat.png"} alt="boat" width={1440} height={580} className="w-full object-cover object-center 2xl:rounded-5xl" />
        <div className="absolute flex bg-primary py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20 w-64">
          <Image src={"/meter.svg"} alt="meter" width={16} height={158} className="h-full w-auto" />
          <div className="flexBetween flex-col  w-full gap-10 ">
            <div className="flex w-full flex-col">
              <div className="flexBetween  w-full">
                <p className="regular-16 text-secondary/70">مقصد</p>
                <p className="bold-16 text-green-50">48 دقیقه</p>
              </div>
              <p className="bold-20 mt-2">دریاچه </p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-secondary/70">مبدا</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">نیشابور</h4>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
