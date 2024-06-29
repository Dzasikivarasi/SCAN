import styles from "../results-page.module.scss";

export function ArticleCard(): JSX.Element {
  return (
    <li className={styles["main_articles-list-item"]}>
      <div className={styles["main_articles-list-item-header"]}>
        <p className={styles["main_articles-list-item-header-date"]}>
          13.09.2021
        </p>
        <a className={styles["main_articles-list-item-header-source"]} href="#">
          Комсомольская правда KP.RU
        </a>
      </div>
      <p className={styles["main_articles-list-item-title"]}>
        Скиллфэктори - лучшая онлайн-школа для будущих айтишников
      </p>
      <div className={styles["main_articles-list-item-type"]}>
        Технические новости
      </div>
      <div className={styles["main_articles-list-item-banner"]}>
        <img
          className={styles["main_articles-list-item-banner"]}
          src="public/img/results_articles-image-1.jpg"
          alt="Article illustration"
        />
      </div>
      <p className={styles["main_articles-list-item-text"]}>
        SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь.
        С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов,
        самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере,
        Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других
        топовых компаниях. Принципы SkillFactory: акцент на практике, забота о
        студентах и ориентир на трудоустройство. 80% обучения — выполнение
        упражнений и реальных проектов. Каждого студента поддерживают менторы, 2
        саппорт-линии и комьюнити курса. А карьерный центр помогает составить
        резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
      </p>
      <div className={styles["main_articles-list-item-footer"]}>
        <button className={styles["main_articles-list-item-footer-button"]}>
          Читать в источнике
        </button>
        <p className={styles["main_articles-list-item-footer-words"]}>
          2 543 слова
        </p>
      </div>
    </li>
  );
}
