import { toast } from "react-toastify";
import { format } from "date-fns";
import { HistogramResponse } from "./types";
import {
  CONTROL_NUM_INN_ERROR,
  EMPTY_INN_ERROR,
  LENGTH_INN_ERROR,
  MAX_DOCUMENTS_NUMBER,
  PASSWORD_ERROR,
  RESULT_LENGTH_ERROR,
  STRUCTURE_INN_ERROR,
  WRONG_DATA_ERROR,
} from "./constants";

export const validateForm = (password: string): boolean => {
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  if (!hasLetter || !hasNumber) {
    toast.error(PASSWORD_ERROR);
    return false;
  }
  return true;
};

export const validateInn = (inn: string | number): string | null => {
  if (typeof inn === "number") {
    inn = inn.toString().trim();
  } else if (typeof inn === "string") {
    inn = inn.trim();
  } else {
    inn = "";
  }

  if (!inn.length) {
    return EMPTY_INN_ERROR;
  } else if (/[^0-9]/.test(inn)) {
    return STRUCTURE_INN_ERROR;
  } else if (inn.length !== 10) {
    return LENGTH_INN_ERROR;
  } else {
    const checkDigit = (inn: string, coefficients: number[]): number => {
      let n = 0;
      for (let i = 0; i < coefficients.length; i++) {
        n += coefficients[i] * parseInt(inn[i]);
      }
      return (n % 11) % 10;
    };

    const n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
    if (n10 === parseInt(inn[9])) {
      return null;
    } else {
      return CONTROL_NUM_INN_ERROR;
    }
  }
};

export const validateDate = (
  dateFrom: string,
  dateTo: string
): string | null => {
  const today = new Date().toISOString().split("T")[0];

  if (dateFrom > today || dateTo > today) {
    return WRONG_DATA_ERROR;
  }
  if (dateFrom && dateTo && dateFrom > dateTo) {
    return WRONG_DATA_ERROR;
  }
  return null;
};

export const validateResultsCount = (resultsCount: string): string | null => {
  resultsCount = resultsCount.trim();
  const resultsCountNumber = parseInt(resultsCount, 10);
  if (
    isNaN(resultsCountNumber) ||
    resultsCountNumber < 1 ||
    resultsCountNumber > MAX_DOCUMENTS_NUMBER
  ) {
    return RESULT_LENGTH_ERROR;
  }
  return null;
};

export const formatWordCount = (number: number, word: string) => {
  if (number === 1) {
    return `${number} ${word}`;
  } else if (number >= 2 && number <= 4) {
    return `${number} ${word}а`;
  } else {
    return `${number} ${word}ов`;
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, "dd.MM.yyyy");
};

export const sumValuesByType = (
  histogramData: HistogramResponse,
  type: string
) => {
  const item = histogramData.data.find((item) => item.histogramType === type);
  if (!item) {
    return 0;
  }
  const totalValue = item.data.reduce(
    (sum, currentItem) => sum + currentItem.value,
    0
  );
  return totalValue;
};
