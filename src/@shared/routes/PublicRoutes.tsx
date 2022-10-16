import { AboutRoutes } from "../../@modules/About";
import { BlogRoutes } from "../../@modules/blog";
import { ContactRoutes } from "../../@modules/contact";
import { HomeRoutes } from "../../@modules/home";
import { ResumeRoutes } from "../../@modules/resume";
import { Paths } from "../constant/Paths";

export const PublicRoutes = [
  { path: Paths.Home, children: HomeRoutes },
  { path: Paths.Blogs, children: BlogRoutes },
  { path: Paths.About, children: AboutRoutes },
  { path: Paths.Resume, children: ResumeRoutes },
  { path: Paths.Contact, children: ContactRoutes },
];
