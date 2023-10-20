import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

import { SERVER_ROOT_URL } from "@/utils/constants";
import { heroesAndBlocks } from "@/pages";

interface BlockProps {
  left?: boolean;
  info: heroesAndBlocks;
}

const Hero: React.FC<BlockProps> = ({ left = false, info }) => {
  const { title, desc, link, image } = info;
  const imageInfo = image.data.attributes;

  const { type }: { type: string } = useSelector(
    (state: { device: { type: string } }) => state.device
  );

  return (
    <div
      className={`flex flex-col items-center text-gray-100 pt-20 px-2.5 pb-2.5 ${
        left && type !== "mobile" && "mr-2.5 lg:mr-3"
      }`}>
      <h3 className="text-3xl lg:text-6xl font-bold">{title}</h3>
      <p className="text-[17px] lg:text-[21px] text-center mt-2.5">{desc}</p>
      <Link
        href={link}
        className="text-[17px] lg:text-[21px] text-white bg-purple hover:bg-green font-bold py-2.5 px-[30px] rounded-[30px] my-[30px]">
        View Product
      </Link>
      <Image
        src={`${SERVER_ROOT_URL}${imageInfo.url}`}
        alt={imageInfo.alternativeText}
        width={imageInfo.width}
        height={imageInfo.height}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;
