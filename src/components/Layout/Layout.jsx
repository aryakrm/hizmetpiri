import React from "react";
import Routers from "../../routers/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout() {
  return (
    <>
      <Header />

      <Routers />

      <Footer />
    </>
  );
}

export default Layout;
