import { Link } from "react-router-dom";
import { MenuItems } from "../../constants";

type NavigationProps = {
  classList: string;
  classItem: string;
};

export default function Navigation({
  classList,
  classItem,
}: NavigationProps): JSX.Element {
  const menuItems = MenuItems.map((item) => (
    <li className={classItem} key={item.link}>
      <Link to={item.link}>{item.item}</Link>
    </li>
  ));

  return (
    <nav>
      <ul className={classList}>{menuItems}</ul>
    </nav>
  );
}
