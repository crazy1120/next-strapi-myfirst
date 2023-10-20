import { supportItem } from "@/pages/contact";
import Enquiry from "./enquiry";
import {enquiry} from "@/pages/contact";

interface SupportItemsProps {
  items: enquiry[];
}
const Enquiries: React.FC<SupportItemsProps> = ({items}) => {
  return (
    <section className="flex flex-col text-gray-150 max-w-[1140px] mt-[50px] mb-20 lg:mt-[105px] lg:mb-[100px] mx-5 lg:mx-auto">
      {
        items.map((item, ind) => (
          <Enquiry key={ind} data={item}  />
        ))
      }
    </section>
  );
};

export default Enquiries;
