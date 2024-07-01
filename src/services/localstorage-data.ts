const TOKEN_KEY = "authToken";
const TOKEN_EXPIRE_TIME_KEY = "tokenExpireTime";
const USER_NAME = "user";

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token ?? "";
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXPIRE_TIME_KEY);
};

export const getTokenExpireTime = (): string | null => {
  return localStorage.getItem(TOKEN_EXPIRE_TIME_KEY);
};

export const saveTokenExpireTime = (expireTime: string): void => {
  localStorage.setItem(TOKEN_EXPIRE_TIME_KEY, expireTime);
};

export const getUser = (): string => {
  return localStorage.getItem(USER_NAME) ?? "";
};

export const saveUser = (user: string): void => {
  localStorage.setItem(USER_NAME, user);
};

export const dropUser = (): void => {
  localStorage.removeItem(USER_NAME);
};
