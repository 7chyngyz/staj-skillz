import React, { FC } from "react";
import scss from "./Section1.module.scss";

const Sections1: FC = () => {
  return (
    <section className={scss.Section1}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <div className={scss.title}>
              <p>FEATURED COURSE</p>
              <div className={scss.line}></div>
            </div>
            <h1>
              Run your own online <br /> learning platform
            </h1>
            <span>
              A deep-dive on the Instagram algorythm, hashtags, content <br />
              strategy, and branding.
            </span>
            <p>Kathryn Murphy</p>
            <button>LEARN MORE</button>
          </div>
          <div className={scss.right}></div>
        </div>
      </div>
    </section>
  );
};

export default Sections1;
