import Link from "next/link";
import { LinksProps } from ".";

const CompanyLinks: React.FC<LinksProps> = ({ prefix }) => {
  return (
    <ul className={`${prefix}-submenu`}>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
      <li>
        <Link href={"/locate-us"}>Locate Us</Link>
      </li>
      <li>
        <Link href={"/news"}>News</Link>
      </li>
      <li>
        <Link href={"/privacy-policy"}>Privacy Policy</Link>
      </li>
      <li>
        <Link href={"/archive"}>Archive</Link>
      </li>
    </ul>
  );
};

export default CompanyLinks;
