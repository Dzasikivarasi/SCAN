import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import Header from "./header/Header";

export default function Layout(): JSX.Element {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
