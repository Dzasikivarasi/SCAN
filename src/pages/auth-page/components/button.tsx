import styles from "../auth-page.module.scss";

type ButtonProps = {
  className: string;
  classActive?: string;
  buttonText: string;
  disabled?: boolean;
};

export function Button({
  className,
  classActive = "",
  buttonText,
  disabled = false,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`${styles[className]} ${classActive}`}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
}
