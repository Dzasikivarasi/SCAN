import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { logout } from "../../store/userProcessSlice";
import Loader from "../loader";

export default function User(): JSX.Element {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const loadingLimits = useSelector(
    (state: RootState) => state.user.loadingLimits
  );

  const onButtonClick = () => {
    dispatch(logout());
    logout();
  };

  return (
    <div className="header_menu-user">
      {loadingLimits ? (
        <Loader />
      ) : (
        <>
          <div className="header_menu-user-name">
            <p>{user}</p>
            <button
              onClick={onButtonClick}
              className="header_menu-user-name-button"
            >
              Выйти
            </button>
          </div>
          <img
            className="header_menu-user-foto"
            src="public/img/header-empty-user.png"
            alt="Фото пользователя"
            width="32"
            height="32"
          />
        </>
      )}
    </div>
  );
}
