import styles from "../main-page.module.scss";
import { Button } from "./button";

export function Banner(): JSX.Element {
  return (
    <section className={styles.main_banner}>
      <div className={styles["main_banner-left"]}>
        <h1 className={styles["main_banner-left-title"]}>
          сервис по поиску публикаций <br />
          о компании <br />
          по ИНН
        </h1>
        <p className={styles["main_banner-left-description"]}>
          Комплексный анализ публикаций, получение данных в формате PDF на
          электронную почту.
        </p>
        <Button
          className="main_banner-left-button"
          buttonText="Запросить данные"
        />
      </div>
      <img src="img/main_banner.svg" alt="баннер" />
    </section>
  );
}
