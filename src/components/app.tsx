// import { MainPage } from "../pages/main-page/main-page";
import { ToastContainer } from "react-toastify";
import { AuthPage } from "../pages/auth-page/auth-page";
import Layout from "./layout";
import "react-toastify/dist/ReactToastify.css";

export function App(): JSX.Element {
  return (
    <>
      <ToastContainer />
      <Layout>
        {/* <MainPage /> */}
        <AuthPage />
      </Layout>
    </>
  );
}
