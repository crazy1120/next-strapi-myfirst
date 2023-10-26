
import Image from "next/image";
import Link from "next/link";

import { SERVER_ROOT_URL } from "@/utils/constants";
import { exploreItemData } from "@/pages/about";

interface exploreItemProps {
    data: exploreItemData;
}

const AboutExploreItem: React.FC<exploreItemProps> = ({ data }) => {
  const { image } = data;
  const imageInfo = image.data.attributes;
  
  return (
    <li className="flex-1 text-black flex flex-col items-center mb-[30px] mx-2.5 lg:mx-3">
      <Image 
      src={`${SERVER_ROOT_URL}${imageInfo.url}`} width={imageInfo.width} height={imageInfo.height} alt={imageInfo.caption} className="rounded-[10px]" />
      <h6 className="text-[21px] leading-[25px] font-bold my-4">{data.title}</h6>
      <p className="text-[17px] leading-[25px] text-center">{data.desc}</p>
      <Link href={data.link} className="text-[17px] leading-[21px] font-bold mt-4">
        {data.link_text} 
      </Link>
    </li>
  );
};
  
  export default AboutExploreItem;