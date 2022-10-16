import useProjects from "../../../@shared/hooks/useProjects";
import PortfolioProjects from "../components/PortfolioProjects";

const PortfolioPage = () => {
  const projects = useProjects();
  return (
    <div>
      <div className="py-10 mx-5 md:mx-16">
        <h2 className="text-3xl sm:text-5xl text-center border-b-2 pb-3 text-info mb-10">
          <i className="fa-solid fa-briefcase-medical mr-3"></i>My recent work
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <PortfolioProjects key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
