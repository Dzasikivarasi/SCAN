import { useDispatch, useSelector } from "react-redux";
import styles from "../results-page.module.scss";
import { AppDispatch, RootState } from "../../../store/store";
import { fetchDocuments } from "../../../store/documentsProcessSlice";
import { useEffect, useState } from "react";
import Loader from "../../../components/loader";
import { ArticleCard } from "./article-card";
import { DocumentResponseItem } from "../../../types";

const DOCUMENTS_PER_CLICK = 2;

export function Articles(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const ids = useSelector((state: RootState) => state.objectsIDs.ids);
  const loadingDocuments = useSelector(
    (state: RootState) => state.documents.loading
  );
  const [displayedDocuments, setDisplayedDocuments] = useState<
    DocumentResponseItem[]
  >([]);
  const [renderedDocumentsCount, setRenderedDocumentsCount] =
    useState(DOCUMENTS_PER_CLICK);

  const loadMoreDocuments = async () => {
    const nextBatch = ids.slice(
      renderedDocumentsCount,
      renderedDocumentsCount + DOCUMENTS_PER_CLICK
    );

    const action = await dispatch(fetchDocuments(nextBatch));
    if (fetchDocuments.fulfilled.match(action)) {
      setDisplayedDocuments((prevDocuments) => [
        ...prevDocuments,
        ...action.payload,
      ]);
      setRenderedDocumentsCount(
        (prevrenderedDocumentsCount) =>
          prevrenderedDocumentsCount + DOCUMENTS_PER_CLICK
      );
    }
  };

  useEffect(() => {
    const initialLoad = async () => {
      if (ids.length > 0) {
        const initialBatch = ids.slice(0, DOCUMENTS_PER_CLICK);
        const action = await dispatch(fetchDocuments(initialBatch));
        if (fetchDocuments.fulfilled.match(action)) {
          setDisplayedDocuments(action.payload);
        }
      }
    };
    initialLoad();
  }, [ids, dispatch]);

  return (
    <section className={styles["main_articles"]}>
      <h2 className={styles["main_articles-title"]}>Список документов</h2>
      {loadingDocuments && displayedDocuments.length === 0 ? (
        <Loader />
      ) : displayedDocuments.length > 0 ? (
        <>
          <ul className={styles["main_articles-list"]}>
            {displayedDocuments.map((document) => (
              <ArticleCard key={document.ok?.id} document={document} />
            ))}
          </ul>
          <button
            className={styles["main_articles-load-button"]}
            disabled={loadingDocuments}
            onClick={loadMoreDocuments}
          >
            Показать больше
          </button>
        </>
      ) : (
        <p>Статьи не найдены</p>
      )}
    </section>
  );
}
