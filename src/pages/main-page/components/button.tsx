import styles from "../main-page.module.scss";

type ButtonProps = {
  className: string;
  classActive?: boolean;
  buttonText: string;
  buttonClickHandler?: () => void;
};

export function Button({
  className,
  classActive = false,
  buttonText,
  buttonClickHandler,
}: ButtonProps): JSX.Element {
  const onButtonClick = () => {
    if (buttonClickHandler) {
      buttonClickHandler();
    }
  };

  return (
    <button
      className={`${styles[className]} ${classActive ? styles.active : ""}`}
      onClick={onButtonClick}
    >
      {buttonText}
    </button>
  );
}
