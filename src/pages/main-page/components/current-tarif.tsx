import styles from "../main-page.module.scss";

export function CurrentTarif(): JSX.Element {
  return (
    <div className={styles["main_tarif-active"]}>
      <p>Текущий тариф</p>
    </div>
  );
}
