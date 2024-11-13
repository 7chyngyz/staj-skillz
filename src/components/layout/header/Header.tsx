import React from "react";
import scss from "./Header.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import BurgerMenu from "@/components/ui/BurgerMenu/Menu";
import Link from "next/link";

const Header = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <Link href={"/"}>
            <div className={scss.header_logo}></div>
          </Link>
          <div className={scss.header_nav}>
            <ul>
              <li>
                <Link href="#courses">Courses</Link>
              </li>
              <li>
                <Link href="#workshops">Free Workshops</Link>
              </li>
              <li>
                <Link href="#blog">Blog</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={scss.header_right}>
            <FiShoppingCart />
          </div>
        </div>
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;
