import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthorizationStatus, LOAD_ERROR } from "../../constants";
import { AuthResponse, UserLimits } from "../../types";
import {
  saveToken,
  dropToken,
  getToken,
  getTokenExpireTime,
  saveTokenExpireTime,
  getUser,
  dropUser,
  saveUser,
} from "../../services/localstorage-data";
import { toast } from "react-toastify";
import { getLimits, loginAction, setLogoutTimer } from "./user-process-api";

interface UserInitialStateType {
  user: string;
  accessToken: string | null;
  tokenExpireTime: string | null;
  authStatus: AuthorizationStatus;
  eventFiltersInfo: UserLimits | null;
  loadingLimits: boolean;
}

const initialState: UserInitialStateType = {
  user: getUser(),
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
    dropUser();
    return AuthorizationStatus.NoAuth;
  }
  return AuthorizationStatus.Auth;
};

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
      dropUser();
    },
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      saveUser(action.payload);
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
            dropUser();
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
