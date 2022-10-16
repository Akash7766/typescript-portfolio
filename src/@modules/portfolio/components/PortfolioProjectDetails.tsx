import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProject } from "../../../@shared/interfaces/_project_interface";
import ImportantLinks from "./ImportantLinks";
import ProjectScreenShot from "./ProjectScreenShot";
import UsesTechnology from "./UsesTechnology";

type ProjectParams = {
  _id: any;
};
const PortfolioProjectDetails = () => {
  const { _id } = useParams<ProjectParams>();
  const [project, setProject] = useState<IProject>({});
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProject(data[parseInt(_id) - 1]));
  }, [_id]);

  return (
    <div>
      <div className="py-10 mx-5 md:mx-16">
        <h2 className="text-3xl sm:text-5xl text-center border-b-2 pb-3 text-info">
          {project.name}
        </h2>

        {/* Technology list  */}
        <UsesTechnology />

        {/* import link  */}
        <ImportantLinks project={project} />

        {/* Screenshot  */}
        <ProjectScreenShot project={project} />

        {/* description */}
        <div className="my-10">
          <h2 className="text-2xl text-white my-5 font-bold">
            About This Project -
          </h2>
          <div>
            <p className="text-white text-md">{project?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjectDetails;
