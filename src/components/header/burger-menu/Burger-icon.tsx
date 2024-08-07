type BurgerIconProps = {
  menuOpenHandler: () => void;
};

export default function BurgerIcon({
  menuOpenHandler,
}: BurgerIconProps): JSX.Element {
  const onClickHandler = (): void => {
    menuOpenHandler();
  };

  return (
    <svg
      onClick={onClickHandler}
      className="header_menu-burger-open"
      width="30"
      height="25"
      viewBox="0 0 30 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="5" fill="#029491" />
      <rect y="10" width="30" height="5" fill="#029491" />
      <rect y="20" width="30" height="5" fill="#029491" />
    </svg>
  );
}
