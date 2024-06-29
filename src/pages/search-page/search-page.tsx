import { SearchForm } from "./components/search-form";
import styles from "./search-page.module.scss";

export function SearchPage(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1 className={styles.main_title}>
        Найдите необходимые данные в пару кликов
      </h1>
      <p className={styles.main_description}>
        Задайте параметры поиска.
        <br />
        Чем больше заполните, тем точнее поиск
      </p>

      <SearchForm />
    </main>
  );
}
