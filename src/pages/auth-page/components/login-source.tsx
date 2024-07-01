import { Link } from "react-router-dom";
import { LoginSourceItem } from "../../../constants";
import { LoginSourceItemType } from "../../../types";
import styles from "../auth-page.module.scss";

export function LoginSource(): JSX.Element {
  return (
    <div className={styles["main_banner-form-body-login-via"]}>
      <p>Войти через:</p>
      <ul className={styles["main_banner-form-body-login-via-list"]}>
        {LoginSourceItem.map((item: LoginSourceItemType) => (
          <li key={item.name}>
            <Link
              className={styles["main_banner-form-body-login-via-list-item"]}
              to={item.url}
            >
              <img src={item.image} alt={item.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
