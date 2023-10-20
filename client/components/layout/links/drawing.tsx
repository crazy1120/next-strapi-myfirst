import Link from "next/link";
import { LinksProps } from ".";

const BookBoard = () => (
  <>
    <li>
      <Link href={"/myfirst-sketch-book"}>myFirst Sketch Book</Link>
    </li>
    <li>
      <Link href={"/myfirst-sketch-board"}>myFirst Sketch Board</Link>
    </li>
  </>
);

const DrawingLinks: React.FC<LinksProps> = ({ prefix }) => {
  return (
    <ul className={`${prefix}-submenu`}>
      <li>
        <Link href={"/myfirst-3dpen-make"}>myFirst 3dPen Make</Link>
      </li>
      {prefix === "footer" && <BookBoard />}
      <li>
        <Link href={"/myfirst-sketch-pro-neo"}>myFirst Sketch Pro Neo</Link>
      </li>
      <li>
        <Link href={"/myfirst-sketch-pro"}>myFirst Sketch Pro</Link>
      </li>
      {prefix === "navbar" && (
        <li>
          <Link href={"/myfirst-sketch-3"}>myFirst Sketch 3</Link>
        </li>
      )}
      <li>
        <Link href={"/myfirst-sketch-ii"}>myFirst Sketch II</Link>
      </li>
      {prefix === "navbar" && <BookBoard />}
    </ul>
  );
};

export default DrawingLinks;
