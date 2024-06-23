import Login from "../Login";
import Navigation from "../Navigation";
import BurgerHeader from "./Burger-header";

type BurgerDropdownType = {
  menuIsOpen: boolean;
  menuCloseHandler: () => void;
};

export default function BurgerDropdown({
  menuIsOpen,
  menuCloseHandler,
}: BurgerDropdownType): JSX.Element {
  return (
    <div
      className={`header_menu-burger-dropdown ${
        menuIsOpen ? "opened" : "hidden"
      }`}
    >
      <BurgerHeader menuCloseHandler={menuCloseHandler} />
      <Navigation
        classList="header_menu-burger-dropdown-menu"
        classItem="header_menu-burger-dropdown-menu-item"
      />
      <Login
        classLogin="header_menu-burger-dropdown-menu-login"
        classLink="header_menu-burger-dropdown-menu-login-signin"
        classButton="header_menu-burger-dropdown-menu-login-button"
      />
    </div>
  );
}
