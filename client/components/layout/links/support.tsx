import Link from "next/link";
import { LinksProps } from ".";

const SupportLinks: React.FC<LinksProps> = ({ prefix }) => {
  return (
    <ul className={`${prefix}-submenu`}>
      <li>
        <Link href={"https://myfirsttech.zendesk.com/"}>Help Desk</Link>
      </li>
      <li>
        <Link
          href={
            "https://store.myfirst.tech/pages/exchange-return-refund-policy"
          }>
          Return & Refund Policy
        </Link>
      </li>
      <li>
        <Link href={"https://store.myfirst.tech/pages/shipping-tax"}>
          Shipping & Tax
        </Link>
      </li>
      <li>
        <Link href={"https://store.myfirst.tech/pages/warranty"}>Warranty</Link>
      </li>
      <li>
        <Link href={"/certificate"}>Certificate</Link>
      </li>
      <li>
        <Link href={"/user-manual"}>User Manuals</Link>
      </li>
    </ul>
  );
};

export default SupportLinks;
