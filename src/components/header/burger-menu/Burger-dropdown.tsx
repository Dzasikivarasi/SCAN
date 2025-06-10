import { useSelector } from "react-redux";
import Login from "../Login";
import Navigation from "../Navigation";
import BurgerHeader from "./Burger-header";
import { RootState } from "../../../store/store";
import { AuthorizationStatus } from "../../../constants";

type BurgerDropdown = {
  menuIsOpen: boolean;
  menuCloseHandler: () => void;
};

export default function BurgerDropdown({
  menuIsOpen,
  menuCloseHandler,
}: BurgerDropdown): JSX.Element {
  const authStatus = useSelector((state: RootState) => state.user.authStatus);

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
        menuCloseHandler={menuCloseHandler}
      />
      {authStatus !== AuthorizationStatus.Auth && (
        <Login
          classLogin="header_menu-burger-dropdown-menu-login"
          classLink="header_menu-burger-dropdown-menu-login-signin"
          classButton="header_menu-burger-dropdown-menu-login-button"
          menuCloseHandler={menuCloseHandler}
        />
      )}
    </div>
  );
}
