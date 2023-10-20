import Image from "next/image";
import Link from "next/link";

import { SERVER_ROOT_URL } from "@/utils/constants";
import { blogs } from "@/pages";

interface BlogProps {
  info: blogs;
}

const Blog: React.FC<BlogProps> = ({ info }) => {
  const { title, desc, link, date, image } = info;
  const imageInfo = image.data.attributes;
  return (
    <article className="relative basis-full sm:basis-[47%] lg:basis-[31%] rounded-[10px] m-2.5 lg:m-3 bg-white">
      <Image
        src={`${SERVER_ROOT_URL}${imageInfo.url}`}
        alt={imageInfo.alternativeText}
        width={imageInfo.width}
        height={imageInfo.height}
        className="w-full rounded-t-[10px]"
      />
      <Link href={link} className="flex flex-col items-start m-5 lg:m-[30px]">
        <h6 className="text-[17px] lg:text-[21px] font-bold">{title}</h6>
        <p className="text-[17px] lg:text-[21px] font-bold">{desc}</p>
        <p className="text-sm mt-[5px] mb-[3px]">{date}</p>
      </Link>
    </article>
  );
};

export default Blog;
