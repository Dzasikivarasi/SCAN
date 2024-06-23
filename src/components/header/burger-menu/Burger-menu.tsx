import { useState } from "react";
import BurgerDropdown from "./burger-dropdown";
import BurgerIcon from "./burger-icon";

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
