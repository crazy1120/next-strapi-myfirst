import { supportItem} from "@/pages/contact";
import SupportItem from "./supportItem";

interface SupportItemsProps {
  title: string;
  items: supportItem[];
}
const ContactLiveSupport: React.FC<SupportItemsProps> = ({title, items}) => {
  
  return (
    <section className="flex flex-col items-center text-gray-150 text-center mx-5 lg:mx-auto max-w-[1140px]">
      <h2 className="text-3xl leading-10 sm:leading-normal max-w-[800px] mb-20 lg:mb-[50px]">
        {title}
      </h2>
      <div className="flex flex-wrap">
        {
          items.map((item, ind) => (
            <SupportItem key={ind} data={item} />
          ))
        }
      </div>
    </section>
  );
};

export default ContactLiveSupport;
