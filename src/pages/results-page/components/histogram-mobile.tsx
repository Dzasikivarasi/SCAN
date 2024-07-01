import styles from "../results-page.module.scss";
import { formatDate } from "../../../utils";
import { HistogramTypeData } from "../../../types";
import Loader from "../../../components/loader";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

type HistogramMobileProps = {
  totalDocumentsData: HistogramTypeData | undefined;
  riskFactorsData: HistogramTypeData | undefined;
};

export function HistogramMobile({
  totalDocumentsData,
  riskFactorsData,
}: HistogramMobileProps): JSX.Element {
  const loadingHistogram = useSelector(
    (state: RootState) => state.histogram.loading
  );
  return (
    <div className={styles["main_results-container-mobile-table"]}>
      <table>
        {loadingHistogram ? (
          <Loader />
        ) : (
          <>
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
          </>
        )}
      </table>
    </div>
  );
}
