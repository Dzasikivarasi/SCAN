import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { getToken } from "./localstorage-data";
import { BACKEND_URL, REQUEST_TIMEOUT } from "../constants";

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  return api;
};
