import { Link, useNavigate } from "react-router-dom";
import { AppRoute, MenuItems } from "../../constants";

type NavigationProps = {
  classList: string;
  classItem: string;
  menuCloseHandler?: () => void;
};

export default function Navigation({
  classList,
  classItem,
  menuCloseHandler,
}: NavigationProps): JSX.Element {
  const navigate = useNavigate();
  const onButtonClick = (): void => {
    {
      menuCloseHandler && menuCloseHandler();
    }
    navigate(AppRoute.Main);
  };

  const menuItems = MenuItems.map((item) => (
    <li className={classItem} key={item.link} onClick={onButtonClick}>
      <Link to={item.link}>{item.item}</Link>
    </li>
  ));

  return (
    <nav>
      <ul className={classList}>{menuItems}</ul>
    </nav>
  );
}
