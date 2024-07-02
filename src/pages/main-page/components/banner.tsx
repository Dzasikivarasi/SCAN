import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import styles from "../main-page.module.scss";
import { Button } from "./button";
import { AppRoute, AuthorizationStatus } from "../../../constants";
import { useNavigate } from "react-router-dom";

export function Banner(): JSX.Element {
  const authStatus = useSelector((state: RootState) => state.user.authStatus);
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate(AppRoute.Search);
  };

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

        {authStatus === AuthorizationStatus.Auth && (
          <Button
            className="main_banner-left-button"
            buttonText="Запросить данные"
            buttonClickHandler={buttonClickHandler}
          />
        )}
      </div>
      <img src="/SCAN/img/main_banner.svg" alt="баннер" />
    </section>
  );
}
