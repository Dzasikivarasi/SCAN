import { CurrentTarif } from "./current-tarif";
import styles from "../main-page.module.scss";
import { TarifType } from "../../../types";
import { Button } from "./button";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { AuthorizationStatus } from "../../../constants";

type TarifCardProps = {
  item: TarifType;
};

export function TarifCard({ item }: TarifCardProps): JSX.Element {
  const authStatus = useSelector((state: RootState) => state.user.authStatus);

  return (
    <li
      className={`${styles["main_tarif-list-item"]} ${styles[item.type]} ${
        authStatus === AuthorizationStatus.Auth && item.active
          ? styles.active
          : ""
      }`}
    >
      <div
        className={`${styles["main_tarif-list-item-title"]} ${
          styles[item.type]
        }`}
      >
        <p className={styles["main_tarif-list-item-title-type"]}>
          {item.title}
        </p>
        <p className={styles["main_tarif-list-item-title-description"]}>
          {item.description}
        </p>
      </div>
      <div className={styles["main_tarif-list-item-price"]}>
        <div className={styles["main_tarif-list-item-price-count"]}>
          <p className={styles["main_tarif-list-item-price-count-origin"]}>
            {item.price} ₽
          </p>
          <p className={styles["main_tarif-list-item-price-count-discount"]}>
            {item.discount} ₽
          </p>
        </div>
        <p className={styles["main_tarif-list-item-price-installment"]}>
          {item.installment
            ? `или ${item.installment} ₽/мес. при рассрочке на 24 мес.`
            : "Рассрочка не предусмотрена"}
        </p>
        {authStatus === AuthorizationStatus.Auth && item.active && (
          <CurrentTarif />
        )}
      </div>
      <div className={styles["main_tarif-list-item-points"]}>
        <p className={styles["main_tarif-list-item-points-title"]}>
          В тариф входит:
        </p>
        <ul className={styles["main_tarif-list-item-points-list"]}>
          {item.options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      </div>
      <Button
        className="main_tarif-list-item-button"
        classActive={item.active}
        buttonText="Подробнее"
      />
    </li>
  );
}
