import { FormEvent, useEffect, useRef, useState } from "react";
import styles from "../auth-page.module.scss";
import { Button } from "./button";
import { LoginSource } from "./login-source";
import { AUTH_ERROR, AppRoute, AuthorizationStatus } from "../../../constants";
import { toast } from "react-toastify";
import { validateForm } from "../../../utils";
import { AuthData } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { loginAction, setUser } from "../../../store/user/user-process-slice";
import { useNavigate } from "react-router-dom";

export function AuthForm(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [buttonDisable, setButtonDisable] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const authStatus = useSelector((state: RootState) => state.user.authStatus);
  const isSubmitting = authStatus === AuthorizationStatus.Submitting;
  const navigate = useNavigate();

  useEffect(() => {
    const checkButtonDisable = () => {
      if (loginRef.current && passwordRef.current) {
        setButtonDisable(
          loginRef.current.value === "" || passwordRef.current.value === ""
        );
      }
    };
    checkButtonDisable();
  }, []);

  const handleInput = () => {
    if (loginRef.current && passwordRef.current) {
      setButtonDisable(
        loginRef.current.value === "" || passwordRef.current.value === ""
      );
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!loginRef.current || !passwordRef.current) {
      return;
    }

    const login = loginRef.current.value;
    const password = passwordRef.current.value;

    if (!validateForm(password)) {
      return;
    }

    const authData: AuthData = {
      login: login,
      password: password,
    };

    dispatch(loginAction(authData))
      .unwrap()
      .then(() => {
        dispatch(setUser(login));
        navigate(AppRoute.Main);
      })
      .catch(() => {
        toast.error(AUTH_ERROR);
      });
  };

  return (
    <div className={styles["main_banner-form"]}>
      <div className={styles["main_banner-form-header"]}>
        <Button
          className="main_banner-form-header-login"
          classActive={styles.active}
          buttonText="Войти"
        />
        <Button
          className="main_banner-form-header-signin"
          buttonText="Зарегистрироваться"
        />
      </div>
      <form
        className={styles["main_banner-form-body"]}
        action="#"
        method="post"
        onSubmit={handleSubmit}
      >
        <label htmlFor="login">Логин или номер телефона:</label>
        <input
          ref={loginRef}
          onInput={handleInput}
          type="text"
          id="login"
          name="login"
          required
        />

        <label htmlFor="password">Пароль:</label>
        <input
          ref={passwordRef}
          onInput={handleInput}
          type="password"
          id="password"
          name="password"
          required
        />

        <Button
          className="main_banner-form-body-submit"
          buttonText="Войти"
          disabled={buttonDisable || isSubmitting}
        />

        <a href="#" className={styles["main_banner-form-body-forgot-password"]}>
          Восстановить пароль
        </a>
        <LoginSource />
      </form>
    </div>
  );
}
