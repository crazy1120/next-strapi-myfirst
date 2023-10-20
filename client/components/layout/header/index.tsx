import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Navbar from "./navbar";
import { default as Logo } from "./logo.svg";

interface MobileButtonProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// logo part
const LogoPart = () => (
  <div className="flex lg:flex-1 items-center">
    <Link href="/">
      <span className="sr-only">Site Logo</span>
      <Image src={Logo} alt="logo" className="lg:w-[81px]" />
    </Link>
  </div>
);

// mobile responsive control button
const MobileButton: React.FC<MobileButtonProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <button
      id="mobileMenuButton"
      className={`relative lg:hidden cursor-pointer w-8 h-8 px-1 py-1.5 my-auto transition-all 0.5s ${
        mobileMenuOpen ? "active" : ""
      }`}
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white relative">
      <nav className="flex justify-between items-stretch h-[81px] lg:h-[100px] px-4 lg:px-0 lg:max-w-[1140px] lg:mx-auto">
        <LogoPart />
        <Navbar open={mobileMenuOpen} />
        <MobileButton
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </nav>
    </header>
  );
};

export default Header;
