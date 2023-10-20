import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {enquiry} from "@/pages/contact";

interface enquiryProps {
  data: enquiry;
}

const Enquiry: React.FC<enquiryProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-start bg-purple bg-opacity-10 leading-normal p-[30px] gap-[30px] rounded-[10px] mt-[30px]">
      <h6 className="text-[30px] leading-9 font-bold">{data.title}</h6>
      <div>
        <Markdown children={data.desc} remarkPlugins={[remarkGfm]} className="rich-text_mb-10 text-[21px] leading-7 enquiries"/>
      </div>
    </div>
  );
};
  
export default Enquiry;