import styles from "../main-page.module.scss";

type ButtonProps = {
  className: string;
  classActive?: string;
  buttonText: string;
  buttonClickHandler: () => void;
};

export function Button({
  className,
  classActive = "",
  buttonText,
  buttonClickHandler,
}: ButtonProps): JSX.Element {
  const onButtonClick = () => {
    buttonClickHandler();
  };

  return (
    <button
      className={`${styles[className]} ${classActive}`}
      onClick={onButtonClick}
    >
      {buttonText}
    </button>
  );
}
