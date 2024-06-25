import { useEffect, useState } from "react";
import {
  PRIVILEGES_ON_PAGE,
  PRIVILEGES_ON_PAGE_MOBILE,
  MOBILE_DESCTOP_FOR_PRIVELEGES,
  PrivilegesItems,
} from "../../../constants";
import styles from "../main-page.module.scss";
import { ArrowButton } from "./arrow-button";

export function Privileges(): JSX.Element {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(PRIVILEGES_ON_PAGE);

  const totalItems = PrivilegesItems.length;

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < MOBILE_DESCTOP_FOR_PRIVELEGES) {
        setItemsPerPage(PRIVILEGES_ON_PAGE_MOBILE);
      } else {
        setItemsPerPage(PRIVILEGES_ON_PAGE);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  useEffect(() => {
    setStartIndex(0);
  }, [itemsPerPage]);

  const scrollToNext = () => {
    if (startIndex + itemsPerPage < totalItems) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const scrollToPrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  const visibleItems = PrivilegesItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const showLeftArrow = startIndex > 0;
  const showRightArrow = startIndex + itemsPerPage < totalItems;

  return (
    <section className={styles.main_privilege}>
      <h2 className={styles["main_privilege-title"]}>Почему именно мы</h2>
      <div className={styles["main_privilege-slider"]}>
        <ArrowButton
          className="main_privilege-slider-arrow-left"
          buttonClickHandler={scrollToPrev}
          disabled={!showLeftArrow}
        />

        <ul className={styles["main_privilege-slider-list"]}>
          {visibleItems.map((item) => (
            <li
              key={item.id}
              className={`${styles["main_privilege-slider-list-item"]} ${
                styles[item.backgroundImage]
              }`}
            >
              <p>{item.item}</p>
            </li>
          ))}
        </ul>

        <ArrowButton
          className="main_privilege-slider-arrow-right"
          buttonClickHandler={scrollToNext}
          disabled={!showRightArrow}
        />
      </div>
    </section>
  );
}
