import Link from "next/link";
import { LinksProps } from ".";

export const StayConnectedLink = () => (
  <li>
    <Link href={"/stay-connected"}>Stay Connected</Link>
  </li>
);

export const FreeSIMLink = () => (
  <li>
    <Link href={"/freesim"}>FreeSIM</Link>
  </li>
);

export const BringYourOwnFoneLink = () => (
  <li>
    <Link href={"/stay-connected/byof"}>Bring Your Own Fone</Link>
  </li>
);

const SubscriptionLinks: React.FC<LinksProps> = ({ prefix }) => {
  return (
    <ul className={`${prefix}-submenu`}>
      <StayConnectedLink />
      <FreeSIMLink />
      <BringYourOwnFoneLink />
    </ul>
  );
};

export default SubscriptionLinks;
