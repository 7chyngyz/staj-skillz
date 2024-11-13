import React, { FC } from "react";
import scss from "./TopHeader.module.scss";

const TopHeader: FC = () => {
  return (
    <section className={scss.TopHeader}>
      <div className="container">
        <div className={scss.content}>
          <span>One week-50% off all courses with code 50OFF at checkout</span>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
