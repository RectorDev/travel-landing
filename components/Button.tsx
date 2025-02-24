import Image from "next/image";

type Props = {
  title?: string;
  icon?: string;
  variant?: "btn_white" | "btn_dark" | "btn_green" | "btn_white_text";
  type?: "button" | "reset" | "submit" | undefined;
};

export default function Button({ title = "کیلک کنید", icon, variant = "btn_dark", type = "button" }: Props) {
  return (
    <button className={`rounded-full py-2 px-4 flexCenter gap-2 font-semibold ${variant}`} type={type}>
      {icon && <Image src={icon} width={25} height={25} alt={title} />} 
      {title}
      
    </button>
  );
}
