import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_URL, LIMITS_ENDPOINT, LOGIN_ENDPOINT } from "../../constants";
import { AuthData, AuthResponse, UserLimits } from "../../types";
import { getToken } from "../../services/localstorage-data";

export const loginAction = createAsyncThunk(
  "user/login",
  async (authData: AuthData) => {
    const response = await axios.post<AuthResponse>(
      `${BACKEND_URL}${LOGIN_ENDPOINT}`,
      authData,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.data;
  }
);

export const setLogoutTimer = (
  expireTime: string,
  logoutCallback: () => void
) => {
  const expireDate = new Date(expireTime).getTime();
  const currentDate = new Date().getTime();
  const timeout = expireDate - currentDate;

  setTimeout(logoutCallback, timeout);
};

export const getLimits = createAsyncThunk("user/limits", async () => {
  const token = getToken();
  if (!token) {
    return null;
  }
  try {
    const response = await axios.get<{ eventFiltersInfo: UserLimits }>(
      `${BACKEND_URL}${LIMITS_ENDPOINT}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.eventFiltersInfo;
  } catch (error) {
    console.error("Ошибка при запросе лимитов:", error);
    throw error;
  }
});
