import { useSelector } from "react-redux";
import styles from "../main-page.module.scss";
import { RootState } from "../../../store/store";
import { AuthorizationStatus } from "../../../constants";

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
  const authStatus = useSelector((state: RootState) => state.user.authStatus);
  const onButtonClick = () => {
    if (buttonClickHandler) {
      buttonClickHandler();
    }
  };

  return (
    <button
      className={`${styles[className]} ${
        authStatus === AuthorizationStatus.Auth && classActive
          ? styles.active
          : ""
      }`}
      onClick={onButtonClick}
    >
      {buttonText}
    </button>
  );
}
