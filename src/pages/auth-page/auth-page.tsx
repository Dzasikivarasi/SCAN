import styles from "./auth-page.module.scss";
import { AuthForm } from "./components/auth-form";

export function AuthPage(): JSX.Element {
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
