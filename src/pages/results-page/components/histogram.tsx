import { useSelector } from "react-redux";
import styles from "../results-page.module.scss";
import { RootState } from "../../../store/store";
import { formatDate, formatWordCount, sumValuesByType } from "../../../utils";
import { DataCells, HistogramDataPoint } from "../../../types";
import Loader from "../../../components/loader";
import { useRef } from "react";
import { HistogramMobile } from "./histogram-mobile";
import { HISTOGRAM_SCROLL_STEP } from "../../../constants";

export function Histogram(): JSX.Element {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const histogramData = useSelector(
    (state: RootState) => state.histogram.histogramData
  );
  const loadingHistogram = useSelector(
    (state: RootState) => state.histogram.loading
  );
  const totalDocuments = sumValuesByType(histogramData, "totalDocuments");
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

  const handleScrollLeft = () => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollLeft -= HISTOGRAM_SCROLL_STEP;
    }
  };

  const handleScrollRight = () => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollLeft += HISTOGRAM_SCROLL_STEP;
    }
  };

  return (
    <section className={styles["main_results"]}>
      <h2 className={styles["main_results-title"]}>Общая сводка</h2>
      <p className={styles["main_results-description"]}>
        Найдено{" "}
        {totalDocumentsData ? formatWordCount(totalDocuments, "вариант") : ""}
      </p>
      <div className={styles["main_results-container"]}>
        <div
          className={styles["main_results-container-arrow-left"]}
          onClick={handleScrollLeft}
        >
          <img src="/SCAN/img/main_arrow-left.svg" alt="swipe left" />
        </div>
        <div
          ref={tableContainerRef}
          className={styles["main_results-container-table"]}
        >
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

        <HistogramMobile
          totalDocumentsData={totalDocumentsData}
          riskFactorsData={riskFactorsData}
        />
        <div
          className={styles["main_results-container-arrow-right"]}
          onClick={handleScrollRight}
        >
          <img src="/SCAN/img/main_arrow-right.svg" alt="swipe right" />
        </div>
      </div>
    </section>
  );
}
