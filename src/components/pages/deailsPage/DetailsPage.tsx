"use client";

import React, { useEffect, useState } from "react";
import scss from "./DetailsPage.module.scss";
import { useParams } from "next/navigation";
import { useGetCoursesQuery } from "@/redux/api/data";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

const DetailsPage = () => {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const { data } = useGetCoursesQuery();
  const itemDet = data?.find((item) => item.id.toString() === id);

  function formatDate(dateString: string | undefined): string {
    if (!dateString) {
      return "Invalid date";
    }

    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  const [isLoadinger, setIsLoadinger] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadinger(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={scss.DetailsPage}>
      <Header />
      <div className="container">
        <div className={scss.content}>
          <div className={scss.content_head}>
            <div className={scss.line}></div>
            <h1>Course Details</h1>
          </div>
          <div className={scss.main_details}>
            <div className={scss.details_img}>
              <img src={itemDet?.image} alt="" />
            </div>

            <div className={scss.details_text}>
              <h1>{itemDet?.name}</h1>
              <p>
                <span>Author:</span>
                {itemDet?.author}
              </p>
              <p>
                <span>Description:</span>
                {itemDet?.description}
              </p>
              <p>
                <span>Price:</span>
                {itemDet?.price}
              </p>
              <p>
                <span>City:</span>
                {itemDet?.city}
              </p>
              <p>
                <span>Created Date:</span>
                {formatDate(itemDet?.created_date)}
              </p>
              <p>
                <span>Uptated Date:</span>
                {formatDate(itemDet?.updated_date)}
              </p>
            </div>
          </div>

          <div className={scss.main_descr}>
            <h3>Detailed Description:</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              porro consequatur doloribus dolorem quasi! Deleniti, harum velit?
              Dolore at aspernatur iste. Adipisci soluta non animi neque alias
              laudantium, hic esse eum temporibus dolore suscipit deleniti
              voluptatibus nam quia? Numquam architecto adipisci doloremque
              eaque nemo repellat at possimus ipsam. Natus nam excepturi optio,
              harum illo laboriosam officiis sit doloribus consequuntur
              consequatur voluptatum! Voluptates sit tempora et porro nostrum
              earum reiciendis maxime qui corrupti sapiente, similique
              veritatis. Natus velit labore officiis earum in recusandae, eius
              maxime ut blanditiis! A alias ex hic molestiae dolor,
              necessitatibus velit excepturi numquam eius nihil, delectus vel.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default DetailsPage;
