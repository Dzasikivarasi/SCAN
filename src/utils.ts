import { toast } from "react-toastify";

export const validateForm = (password: string): boolean => {
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  if (!hasLetter || !hasNumber) {
    toast.error("Пароль должен содержать хотя бы одну букву и цифру.");
    return false;
  }
  return true;
};
