import { FormEvent, useEffect, useRef, useState } from "react";
import styles from "../auth-page.module.scss";
import { Button } from "./button";
import { LoginSource } from "./login-source";
import { SubmitStatus } from "../../../constants";
// import { toast } from "react-toastify";
import { validateForm } from "../../../utils";

export function AuthForm(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [buttonDisable, setButtonDisable] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(
    SubmitStatus.Null
  );
  const isSubmitting = submitStatus === SubmitStatus.Pending;

  // useEffect(() => {
  //   if (authStatus === AuthorizationStatus.Auth) {
  //     navigate(AppRoute.Main);
  //   }
  // }, [authStatus, navigate]);

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
    setSubmitStatus(SubmitStatus.Pending);
    if (!loginRef.current || !passwordRef.current) {
      return;
    }

    // const email = loginRef.current.value;
    const password = passwordRef.current.value;

    if (!validateForm(password)) {
      setSubmitStatus(SubmitStatus.Null);
      return;
    }

    // const authData: AuthData = {
    //   login: email,
    //   password: password,
    // };

    // dispatch(loginAction(authData))
    //   .then((response) => {
    //     if (response.meta.requestStatus === 'rejected') {
    //       toast.error(Errors.AUTH_MESSAGE);
    //       setSubmitStatus(SubmitStatus.Error);
    //     } else {
    //       setSubmitStatus(SubmitStatus.Fulfilled);
    //       navigate(AppRoute.Main);
    //     }
    //   })
    //   .catch(() => {
    //     toast.error(Errors.AUTH_MESSAGE);
    //     setSubmitStatus(SubmitStatus.Error);
    //   });
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
