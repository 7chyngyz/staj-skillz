"use client";
import React from "react";
import scss from "./Section8.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

interface IFormTelegram {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN;
const CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;

const Section8 = () => {
  const { register, handleSubmit } = useForm<IFormTelegram>({
    mode: "onChange",
  });

  const messageModel = (data: IFormTelegram) => {
    let messageTG = `email: <b>${data.email}</b>\n`;
    return messageTG;
  };

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage`,
        {
          chat_id: CHAT_ID,
          parse_mode: "html",
          text: messageModel(data),
        }
      );
      console.log("Message sent:", response.data);
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
    }
  };

  return (
    <section className={scss.Section8}>
      <div className="container">
        <div className={scss.content}>
          <h1>You have the power to define your future.</h1>
          <form className={scss.input_block} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="EMAIL ADDRESS"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Section8;
