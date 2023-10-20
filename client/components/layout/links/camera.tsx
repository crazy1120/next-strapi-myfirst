import Link from "next/link";
import { LinksProps } from ".";

const CameraLinks: React.FC<LinksProps> = ({ prefix }) => {
  return (
    <ul className={`${prefix}-submenu`}>
      <li>
        <Link href={"/myfirst-camera-insta-wi"}>myFirst Camera Insta Wi</Link>
      </li>
      <li>
        <Link href={"/myfirst-camera-insta-2"}>myFirst Camera Insta 2</Link>
      </li>
      <li>
        <Link href={"/myfirst-camera-10"}>myFirst Camera 10</Link>
      </li>
      <li>
        <Link href={"/myfirst-camera-3"}>myFirst Camera 3</Link>
      </li>
      <li>
        <Link href={"/myfirst-camera-2"}>
          {prefix === "navbar"
            ? "Waterproof Camera For Kids - myFirst Camera 2"
            : "myFirst Camera 2"}
        </Link>
      </li>
    </ul>
  );
};

export default CameraLinks;
