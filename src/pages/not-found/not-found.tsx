import styles from "./not-found.module.scss";

export function NotFound(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Oй! Похоже такой страницы не существует</p>
      <a className={styles.homeLink} href="/">
        Вернуться на главную
      </a>
    </div>
  );
}
