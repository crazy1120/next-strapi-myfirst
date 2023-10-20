import Image from "next/image";
import Link from "next/link";

import { SERVER_ROOT_URL } from "@/utils/constants";

interface DataProps {
  title: string;
  desc: string;
  link: string;
  theme_color: string;
}

export const LinkComponent = ({
  link,
  theme_color,
  left,
}: {
  link: string;
  theme_color: string;
  left?: boolean;
}) => {
  return (
    <Link
      href={link}
      className={`text-white text-[17px] lg:text-[21px] font-bold py-2.5 px-[30px] gap-2.5 rounded-[30px] hover:bg-green ${
        left ? "mt-[55px]" : "mt-6"
      } ${theme_color === "white" ? "bg-purple" : "bg-green"}`}>
      View Product
    </Link>
  );
};

export const LeftComponent = ({
  data,
  image,
  image_width,
  classname,
}: {
  data: DataProps;
  image: Image;
  image_width: number;
  classname: string;
}) => {
  const { url, alternativeText: alt, width, height } = image.data.attributes;
  const { theme_color } = data;

  return (
    <div className="relative flex flex-col items-start ml-[100px] lg:ml-[150px] pt-[100px] lg:pt-[130px]">
      <h3
        dangerouslySetInnerHTML={{ __html: data.title }}
        className={`text-[32px] lg:text-7xl w-[300px] lg:w-[698px] font-bold ${
          theme_color === "white" ? "text-purple" : "text-white"
        }`}
      />
      <p
        dangerouslySetInnerHTML={{ __html: data.desc }}
        className={`w-[350px] lg:w-[537px] text-2xl text-gray-150 leading-[30px] mt-5 ${
          theme_color === "white" ? "text-purple" : "text-white"
        }`}
      />
      <LinkComponent link={data.link} theme_color={theme_color} left={true} />
      <Image
        className={`absolute ${classname}`}
        src={`${SERVER_ROOT_URL}${url}`}
        alt={alt}
        width={image_width || width}
        height={height}
      />
    </div>
  );
};

export const CenterComponent = ({
  data,
  image,
}: {
  data: DataProps;
  image: Image;
}) => {
  const { url, alternativeText: alt, width, height } = image.data.attributes;

  return (
    <div className="flex flex-col items-center text-center">
      <h3
        dangerouslySetInnerHTML={{ __html: data.title }}
        className="text-[32px] lg:text-7xl font-bold text-purple"
      />
      <p
        dangerouslySetInnerHTML={{ __html: data.desc }}
        className="w-[280px] sm:w-full text-xl lg:text-2xl mt-5 text-gray-150 leading-[30px]"
      />
      <LinkComponent link={data.link} theme_color={data.theme_color} />
      <Image
        className="mt-[68px] w-[600px] lg:w-[924px]"
        src={`${SERVER_ROOT_URL}${url}`}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};

export const MobileComponent = ({
  data,
  image,
  image_width,
  bottom,
}: {
  data: DataProps;
  image: Image;
  image_width: number;
  bottom?: boolean;
}) => {
  const { url, alternativeText: alt, height } = image.data.attributes;
  const { theme_color } = data;

  return (
    <div className="flex flex-col items-center text-center pt-[100px]">
      <h3
        dangerouslySetInnerHTML={{ __html: data.title }}
        className={`text-[32px] font-bold ${
          theme_color === "white" ? "text-purple" : "text-white"
        }`}
      />
      <p
        dangerouslySetInnerHTML={{ __html: data.desc }}
        className={`w-[280px] text-xl mt-5 leading-[30px] ${
          theme_color === "white" ? "text-gray-150" : "text-white"
        }`}
      />
      <LinkComponent link={data.link} theme_color={data.theme_color} />
      <div
        className={`h-[416px] flex justify-center ${
          bottom ? "items-end" : "items-center"
        }`}>
        <Image
          src={`${SERVER_ROOT_URL}${url}`}
          alt={alt}
          width={image_width}
          height={height}
        />
      </div>
    </div>
  );
};
