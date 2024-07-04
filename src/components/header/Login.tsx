import { Link, useNavigate } from "react-router-dom";
import { AppRoute } from "../../constants";

type LoginProps = {
  classLogin: string;
  classLink: string;
  classButton: string;
  menuCloseHandler?: () => void;
};

export default function Login({
  classLogin,
  classLink,
  classButton,
  menuCloseHandler,
}: LoginProps): JSX.Element {
  const navigate = useNavigate();

  const onButtonClick = (): void => {
    {
      menuCloseHandler && menuCloseHandler();
    }
    navigate(AppRoute.Auth);
  };

  return (
    <div className={classLogin}>
      <Link className={classLink} to="#">
        Зарегистрироваться
      </Link>
      <button className={classButton} onClick={onButtonClick}>
        Войти
      </button>
    </div>
  );
}
