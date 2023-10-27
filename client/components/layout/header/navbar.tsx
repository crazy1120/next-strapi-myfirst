import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";

import NavbarSubmenu from "./navbar-submenu";
import * as Links from "../links";
import { COMMON } from "@/utils/constants";

const Navbar = ({ open }: { open: boolean }) => {
  const { type }: { type: string } = useSelector(
    (state: { device: { type: string } }) => state.device
  );
  const { t } = useTranslation(COMMON);

  return (
    <ul
      id="commonNavbar"
      className={`flex items-stretch text-base text-gray-100 leading-5 left-0 z-50 gap-x-10 ${
        type !== "laptop"
          ? `${
              open ? "active" : "hidden"
            } absolute flex-col top-[80px] pt-5 w-full bg-white mobile-navbar`
          : "relative flex-row laptop-navbar"
      }`}>
      <NavbarSubmenu
        title={t("audio")}
        comp={<Links.Audio prefix={"navbar"} />}
      />
      <NavbarSubmenu title="Camera" comp={<Links.Camera prefix={"navbar"} />} />
      <NavbarSubmenu
        title="Drawing"
        comp={<Links.Drawing prefix={"navbar"} />}
      />
      <NavbarSubmenu
        title="WatchPhone"
        comp={<Links.WatchPhone prefix={"navbar"} />}
      />
      <NavbarSubmenu
        title="Subscription"
        comp={<Links.Subscription prefix={"navbar"} />}
      />
      <li>
        <Link href={"/circle"}>Circle</Link>
      </li>
      {/* Language set dropdown */}
      <NavbarSubmenu
        title={t("change_locale")}
        comp={<Links.Language prefix={"navbar"} />}
      />

      <li className={`${type !== "laptop" && "p-5"}`}>
        <Link
          href={"https://store.myfirst.tech"}
          target="_blank"
          className={`bg-purple text-white flex justify-center hover:bg-green px-5 rounded-[20px] ${
            type !== "laptop" ? "py-2.5 w-full" : "py-1.5"
          }`}>
          Store
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
