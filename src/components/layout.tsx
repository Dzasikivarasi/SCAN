import { Outlet } from "react-router-dom";
import { Footer } from "./footer/footer";
import Header from "./header/header";

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
