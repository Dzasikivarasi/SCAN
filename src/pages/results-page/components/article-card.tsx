import { DocumentResponseItem } from "../../../types";
import { formatDate } from "../../../utils";
import styles from "../results-page.module.scss";
import DOMPurify from "dompurify";

export type ArticleCardProps = {
  document: DocumentResponseItem;
};

export function ArticleCard({ document }: ArticleCardProps): JSX.Element {
  const createMarkup = (html: string) => {
    const cleanHtml = DOMPurify.sanitize(html);
    return { __html: cleanHtml };
  };

  return (
    <li className={styles["main_articles-list-item"]}>
      <div className={styles["main_articles-list-item-header"]}>
        <p className={styles["main_articles-list-item-header-date"]}>
          {document.ok?.issueDate && formatDate(document.ok?.issueDate)}
        </p>
        <a
          className={styles["main_articles-list-item-header-source"]}
          href={document.ok?.url}
          target="_blank"
        >
          {document.ok?.source.name}
        </a>
      </div>
      <p className={styles["main_articles-list-item-title"]}>
        {document.ok?.title.text}
      </p>
      {(document.ok?.attributes.isTechNews ||
        document.ok?.attributes.isAnnouncement ||
        document.ok?.attributes.isDigest) && (
        <div className={styles["main_articles-list-item-type"]}>
          {document.ok?.attributes.isTechNews && "Технические новости"}
          {document.ok?.attributes.isAnnouncement && "Объявление"}
          {document.ok?.attributes.isDigest && "Дайджест"}
        </div>
      )}
      <div className={styles["main_articles-list-item-banner"]}>
        <img
          className={styles["main_articles-list-item-banner"]}
          src="public/img/results_articles-image-1.jpg"
          alt="Article illustration"
        />
      </div>
      <div
        className={styles["main_articles-list-item-text"]}
        dangerouslySetInnerHTML={createMarkup(
          document.ok?.content.markup || ""
        )}
      />
      <div className={styles["main_articles-list-item-footer"]}>
        <a
          className={styles["main_articles-list-item-footer-button"]}
          href={document.ok?.url}
          target="_blank"
        >
          Читать в источнике
        </a>
        <p className={styles["main_articles-list-item-footer-words"]}>
          {document.ok?.attributes.wordCount}
        </p>
      </div>
    </li>
  );
}
