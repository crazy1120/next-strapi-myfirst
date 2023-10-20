
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { privacyPolicy } from "@/pages/privacy-policy";

interface privacyPolicyProps {
  privacyPolicy: privacyPolicy
}
const PrivacyPolicy: React.FC<privacyPolicyProps> = ({privacyPolicy}) => {
  return (
    <section className="max-w-[800px] text-start mx-5 lg:mx-auto mb-[80px]">
      <h1 className="text-[30px] text-gray-150 font-bold leading-9 my-[50px]">
        {privacyPolicy.title}
      </h1>
      <div>
      <Markdown children={privacyPolicy.desc} remarkPlugins={[remarkGfm]} className="rich-text_mb-20 break-words text-[17px]"/>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
