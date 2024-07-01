import { useDispatch, useSelector } from "react-redux";
import styles from "../results-page.module.scss";
import { AppDispatch, RootState } from "../../../store/store";
import { useEffect, useState } from "react";
import Loader from "../../../components/loader";
import { ArticleCard } from "./article-card";
import { DocumentResponseItem } from "../../../types";
import { fetchDocuments } from "../../../store/documents/documents-process-api";
import { DOCUMENTS_PER_CLICK } from "../../../constants";

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
  const [allDocumentsLoaded, setAllDocumentsLoaded] = useState(false);

  const loadMoreDocuments = async () => {
    const nextBatch = ids.slice(
      renderedDocumentsCount,
      renderedDocumentsCount + DOCUMENTS_PER_CLICK
    );

    const action = await dispatch(fetchDocuments(nextBatch));
    if (fetchDocuments.fulfilled.match(action)) {
      const newDocuments = action.payload;
      setDisplayedDocuments((prevDocuments) => [
        ...prevDocuments,
        ...newDocuments,
      ]);
      setRenderedDocumentsCount(
        (prevRenderedDocumentsCount) =>
          prevRenderedDocumentsCount + DOCUMENTS_PER_CLICK
      );

      if (ids.length <= renderedDocumentsCount + newDocuments.length) {
        setAllDocumentsLoaded(true);
      }
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
        if (ids.length <= DOCUMENTS_PER_CLICK) {
          setAllDocumentsLoaded(true);
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
          {!allDocumentsLoaded && (
            <button
              className={styles["main_articles-load-button"]}
              disabled={loadingDocuments}
              onClick={loadMoreDocuments}
            >
              Показать больше
            </button>
          )}
        </>
      ) : (
        <p>Статьи не найдены</p>
      )}
    </section>
  );
}
