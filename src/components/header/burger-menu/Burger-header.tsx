type BurgerHeaderProps = {
  menuCloseHandler: () => void;
};

export default function BurgerHeader({
  menuCloseHandler,
}: BurgerHeaderProps): JSX.Element {
  const onClickHandler = () => {
    menuCloseHandler();
  };

  return (
    <div className="header_menu-burger-dropdown-top">
      <img
        className="header_menu-burger-dropdown-logo"
        src="public/img/header-logo-white.svg"
        alt="логотип"
      />
      <svg
        onClick={onClickHandler}
        className="header_menu-burger-dropdown-close"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3.53613"
          width="30"
          height="5"
          transform="rotate(45 3.53613 0)"
          fill="white"
        />
        <rect
          x="24.7485"
          y="3.53564"
          width="30"
          height="5"
          transform="rotate(135 24.7485 3.53564)"
          fill="white"
        />
      </svg>
    </div>
  );
}
