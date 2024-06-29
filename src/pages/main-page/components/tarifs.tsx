import { TarifItems } from "../../../constants";
import styles from "../main-page.module.scss";
import { TarifCard } from "./tarif-card";

export function Tarifs(): JSX.Element {
  return (
    <section className={styles.main_tarif}>
      <h2 className={styles["main_tarif-title"]}>Наши тарифы</h2>
      <ul className={styles["main_tarif-list"]}>
        {TarifItems.map((item) => (
          <TarifCard item={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
}
