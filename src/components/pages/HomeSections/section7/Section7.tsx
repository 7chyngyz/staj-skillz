"use client";
import React from "react";
import scss from "./Section7.module.scss";
import { useGetArticlesQuery } from "@/redux/api/data";

const Section7 = () => {
  const { data } = useGetArticlesQuery();
  return (
    <section id="articles" className={scss.Section7}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.content_text}>
            <h1>Recent Articles</h1>
            <div className={scss.content_underline}></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse <br /> varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra <br /> ornare, eros dolor interdum nulla,
              ut commodo diam libero vitae erat.
            </p>
            <button>VIEW ALL ARTICLES</button>
          </div>
          <div className={scss.main_card}>
            {data?.map((item) => (
              <div className={scss.card_item} key={item.id}>
                <img src={item.image} alt="" />
                <div className={scss.card_text}>
                  <p>{item.created_date}</p>
                  <h3>{item.name}</h3>
                  <span>{item.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
