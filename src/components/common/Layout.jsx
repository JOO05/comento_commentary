import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const mapPathToTitle = {
  "/": "자기소개 페이지",
  "/skill": "기술 기재 페이지",
  "/contact": "연락처 페이지",
};

const Layout = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    const title =
      location.pathname in mapPathToTitle
        ? mapPathToTitle[location.pathname]
        : "잘못 이동된 페이지";
    document.title = title;
  }, [location.pathname]);
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
export default Layout;
