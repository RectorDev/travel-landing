import Button from "@/components/Button";
import Image from "next/image";

export default function GetApp() {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-between gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">!رایگان دانلود کنید</h2>
          <p className="regular-16 text-gray-10">برای اندروید و اپل</p>
          <div className="flex flex-col w-full gap-3 whitespace-nowrap xl:flex-row">
            <Button type="button" icon="/apple.svg" variant="btn_white" title="دانلود برای اندروید" full />
            <Button type="button" icon="/android.svg" variant="btn_dark_green_outline" title="دانلود برای اندروید" full />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src={"/phones.png"} alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
}
