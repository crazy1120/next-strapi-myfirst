import Image from "next/image";
import Link from "next/link";

import { SERVER_ROOT_URL } from "@/utils/constants";
import { heroesAndBlocks } from "@/pages";

interface HeroProps {
  flexLastHero?: boolean;
  info: heroesAndBlocks;
}

const Hero: React.FC<HeroProps> = ({ flexLastHero = false, info }) => {
  const { title, desc, link, link_text, image } = info;
  const imageInfo = image.data.attributes;

  return (
    <div
      className={`relative w-full h-[600px] lg:h-[700px] mb-2.5 lg:mb-3 flex justify-center items-end ${
        flexLastHero && "ml-2.5 lg:ml-3"
      }`}>
      <Image
        src={`${SERVER_ROOT_URL}${imageInfo.url}`}
        alt={imageInfo.alternativeText}
        width={imageInfo.width}
        height={imageInfo.height}
        className="absolute w-full h-full top-0 object-cover rounded-[10px] z-0"
      />
      <div
        className={`relative flex flex-wrap flex-col items-center max-w-[670px] mb-[30px] lg:mb-[50px] text-white z-10`}>
        <h2 className={`text-3xl lg:text-6xl font-bold mb-2.5`}>{title}</h2>
        <p
          className={`text-[17px] lg:text-[21px] self-stretch text-center mb-[30px]`}>
          {desc}
        </p>
        <Link
          href={`${link}`}
          className={`text-[17px] lg:text-[21px] font-bold bg-purple hover:bg-green py-2.5 px-[30px] rounded-[30px]`}>
          {link_text}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
