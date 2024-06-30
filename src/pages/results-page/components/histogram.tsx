import { useSelector } from "react-redux";
import styles from "../results-page.module.scss";
import { RootState } from "../../../store/store";
import { formatDate, formatWordCount } from "../../../utils";
import { DataCells, HistogramDataPoint } from "../../../types";
import Loader from "../../../components/loader";

export function Histogram(): JSX.Element {
  const histogramData = useSelector(
    (state: RootState) => state.histogram.histogramData
  );
  const loadingHistogram = useSelector(
    (state: RootState) => state.histogram.loading
  );

  const totalDocumentsData = histogramData.data.find(
    (item) => item.histogramType === "totalDocuments"
  );
  const riskFactorsData = histogramData.data.find(
    (item) => item.histogramType === "riskFactors"
  );

  const renderDataCells: React.FC<DataCells> = ({ data }) => {
    if (!data) return null;
    return (
      <>
        {data.data.map((item: HistogramDataPoint, index: number) => (
          <td key={index}>{item.value}</td>
        ))}
      </>
    );
  };

  const renderPeriodCells: React.FC<DataCells> = ({ data }) => {
    if (!data) return null;
    return (
      <>
        {data.data.map((item: HistogramDataPoint, index: number) => (
          <td key={index}>{formatDate(item.date)}</td>
        ))}
      </>
    );
  };
  return (
    <section className={styles["main_results"]}>
      <h2 className={styles["main_results-title"]}>Общая сводка</h2>
      <p className={styles["main_results-description"]}>
        Найдено:{" "}
        {totalDocumentsData
          ? formatWordCount(totalDocumentsData.data.length, "вариант")
          : ""}
      </p>
      <div className={styles["main_results-container"]}>
        <div className={styles["main_results-container-arrow-left"]}>
          <img src="public/img/main_arrow-left.svg" alt="swipe left" />
        </div>
        <div className={styles["main_results-container-table"]}>
          <table>
            {loadingHistogram ? (
              <Loader />
            ) : (
              <tbody>
                <tr>
                  <th className={styles["main_results-container-table-title"]}>
                    Период
                  </th>
                  {totalDocumentsData &&
                    renderPeriodCells({ data: totalDocumentsData })}
                </tr>
                <tr>
                  <th className={styles["main_results-container-table-title"]}>
                    Всего
                  </th>
                  {totalDocumentsData &&
                    renderDataCells({ data: totalDocumentsData })}
                </tr>
                <tr>
                  <th className={styles["main_results-container-table-title"]}>
                    Риски
                  </th>
                  {riskFactorsData &&
                    renderDataCells({ data: riskFactorsData })}
                </tr>
              </tbody>
            )}
          </table>
        </div>

        <div className={styles["main_results-container-mobile-table"]}>
          <table>
            <thead>
              <tr>
                <th
                  className={
                    styles["main_results-container-mobile-table-title"]
                  }
                >
                  Период
                </th>
                <th
                  className={
                    styles["main_results-container-mobile-table-title"]
                  }
                >
                  Всего
                </th>
                <th
                  className={
                    styles["main_results-container-mobile-table-title"]
                  }
                >
                  Риски
                </th>
              </tr>
            </thead>
            <tbody>
              {totalDocumentsData && (
                <tr>
                  <td>{formatDate(totalDocumentsData.data[0].date)}</td>
                  <td>{totalDocumentsData.data[0].value}</td>
                  <td>
                    {riskFactorsData ? riskFactorsData.data[0].value : "0"}
                  </td>
                </tr>
              )}
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

// const totalDocumentsData = histogramData.data.find(
//   (item) => item.histogramType === "totalDocuments"
// );
// const totalDocumentsData = histogramData.data.find(
//   (item) => item.histogramType === "totalDocuments"
// );
