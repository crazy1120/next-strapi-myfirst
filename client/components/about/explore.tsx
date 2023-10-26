import { exploreData } from "@/pages/about";
import ExploreItem from "./exploreItem";

interface exploreProps {
  explore: exploreData
}
const AboutExplore: React.FC<exploreProps> = ({explore}) => {
  return (
    <section className="max-w-[1440px] px-2.5 lg:px-3 lg:mx-auto mb-5 lg:mb-[70px]">
      <h5 className="text-center text-[40px] lg:text-6xl leading-[48px] lg:leading-[73px] text-purple font-bold mb-[50px]">{explore.title}</h5>
      <ul className="flex flex-col sm:flex-row">
        {
          explore.items.map((item, ind) => (
            <ExploreItem key={ind} data={item} />
          ))
        }
    </ul>
    </section>
  );
};

export default AboutExplore;
