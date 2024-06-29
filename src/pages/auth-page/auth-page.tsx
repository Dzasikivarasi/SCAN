import { useSelector } from "react-redux";
import styles from "./auth-page.module.scss";
import { AuthForm } from "./components/auth-form";
import { RootState } from "../../store/store";
import { AppRoute, AuthorizationStatus } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function AuthPage(): JSX.Element {
  const authStatus = useSelector((state: RootState) => state.user.authStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Search);
    }
  }, [authStatus, navigate]);

  return (
    <main className={styles.main}>
      <section className={styles.main_banner}>
        <h1 className={styles["main_banner-title"]}>
          Для оформления подписки на тариф, необходимо авторизоваться
        </h1>
        <AuthForm />
      </section>
    </main>
  );
}
