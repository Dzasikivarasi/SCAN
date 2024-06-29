import styles from "../search-page.module.scss";

export function SearchCheckBoxes(): JSX.Element {
  return (
    <ul className={styles["main_search-right-checkbox"]}>
      <li className={styles["main_search-right-checkbox-item"]}>
        <label className={styles["main_search-right-checkbox-label"]}>
          <input
            type="checkbox"
            className={styles["main_search-right-checkbox-input"]}
          />
          <span className={styles["main_search-right-checkbox-option"]}>
            Признак максимальной полноты
          </span>
        </label>
      </li>
      <li className={styles["main_search-right-checkbox-item"]}>
        <label className={styles["main_search-right-checkbox-label"]}>
          <input
            type="checkbox"
            className={styles["main_search-right-checkbox-input"]}
          />
          <span className={styles["main_search-right-checkbox-option"]}>
            Упоминания в бизнес-контексте
          </span>
        </label>
      </li>
      <li className={styles["main_search-right-checkbox-item"]}>
        <label className={styles["main_search-right-checkbox-label"]}>
          <input
            type="checkbox"
            className={styles["main_search-right-checkbox-input"]}
          />
          <span className={styles["main_search-right-checkbox-option"]}>
            Главная роль в публикации
          </span>
        </label>
      </li>
      <li className={styles["main_search-right-checkbox-item"]}>
        <label className={styles["main_search-right-checkbox-label"]}>
          <input
            type="checkbox"
            className={styles["main_search-right-checkbox-input"]}
          />
          <span className={styles["main_search-right-checkbox-option"]}>
            Публикации только с риск-факторами
          </span>
        </label>
      </li>
      <li className={styles["main_search-right-checkbox-item"]}>
        <label className={styles["main_search-right-checkbox-label"]}>
          <input
            type="checkbox"
            className={styles["main_search-right-checkbox-input"]}
          />
          <span className={styles["main_search-right-checkbox-option"]}>
            Включать технические новости рынков
          </span>
        </label>
      </li>
      <li className={styles["main_search-right-checkbox-item"]}>
        <label className={styles["main_search-right-checkbox-label"]}>
          <input
            type="checkbox"
            className={styles["main_search-right-checkbox-input"]}
          />
          <span className={styles["main_search-right-checkbox-option"]}>
            Включать анонсы и календари
          </span>
        </label>
      </li>
      <li className={styles["main_search-right-checkbox-item"]}>
        <label className={styles["main_search-right-checkbox-label"]}>
          <input
            type="checkbox"
            className={styles["main_search-right-checkbox-input"]}
          />
          <span className={styles["main_search-right-checkbox-option"]}>
            Включать сводки новостей
          </span>
        </label>
      </li>
    </ul>
  );
}
