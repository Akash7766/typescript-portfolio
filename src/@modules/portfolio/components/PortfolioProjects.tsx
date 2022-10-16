import React from "react";
import { Link } from "react-router-dom";
import { Paths } from "../../../@shared/constant/Paths";
import { IProject } from "../../../@shared/interfaces/_project_interface";
import style from "../style/Projects.module.css";

interface Iprops {
  project: IProject;
}
const PortfolioProjects = ({ project }: Iprops) => {
  const { name, _id, image1 } = project;
  return (
    <div className={`${style.projects}`}>
      <img src={image1} alt="" className={`${style.projects_image}`} />
      <div className={`${style.projects_title}`}>
        <div className="text-center">
          <h2 className="text-2xl mb-5">{name}</h2>
          <Link to={Paths.ProjetDetails(_id)}>
            <button className="btn btn-outline btn-info rounded-none uppercase">
              Project Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;
