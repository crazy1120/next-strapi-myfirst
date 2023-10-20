import * as Links from "../links";

interface FooterSubmenuProps {
  title: string;
  comp: React.ReactNode;
}

const FooterSubmenu: React.FC<FooterSubmenuProps> = ({ title, comp }) => {
  return (
    <li className="basis-1/2 sm:basis-1/4 mt-10">
      <h6 className={"font-bold leading-[19px] mb-4"}>{title}</h6>
      {comp}
    </li>
  );
};

const FooterMenu: React.FC = () => (
  <ul className="flex flex-wrap pt-[10px] pb-20 px-[30px] lg:px-0 lg:pt-10 border-b-[1px] border-white border-opacity-50">
    <FooterSubmenu title={"Audio"} comp={<Links.Audio prefix={"footer"} />} />
    <FooterSubmenu title={"Camera"} comp={<Links.Camera prefix={"footer"} />} />
    <FooterSubmenu
      title={"Drawing"}
      comp={<Links.Drawing prefix={"footer"} />}
    />
    <FooterSubmenu
      title={"WatchPhone"}
      comp={<Links.WatchPhone prefix={"footer"} />}
    />
    <FooterSubmenu
      title={"Stay Connected"}
      comp={<Links.StayConnected prefix={"footer"} />}
    />
    <FooterSubmenu
      title={"myFirst FreeSIM"}
      comp={<Links.MyFirstFreeSIM prefix={"footer"} />}
    />
    <FooterSubmenu
      title={"Support"}
      comp={<Links.Support prefix={"footer"} />}
    />
    <FooterSubmenu
      title={"Company"}
      comp={<Links.Company prefix={"footer"} />}
    />
  </ul>
);

export default FooterMenu;
