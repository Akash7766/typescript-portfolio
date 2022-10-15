import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-[#FFFFF] h-full flex justify-center items-center flex-col">
      <div className="w-full px-5 sm:px-0 sm:w-[600px] h-full flex justify-center flex-col">
        <h2 className="text-lg text-[#fff] mb-2">
          I am a Frontend Web Developer
        </h2>
        <h1
          className="text-info text-4xl sm:text-6xl font-bold mb-4"
          data-aos="fade-up"
        >
          Akash Rahman
        </h1>
        <p className="text-[#9E9E9E] mb-5">
          I am a professional Frontend Developer and familiar with MERN Stack
          development. I can made any kind of extreme level fancy web
          application for you.{" "}
          <span className="text-white font-bold text-lg">
            So what are you thinking right now.?{" "}
            <span className="animate-pulse">HIRE ME..</span>
          </span>
        </p>
        <div>
          <button className="btn btn-outline btn-info border-4 rounded-none mr-5 mb-5">
            <a href="./../../file/Minhazur__Rahman__Akash__Resume.pdf" download>
              Download Resume
            </a>
          </button>
          <Link to="/contact">
            <button className="btn btn-outline btn-info border-4 rounded-none animate-bounce hover:animate-none transition-all">
              Hire me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
