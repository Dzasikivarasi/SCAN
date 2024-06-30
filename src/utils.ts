import { toast } from "react-toastify";
import { format } from "date-fns";

export const validateForm = (password: string): boolean => {
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  if (!hasLetter || !hasNumber) {
    toast.error("Пароль должен содержать хотя бы одну букву и цифру.");
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
    return "ИНН пуст";
  } else if (/[^0-9]/.test(inn)) {
    return "ИНН может состоять только из цифр";
  } else if (inn.length !== 10) {
    return "ИНН может состоять только из 10 цифр";
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
      return "Ошибка контрольного числа";
    }
  }
};

export const validateDate = (
  dateFrom: string,
  dateTo: string
): string | null => {
  const today = new Date().toISOString().split("T")[0];

  if (dateFrom > today || dateTo > today) {
    return "Введите корректные данные";
  }
  if (dateFrom && dateTo && dateFrom > dateTo) {
    return "Введите корректные данные";
  }
  return null;
};

export const validateResultsCount = (resultsCount: string): string | null => {
  resultsCount = resultsCount.trim();
  const resultsCountNumber = parseInt(resultsCount, 10);
  if (
    isNaN(resultsCountNumber) ||
    resultsCountNumber < 1 ||
    resultsCountNumber > 1000
  ) {
    return "Количество от 1 до 1000";
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
