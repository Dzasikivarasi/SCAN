import BurgerMenu from "./burger-menu/burger-menu";
import Limits from "./limits";
import Login from "./login";
import Navigation from "./navigation";
import Logo from "../logo";
import User from "./user";

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <Logo className="header_logo" url="public/img/header-logo-color.svg" />
      <div className="header_menu">
        <Navigation
          classList="header_menu-navigation-list"
          classItem="header_menu-navigation-list-item"
        />
        <Limits />
        <Login
          classLogin="header_menu-login"
          classLink="header_menu-login-signin"
          classButton="header_menu-login-button"
        />
        <User />
        <BurgerMenu />
      </div>
    </header>
  );
}
