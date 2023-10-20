import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import Head from "next/head";

import Footer from "./footer";
import Header from "./header";
import { actions } from "@/utils/store";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const dispatch = useDispatch();
  const { setType } = actions;

  // Determine initial device width
  useEffect(() => {
    window.innerWidth <= 640
      ? dispatch(setType("mobile"))
      : window.innerWidth <= 1024
      ? dispatch(setType("tablet"))
      : dispatch(setType("laptop"));
  }, []);

  // Set state for device width
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 640
        ? dispatch(setType("mobile"))
        : window.innerWidth <= 1024
        ? dispatch(setType("tablet"))
        : dispatch(setType("laptop"));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-white">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
