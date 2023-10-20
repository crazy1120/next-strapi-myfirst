import Image from "next/image";
import Link from "next/link";
import { SERVER_ROOT_URL } from "@/utils/constants";

import { supportItem } from "@/pages/contact";

interface storyItemProps {
    data: supportItem
}

const ContactSupportItem: React.FC<storyItemProps> = ({ data }) => {
  const { title, desc, link, image } = data;
  
  const imageInfo = image.data.attributes;
  return (
    <div className="relative flex flex-col items-center py-5 w-full sm:w-1/2">
      <div className="relative">
        <Image src={`${SERVER_ROOT_URL}${imageInfo.url}`} alt="title" width={imageInfo.width} height={imageInfo.height} className="w-16 h-16" />
      </div>
      <div className="flex flex-col items-center text-[21px] leading-7 mt-5">
        <h6 className="font-bold">{title}</h6>
        <p>{desc}</p>
      </div>
      {link && (
        <Link
          href={link}
          className="text-[17px] text-purple py-[5px] px-[30px] border-[1px] border-solid border-purple hover:text-white hover:border-green hover:bg-green rounded-[40px] mt-5">
          Visit
        </Link>
      )}
    </div>
  );
};

export default ContactSupportItem;