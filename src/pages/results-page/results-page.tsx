import { Articles } from "./components/articles";
import { Histogram } from "./components/histogram";
import styles from "./results-page.module.scss";

export function ResultPage(): JSX.Element {
  return (
    <main className={styles.main}>
      <section className={styles.main_banner}>
        <div className={styles["main_banner-title"]}>
          <h1>Ищем. Скоро будут результаты</h1>
          <p className={styles["main_banner-title-description"]}>
            Поиск может занять некоторое время, просим сохранять терпение.
          </p>
        </div>
        <img src="/SCAN/img/results_banner.svg" alt="banner" />
      </section>
      <Histogram />
      <Articles />
    </main>
  );
}
