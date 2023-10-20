import Image from "next/image";
import { useSelector } from "react-redux";
import { SERVER_ROOT_URL } from "@/utils/constants";

import { storyItemData } from "@/pages/about";

interface storyItemProps {
    data: storyItemData;
}

const StoryItem: React.FC<storyItemProps> = ({ data }) => {
  const { desc, image, textLeft } = data;
  const imageInfo = image.data.attributes;
  
  const { type }: { type: string } = useSelector(
    (state: { device: { type: string } }) => state.device
  );

  const img = (imageInfo) => (
    <Image
      src={`${SERVER_ROOT_URL}${imageInfo.url}`}
      width={imageInfo.width}
      height={imageInfo.height}
      alt="story item"
      className="w-full sm:w-1/2 max-w-[570px]"
    />
  );
  return (
    <li className="flex flex-col sm:flex-row">
      {type === "mobile" && img(imageInfo)}
      {type !== "mobile" && !data.textLeft  && img(imageInfo)}
      <div className="w-full sm:w-1/2 sm:flex items-center text-start py-[30px] sm:px-[30px]">
        {data.desc}
      </div>
      {type !== "mobile" && data.textLeft  && img(imageInfo)}
      
    </li>
  );
};

export default StoryItem;