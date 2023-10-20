import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { missionData } from "@/pages/about";

interface missionProps {
  mission: missionData;
}
const AboutMission: React.FC<missionProps> = ({mission}) => {
  return (
    <section className="flex flex-col items-center mt-[70px] mb-[100px] mx-5 lg:mx-auto">
      <h5 className="text-center text-[40px] lg:text-6xl leading-[48px] lg:leading-[73px] text-purple font-bold">
        {mission.title}
      </h5>
      <div className="text-start text-[21px] max-w-[800px] leading-7 mt-[50px]">
        <Markdown children={mission.desc} remarkPlugins={[remarkGfm]} className="rich-text_mb-20"/>
      </div>
    </section>
  );
};

export default AboutMission;
