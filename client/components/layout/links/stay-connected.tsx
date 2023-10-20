import Link from "next/link";
import { BringYourOwnFoneLink, StayConnectedLink } from "./subscription";
import { LinksProps } from ".";

const StayConnectedLinks: React.FC<LinksProps> = ({ prefix }) => {
  return (
    <ul className={`${prefix}-submenu`}>
      <StayConnectedLink />
      <BringYourOwnFoneLink />
      <li>
        <Link href={"/stay-connected/renew-and-upgrade"}>
          Renew and Upgrade
        </Link>
      </li>
      <li>
        <Link href={"/customer-portal"}>Customer Portal</Link>
      </li>
    </ul>
  );
};

export default StayConnectedLinks;
