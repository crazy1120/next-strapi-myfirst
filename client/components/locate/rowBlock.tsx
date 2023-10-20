import Image from "next/image";

import { blockData } from "@/pages/locate-us";
import RowBlockItem from "./rowBlockItem";

interface officeProps {
  blockData: blockData;
}
const LocateRowBlock: React.FC<officeProps> = ({blockData}) => {
  return (
    <>
      <div className="w-full flex flex-wrap justify-between sm:w-full">
        <h4 className="text-[30px] w-full leading-9 font-bold mb-[30px]">{blockData.title}</h4>
        {
          blockData.items.map((rec, ind) => (
            <RowBlockItem key={ind} item={rec} />
          ))
        }
      </div>
    </>
  );
};

export default LocateRowBlock;
