import React from "react";
import AboutInfo from "../components/AboutInfo";
import MyServices from "../components/MyServices";

const AboutPage = () => {
  return (
    <div>
      <div className="py-10 mx-5 md:mx-16">
        <h2 className="text-3xl sm:text-5xl text-center border-b-2 pb-3 text-info">
          <i className="fa-solid fa-user-tie mr-3"></i>About Me
        </h2>
      </div>
      <div
        className="grid grid-cols-1 md:grid-flow-col px-5 md:px-14 gap-8 text-white"
        data-aos="fade-right"
      >
        <AboutInfo />
      </div>
      <MyServices />
    </div>
  );
};

export default AboutPage;
