export default function Camp() {
  return (
    <section className="border-4 border-purple-800 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] ">
        <CampSite backgroundImage="bg-bg--img-1" title="کمپ جنگل طبس" subtitle="سبزوار, طبس" peopleJoined="32+ Joined" />
        <CampSite />
      </div>
    </section>
  );
}
function CampSite({ backgroundImage, title, subtitle, peopleJoined }: { backgroundImage: string; title:string; subtitle:string; peopleJoined:string }) {
  return <></>;
}
