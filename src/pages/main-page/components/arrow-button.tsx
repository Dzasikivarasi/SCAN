import styles from "../main-page.module.scss";

type ArrowButtonProps = {
  className: string;
  buttonClickHandler: () => void;
  disabled: boolean;
};

export function ArrowButton({
  className,
  buttonClickHandler,
  disabled,
}: ArrowButtonProps): JSX.Element {
  const onButtonClick = () => {
    buttonClickHandler();
  };

  return (
    <button
      className={styles[className]}
      onClick={onButtonClick}
      disabled={disabled}
    ></button>
  );
}
