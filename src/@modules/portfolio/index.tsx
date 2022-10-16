import { Paths } from "../../@shared/constant/Paths";
import PortfolioProjectDetails from "./components/PortfolioProjectDetails";
import PortfolioPage from "./routes/PortfolioPage";

export const PortfolioRoutes = [
  {
    path: Paths.Portfolio,
    element: <PortfolioPage />,
  },
  {
    path: Paths.ProjetDetails(),
    element: <PortfolioProjectDetails />,
  },
];
