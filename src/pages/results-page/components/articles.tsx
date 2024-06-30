import { useDispatch, useSelector } from "react-redux";
import styles from "../results-page.module.scss";
import { AppDispatch, RootState } from "../../../store/store";
import { fetchDocuments } from "../../../store/documentsProcessSlice";
import { useEffect, useState } from "react";
import Loader from "../../../components/loader";
import { ArticleCard } from "./article-card";

const DOCUMENTS_PER_CLICK = 2;

export function Articles(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const ids = useSelector((state: RootState) => state.objectsIDs.ids);
  const documents = useSelector(
    (state: RootState) => state.documents.documents
  );
  const loadingDocuments = useSelector(
    (state: RootState) => state.documents.loading
  );
  const [documentsDisplayed, setDocumentsDisplayed] =
    useState(DOCUMENTS_PER_CLICK);

  const loadMoreDocuments = () => {
    const nextBatch = ids.slice(
      documentsDisplayed,
      documentsDisplayed + DOCUMENTS_PER_CLICK
    );
    dispatch(fetchDocuments(nextBatch));
    setDocumentsDisplayed(
      (prevDocumentsDisplayed) => prevDocumentsDisplayed + DOCUMENTS_PER_CLICK
    );
  };

  useEffect(() => {
    if (ids.length > 0) {
      dispatch(fetchDocuments(ids.slice(0, documentsDisplayed)));
    }
  }, [ids, documentsDisplayed, dispatch]);

  return (
    <section className={styles["main_articles"]}>
      <h2 className={styles["main_articles-title"]}>Список документов</h2>
      {loadingDocuments ? (
        <Loader />
      ) : documents ? (
        <>
          <ul className={styles["main_articles-list"]}>
            {documents.map((document) => (
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
