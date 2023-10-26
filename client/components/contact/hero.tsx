import Image from "next/image";

import { SERVER_ROOT_URL } from "@/utils/constants";
import { heroAndBlock } from "@/pages/contact";

interface heroProps {
  hero: heroAndBlock;
}
const contactHero: React.FC<heroProps> = ({hero}) => {
  const { image } = hero;
  const imgInfo = image.data.attributes;
  
  return (
    
    <section className="relative flex justify-center items-center h-[500px] lg:h-[800px] mt-5 lg:mt-0 mb-[50px] lg:mb-[100px]">
    <Image
        src={`${SERVER_ROOT_URL}${imgInfo.url}`}
        alt={imgInfo.alternativeText}
        width={imgInfo.width}
        height={imgInfo.height}
        className="absolute w-full h-full top-0 object-cover z-0"
      />
      
      <h1 className="text-[50px] w-96 sm:w-auto lg:text-[80px] font-bold text-white text-center z-10">
        {hero.title}
      </h1>
    </section>
  );
};

export default contactHero;
