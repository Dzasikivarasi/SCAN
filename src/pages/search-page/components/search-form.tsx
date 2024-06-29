import styles from "../search-page.module.scss";
import { useState } from "react";
import { SearchCheckBoxes } from "./search-checkboxes";
import {
  validateDate,
  validateInn,
  validateResultsCount,
} from "../../../utils";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistograms } from "../../../store/histogramProcessSlice";
import { AppDispatch, RootState } from "../../../store/store";
import { AppRoute, LOAD_ERROR } from "../../../constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function SearchForm(): JSX.Element {
  const [inputType, setInputType] = useState("text");
  const dispatch = useDispatch<AppDispatch>();
  const dataLoading = useSelector(
    (state: RootState) => state.histogram.loading
  );
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    inn: "",
    tonality: "any",
    results: "",
    dateFrom: "",
    dateTo: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("кнопка сработала");

    const { inn, results, dateFrom, dateTo } = formData;

    if (!validateInn(inn)) {
      return;
    }

    if (!validateResultsCount(results)) {
      return;
    }

    if (!validateDate(dateFrom, dateTo)) {
      return;
    }

    const searchData = {
      ...formData,
      results: parseInt(formData.results, 10),
    };

    console.log(searchData);
    dispatch(fetchHistograms(searchData))
      .then((response) => {
        if (response.meta.requestStatus === "rejected") {
          toast.error(LOAD_ERROR);
          return;
        } else {
          navigate(AppRoute.Results);
        }
      })
      .catch(() => {
        toast.error(LOAD_ERROR);
      });
  };

  return (
    <form className={styles.main_search} onSubmit={handleSubmit}>
      <div className={styles["main_search-form"]}>
        <label htmlFor="inn">
          ИНН компании<span>*</span>
        </label>
        <input
          type="text"
          id="inn"
          name="inn"
          placeholder="10 цифр"
          onChange={handleInputChange}
        />

        <div className={styles["main_search-form-dropdown"]}>
          <label htmlFor="tonality">
            Тональность<span>*</span>
          </label>
          <select
            className={styles["main_search-form-dropdown-list"]}
            id="tonality"
            name="tonality"
            onChange={handleInputChange}
          >
            <option value="any">Любая</option>
            <option value="positive">Позитивная</option>
            <option value="negative">Негативная</option>
          </select>
        </div>

        <label htmlFor="results">
          Количество документов в выдаче<span>*</span>
        </label>
        <input
          type="text"
          id="results"
          name="results"
          placeholder="От 1 до 1000"
          onChange={handleInputChange}
          required
        />

        <label htmlFor="date-from date-to">
          Диапазон поиска<span>*</span>
        </label>
        <div className={styles["main_search-date"]}>
          <input
            type={inputType}
            id="dateFrom"
            name="dateFrom"
            placeholder="Дата начала"
            className={styles["main_search-date-from"]}
            onChange={handleInputChange}
            onFocus={() => setInputType("date")}
            onBlur={() => setInputType("text")}
            required
          />
          <input
            type={inputType}
            id="dateTo"
            name="dateTo"
            placeholder="Дата конца"
            className={styles["main_search-date-to"]}
            onChange={handleInputChange}
            onFocus={() => setInputType("date")}
            onBlur={() => setInputType("text")}
            required
          />
        </div>
      </div>

      <div className={styles["main_search-right"]}>
        <SearchCheckBoxes />
        <div className={styles["main_search-right-submit"]}>
          <button type="submit" disabled={dataLoading}>
            Поиск
          </button>
          <p className={styles["main_search-right-submit-description"]}>
            * Обязательные к заполнению поля
          </p>
        </div>
      </div>
    </form>
  );
}
