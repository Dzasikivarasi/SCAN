import { Banner } from "./components/banner";
import { Privileges } from "./components/privileges";
import { Tarifs } from "./components/tarifs";
import styles from "./main-page.module.scss";

export function MainPage(): JSX.Element {
  return (
    <main className={styles.main}>
      <Banner />
      <Privileges />
      <Tarifs />
    </main>
  );
}
