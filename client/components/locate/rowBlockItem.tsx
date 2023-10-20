import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface rowBlockItemProps {
  item: {
    id: number,
    title: string,
    desc: string
  };
}
const LocateRowBlockItem: React.FC<rowBlockItemProps> = ({item}) => {
  return (
    <div className="w-[367px] mb-[30px]">
      <h5 className="text-xl leading-6 font-bold mb-2.5">
        {item.title}
      </h5>
      <Markdown children={item.desc} remarkPlugins={[remarkGfm]} className="break-words text-[17px]"/>
    </div>
  );
};

export default LocateRowBlockItem;
