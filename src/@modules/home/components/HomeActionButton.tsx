import React from "react";
import { Link } from "react-router-dom";

const HomeActionButton = () => {
  return (
    <div>
      <button className="btn btn-outline btn-info border-4 rounded-none mr-5 mb-5">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/14Rus18tZUvA1cPYiGiMDP-kQUeExcgLO/view?usp=sharing"
          download
          rel="noreferrer"
        >
          Download Resume
        </a>
      </button>
      <Link to="/contact">
        <button className="btn btn-outline btn-info border-4 rounded-none animate-bounce hover:animate-none transition-all">
          Hire me
        </button>
      </Link>
    </div>
  );
};

export default HomeActionButton;
