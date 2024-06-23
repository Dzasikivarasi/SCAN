import { ReactNode } from "react";
import { Footer } from "./footer/footer";
import Header from "./header/header";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <div className="container">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}
