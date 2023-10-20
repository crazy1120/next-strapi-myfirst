import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { columnBlockData } from "@/pages/locate-us";

interface officeProps {
  blockData: columnBlockData;
}
const LocateColumnBlock: React.FC<officeProps> = ({blockData}) => {

  return (
    <div className="w-full flex flex-wrap justify-between sm:w-1/2">
      <h4 className="text-[30px] w-full leading-9 font-bold mb-[30px]">{blockData.title}</h4>
      <Markdown children={blockData.desc} remarkPlugins={[remarkGfm]} className="break-words text-[17px] rich-text_mb-20 list-style-disc markdown-list"/>
    </div>
  );
};

export default LocateColumnBlock;
