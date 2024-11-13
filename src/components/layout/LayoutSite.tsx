"use client";
import React, { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import TopHeader from "./header/topHeader/TopHeader";

interface LayoutSiteProps {
  children: ReactNode;
}

const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  const handleOpenNav = () => {
    console.log("Nav opened");
  };

  return (
    <div className={scss.LayoutSite}>
      <TopHeader />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
