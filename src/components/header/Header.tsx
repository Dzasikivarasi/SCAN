import BurgerMenu from "./burger-menu/Burger-menu";
import Limits from "./Limits";
import Login from "./Login";
import Navigation from "./Navigation";
import User from "./User";
import Logo from "./Logo";

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
