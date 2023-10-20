import Link from "next/link";
import { LinksProps } from ".";

const Lite = () => (
  <li>
    <Link href={"/myfirst-headphones-bc-wireless-lite"}>
      myFirst Headphones BC Wireless Lite
    </Link>
  </li>
);

const AudioLinks: React.FC<LinksProps> = ({ prefix }) => {
  return (
    <ul className={`${prefix}-submenu`}>
      <li>
        <Link href={"/myfirst-carebuds"}>myFirst CareBuds</Link>
      </li>
      {prefix === "navbar" && <Lite />}
      <li>
        <Link href={"/myfirst-headphones-bc-wireless"}>
          myFirst Headphones BC Wireless
        </Link>
      </li>
      {prefix === "footer" && <Lite />}
    </ul>
  );
};

export default AudioLinks;
