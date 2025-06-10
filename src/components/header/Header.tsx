import BurgerMenu from "./burger-menu/Burger-menu";
import Limits from "./Limits";
import Login from "./Login";
import Navigation from "./Navigation";
import Logo from "../logo";
import User from "./User";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { AuthorizationStatus } from "../../constants";

export default function Header(): JSX.Element {
  const authStatus = useSelector((state: RootState) => state.user.authStatus);

  return (
    <header className="header">
      <Logo className="header_logo" url="/SCAN/img/header-logo-color.svg" />
      <div className="header_menu">
        <Navigation
          classList="header_menu-navigation-list"
          classItem="header_menu-navigation-list-item"
        />
        {authStatus === AuthorizationStatus.Auth && <Limits />}
        {authStatus === AuthorizationStatus.NoAuth && (
          <Login
            classLogin="header_menu-login"
            classLink="header_menu-login-signin"
            classButton="header_menu-login-button"
          />
        )}
        {authStatus === AuthorizationStatus.Auth && <User />}
        <BurgerMenu />
      </div>
    </header>
  );
}
