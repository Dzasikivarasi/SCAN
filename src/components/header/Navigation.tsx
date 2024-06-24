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
      <a href={`${item.link}`}>{item.item}</a>
    </li>
  ));

  return (
    <nav>
      <ul className={classList}>{menuItems}</ul>
    </nav>
  );
}
