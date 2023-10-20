import Link from "next/link";
import { LinksProps } from ".";

const S3 = () => (
  <li>
    <Link href={"/myfirst-fone-s3"}>myFirst Fone S3</Link>
  </li>
);

const WatchPhoneLinks: React.FC<LinksProps> = ({ prefix }) => {
  return (
    <ul className={`${prefix}-submenu`}>
      {prefix === "navbar" && <S3 />}
      <li>
        <Link href={"/myfirst-fone-r1s"}>myFirst Fone R1s</Link>
      </li>
      <li>
        <Link href={"/myfirst-fone-r1"}>myFirst Fone R1</Link>
      </li>
      {prefix === "footer" && <S3 />}
      {prefix === "navbar" && (
        <li>
          <Link href={"/myfirst-fone-s2"}>myFirst Fone S2</Link>
        </li>
      )}
      <li>
        <Link href={"/myfirst-fone-d3s"}>myFirst Fone D3s</Link>
      </li>
    </ul>
  );
};

export default WatchPhoneLinks;
