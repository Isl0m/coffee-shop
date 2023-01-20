import { FC, PropsWithChildren } from "react";
import Header from "./Header";
import s from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={s.layout}>{children}</main>
    </>
  );
};

export default Layout;
