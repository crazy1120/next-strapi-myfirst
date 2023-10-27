import Link from "next/link";
import { LinksProps } from ".";
import { useTranslation } from "next-i18next";
import { COMMON } from "@/utils/constants";

const SubscriptionLinks: React.FC<LinksProps> = ({ prefix }) => {
  const { t } = useTranslation(COMMON);

  return (
    <ul className={`${prefix}-submenu`}>
      <li>
        <Link href={"/"} locale={"en"}>
          English
        </Link>
      </li>
      <li>
        <Link href={"/"} locale={"zh"}>
          汉语
        </Link>
      </li>
    </ul>
  );
};

export default SubscriptionLinks;
