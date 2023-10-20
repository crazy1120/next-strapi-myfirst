import Link from "next/link";
import { useState, ReactNode } from "react";
import { toggleActiveClass } from "@/utils";

interface NavbarSubmenuProps {
  title: string;
  comp: ReactNode;
}

const NavbarSubmenu: React.FC<NavbarSubmenuProps> = ({ title, comp }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li
      onClick={() => toggleActiveClass(isActive, setIsActive)}
      className={isActive ? "active" : ""}>
      <Link href={"#"}>
        {title}
        <div className="flex items-center justify-center w-6 h-6">
          <i className="fa fa-caret-down" />
        </div>
      </Link>
      {comp}
    </li>
  );
};

export default NavbarSubmenu;
