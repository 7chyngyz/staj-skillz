"use client";
import React from "react";
import scss from "./Section2.module.scss";
import { useGetCoursesQuery } from "@/redux/api/data";
import { useRouter } from "next/navigation";

const Section2 = () => {
  const router = useRouter();
  const { data } = useGetCoursesQuery();
  return (
    <section id="courses" className={scss.Section2}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.content_text}>
            <h1>Featured Courses</h1>
            <div className={scss.content_underline}></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse <br /> varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra <br /> ornare, eros dolor interdum nulla,
              ut commodo diam libero vitae erat.
            </p>
            <button>VIEW ALL COURSES</button>
          </div>
          <div className={scss.main_card}>
            {data?.map((item) => (
              <div className={scss.card_item} key={item.id}>
                <img src={item.image} alt="" />
                <div className={scss.card_text}>
                  <h3>{item.name}</h3>
                  <p>{item.author}</p>
                  <h5>$ {item.price} USD</h5>
                  <button onClick={() => router.push(`/details/${item.id}`)}>
                    LEARN MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
