import Image from "next/image";
import { useSelector } from "react-redux";
import { SERVER_ROOT_URL } from "@/utils/constants";

import { storyItemData } from "@/pages/about";

interface storyItemProps {
  data: storyItemData;
}

const Img = ({ imageInfo }: { imageInfo: Image }) => {
  const image = imageInfo.data.attributes;
  return (
    <Image
      src={`${SERVER_ROOT_URL}${image.url}`}
      width={image.width}
      height={image.height}
      alt="story item"
      className="w-full sm:w-1/2 max-w-[570px]"
    />
  );
};

const StoryItem: React.FC<storyItemProps> = ({ data }) => {
  const { desc, image, textLeft } = data;

  const { type }: { type: string } = useSelector(
    (state: { device: { type: string } }) => state.device
  );

  return (
    <li className="flex flex-col sm:flex-row">
      {type === "mobile" && <Img imageInfo={image} />}
      {type !== "mobile" && !data.textLeft && <Img imageInfo={image} />}
      <div className="w-full sm:w-1/2 sm:flex items-center text-start py-[30px] sm:px-[30px]">
        {data.desc}
      </div>
      {type !== "mobile" && data.textLeft && <Img imageInfo={image} />}
    </li>
  );
};

export default StoryItem;
