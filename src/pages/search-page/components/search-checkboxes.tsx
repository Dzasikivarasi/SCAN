import { CheckboxItems } from "../../../constants";
import styles from "../search-page.module.scss";

export function SearchCheckBoxes(): JSX.Element {
  return (
    <ul className={styles["main_search-right-checkbox"]}>
      {CheckboxItems.map((item) => (
        <li className={styles["main_search-right-checkbox-item"]} key={item.id}>
          <label className={styles["main_search-right-checkbox-label"]}>
            <input
              type="checkbox"
              className={styles["main_search-right-checkbox-input"]}
            />
            <span className={styles["main_search-right-checkbox-option"]}>
              {item.item}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}
