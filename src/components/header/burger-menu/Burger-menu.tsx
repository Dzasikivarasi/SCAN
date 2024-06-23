import { useState } from "react";
import BurgerDropdown from "./Burger-dropdown";
import BurgerIcon from "./Burger-icon";

export default function BurgerMenu(): JSX.Element {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const menuOpenHandler = () => {
    setMenuIsOpen((prev) => !prev);
  };

  const menuCloseHandler = () => {
    setMenuIsOpen(false);
  };

  return (
    <div className="header_menu-burger">
      <BurgerIcon menuOpenHandler={menuOpenHandler} />
      <BurgerDropdown
        menuIsOpen={menuIsOpen}
        menuCloseHandler={menuCloseHandler}
      />
    </div>
  );
}
