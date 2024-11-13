import { FC } from "react";
import Sections3 from "./HomeSections/section3/Section3";
import Section5 from "./HomeSections/section5/Section5";
import Section6 from "./HomeSections/section6/Section6";
import Section2 from "./HomeSections/section2/Section2";
import Sections1 from "./HomeSections/section1/Section1";
import Section4 from "./HomeSections/section4/Section4";
import Section7 from "./HomeSections/section7/Section7";
import Section8 from "./HomeSections/section8/Section8";

const HomePage: FC = () => {
  return (
    <>
      <Sections1 />
      <Section2 />
      <Sections3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </>
  );
};

export default HomePage;
