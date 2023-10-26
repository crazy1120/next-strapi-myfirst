import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { storyData, storyItemData } from "@/pages/about";
import StoryItem from "./storyItem";

interface storyProps {
  story: storyData;
  storyItems: storyItemData[];
}

const AboutStory: React.FC<storyProps> = ({ story, storyItems }) => {
  return (
    <section className="flex flex-col items-center max-w-[1140px] mx-5 lg:mx-auto">
      <h5 className="text-center text-[40px] lg:text-6xl leading-[48px] lg:leading-[73px] text-purple font-bold">
        {story.title}
      </h5>
      <div className="text-[21px] text-start max-w-[800px] leading-7 mt-[50px] mb-[100px]">
        <Markdown remarkPlugins={[remarkGfm]} className="rich-text_mb-20">
          {story.desc}
        </Markdown>
      </div>
      <ul className="flex flex-col">
        {storyItems.map((item, ind) => (
          <StoryItem key={ind} data={item} />
        ))}
      </ul>
    </section>
  );
};

export default AboutStory;
