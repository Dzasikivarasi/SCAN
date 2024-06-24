import styles from "../main-page.module.scss";

type ButtonProps = {
  className: string;
  classActive?: string;
  buttonText: string;
};

export function Button({
  className,
  classActive = "",
  buttonText,
}: ButtonProps): JSX.Element {
  return (
    <button className={`${styles[className]} ${classActive}`}>
      {buttonText}
    </button>
  );
}
