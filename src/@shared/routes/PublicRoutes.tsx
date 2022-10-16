import { AboutRoutes } from "../../@modules/About";
import { BlogRoutes } from "../../@modules/blog";
import { ContactRoutes } from "../../@modules/contact";
import { HomeRoutes } from "../../@modules/home";
import { PortfolioRoutes } from "../../@modules/portfolio";
import { ResumeRoutes } from "../../@modules/resume";
import { Paths } from "../constant/Paths";

export const PublicRoutes = [
  { path: Paths.Home, children: HomeRoutes },
  { path: Paths.About, children: AboutRoutes },
  { path: Paths.Resume, children: ResumeRoutes },
  { path: Paths.Portfolio, children: PortfolioRoutes },
  { path: Paths.Blogs, children: BlogRoutes },
  { path: Paths.Contact, children: ContactRoutes },
];
