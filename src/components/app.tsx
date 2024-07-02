import { MainPage } from "../pages/main-page/main-page";
import { ToastContainer } from "react-toastify";
import { AuthPage } from "../pages/auth-page/auth-page";
import Layout from "./layout";
import "react-toastify/dist/ReactToastify.css";
import { SearchPage } from "../pages/search-page/search-page";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  checkTokenValidity,
  setAuthStatus,
} from "../store/user/user-process-slice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "../constants";
import PrivateRoute from "./private-route";
import { ResultPage } from "../pages/results-page/results-page";
import { NotFound } from "../pages/not-found/not-found";

export function App(): JSX.Element {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const authStatus = checkTokenValidity(userState);
    dispatch(setAuthStatus(authStatus));
  }, []);

  return (
    <BrowserRouter basename="/SCAN/">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path={AppRoute.Main} element={<MainPage />} />
          <Route path={AppRoute.Auth} element={<AuthPage />} />
          <Route
            path={AppRoute.Search}
            element={
              <PrivateRoute>
                <SearchPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Results}
            element={
              <PrivateRoute>
                <ResultPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
