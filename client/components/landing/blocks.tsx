import { useSelector } from "react-redux";

import { heroesAndBlocks } from "@/pages";
import Block from "./block";

interface BlocksProps {
  blocks: heroesAndBlocks[];
}

const Blocks: React.FC<BlocksProps> = ({ blocks }) => {
  const { type }: { type: string } = useSelector(
    (state: { device: { type: string } }) => state.device
  );

  return (
    <section className="px-2.5 lg:px-3 m-2.5 lg:m-3">
      <div className={`flex justify-center ${type === "mobile" && "flex-col"}`}>
        <Block info={blocks[0]} left={true} />
        <Block info={blocks[1]} />
      </div>
      <div className={`flex justify-center ${type === "mobile" && "flex-col"}`}>
        <Block info={blocks[2]} left={true} />
        <Block info={blocks[3]} />
      </div>
    </section>
  );
};

export default Blocks;
