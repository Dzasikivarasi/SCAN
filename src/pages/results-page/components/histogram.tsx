import { useSelector } from "react-redux";
import styles from "../results-page.module.scss";
import { RootState } from "../../../store/store";
import { formatWordCount } from "../../../utils";
// import { format } from "date-fns";

export function Histogram(): JSX.Element {
  const histogramData = useSelector(
    (state: RootState) => state.histogram.histogramData
  );

  // const formatDate = (dateString: string) => {
  //   const date = new Date(dateString);
  //   return format(date, "dd.MM.yyyy");
  // };

  return (
    <section className={styles["main_results"]}>
      <h2 className={styles["main_results-title"]}>Общая сводка</h2>
      <p className={styles["main_results-description"]}>
        Найдено {formatWordCount(histogramData.length, "вариант")}
      </p>
      <div className={styles["main_results-container"]}>
        <div className={styles["main_results-container-arrow-left"]}>
          <img src="public/img/main_arrow-left.svg" alt="swipe left" />
        </div>
        <div className={styles["main_results-container-table"]}>
          <table>
            <tbody>
              <tr>
                <th className={styles["main_results-container-table-title"]}>
                  Период
                </th>
                <td> 56</td>
              </tr>
              <tr>
                <th className={styles["main_results-container-table-title"]}>
                  Всего
                </th>
                <td>5</td>
                <td>4</td>
                <td>6</td>
                <td>2</td>
                <td>0</td>
                <td>1</td>
                <td>8</td>
                <td>9</td>
                <td>9</td>
                <td>9</td>
              </tr>
              <tr>
                <th className={styles["main_results-container-table-title"]}>
                  Риски
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td>2</td>
                <td>7</td>
                <td>3</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles["main_results-container-mobile-table"]}>
          <table>
            <thead>
              <th
                className={styles["main_results-container-mobile-table-title"]}
              >
                Период
              </th>
              <th
                className={styles["main_results-container-mobile-table-title"]}
              >
                Всего
              </th>
              <th
                className={styles["main_results-container-mobile-table-title"]}
              >
                Риски
              </th>
            </thead>
            <tbody>
              <tr>
                <td>17.10.2021</td>
                <td>5</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles["main_results-container-arrow-right"]}>
          <img src="public/img/main_arrow-right.svg" alt="swipe right" />
        </div>
      </div>
    </section>
  );
}
