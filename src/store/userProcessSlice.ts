import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {
  AuthorizationStatus,
  BACKEND_URL,
  LIMITS_ENDPOINT,
  LOAD_ERROR,
  LOGIN_ENDPOINT,
} from "../constants";
import { AuthData, AuthResponse, UserLimits } from "../types";
import {
  saveToken,
  dropToken,
  getToken,
  getTokenExpireTime,
  saveTokenExpireTime,
} from "../services/token";
import { toast } from "react-toastify";

interface UserInitialStateType {
  user: string;
  accessToken: string | null;
  tokenExpireTime: string | null;
  authStatus: AuthorizationStatus;
  eventFiltersInfo: UserLimits | null;
  loadingLimits: boolean;
}

const initialState: UserInitialStateType = {
  user: "",
  accessToken: getToken(),
  tokenExpireTime: getTokenExpireTime(),
  authStatus: AuthorizationStatus.Unknown,
  eventFiltersInfo: null,
  loadingLimits: false,
};

const checkTokenValidity = (
  state: UserInitialStateType
): AuthorizationStatus => {
  const token = getToken();
  const tokenExpireTime = new Date(state.tokenExpireTime || 0).getTime();
  const currentTime = new Date().getTime();

  if (!token || tokenExpireTime < currentTime) {
    dropToken();
    console.log("токен сброшен");
    return AuthorizationStatus.NoAuth;
  }
  console.log("токен актуален");
  return AuthorizationStatus.Auth;
};

const loginAction = createAsyncThunk(
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

const setLogoutTimer = (expireTime: string, logoutCallback: () => void) => {
  const expireDate = new Date(expireTime).getTime();
  const currentDate = new Date().getTime();
  const timeout = expireDate - currentDate;

  setTimeout(logoutCallback, timeout);
};

const getLimits = createAsyncThunk("user/limits", async () => {
  const token = getToken();
  if (!token) {
    console.log("Нет авторизации, нет лимитов");
    return null;
  }
  try {
    const response = await axios.get<UserLimits>(
      `${BACKEND_URL}${LIMITS_ENDPOINT}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка при запросе лимитов:", error);
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = "";
      state.authStatus = AuthorizationStatus.NoAuth;
      state.accessToken = null;
      state.tokenExpireTime = null;
      dropToken();
    },
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    setAuthStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.authStatus = AuthorizationStatus.Submitting;
      })
      .addCase(
        loginAction.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.authStatus = AuthorizationStatus.Auth;
          state.accessToken = action.payload.accessToken;
          state.tokenExpireTime = action.payload.expire;
          saveToken(action.payload.accessToken);
          saveTokenExpireTime(action.payload.expire);
          setLogoutTimer(action.payload.expire, () => {
            state.user = "";
            state.authStatus = AuthorizationStatus.NoAuth;
            state.accessToken = null;
            state.tokenExpireTime = null;
            dropToken();
          });
        }
      )
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(getLimits.pending, (state) => {
        state.loadingLimits = true;
      })
      .addCase(getLimits.fulfilled, (state, action) => {
        state.loadingLimits = false;
        if (action.payload) {
          state.eventFiltersInfo = {
            usedCompanyCount: action.payload.usedCompanyCount,
            companyLimit: action.payload.companyLimit,
          };
        }
      })
      .addCase(getLimits.rejected, (state) => {
        state.loadingLimits = false;
        toast(LOAD_ERROR);
      });
  },
});

export const { logout, setUser, setAuthStatus } = userSlice.actions;
export default userSlice.reducer;
export { checkTokenValidity, getLimits, loginAction };
