import Link from "next/link";
import { FreeSIMLink } from "./subscription";
import { LinksProps } from ".";

const FreeSIMLinks: React.FC<LinksProps> = ({ prefix }) => {
  return (
    <ul className={`${prefix}-submenu`}>
      <FreeSIMLink />
      <li>
        <Link href={"/freesim-tw"}>FreeSIM (Taiwan)</Link>
      </li>
      <li>
        <Link href={"https://freesim.myfirst.tech"}>
          Activate A New FreeSIM Card
        </Link>
      </li>
      <li>
        <Link href={"https://billing.stripe.com/p/login/6oE8ztgW65j73aEeUU"}>
          FreeSIM Customer Portal
        </Link>
      </li>
    </ul>
  );
};

export default FreeSIMLinks;
