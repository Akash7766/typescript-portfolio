import { BlogRoutes } from "../../@modules/blog";
import { HomeRoutes } from "../../@modules/home";
import { Paths } from "../constant/Paths";

export const PublicRoutes = [
  { path: Paths.Home, children: HomeRoutes },
  { path: Paths.Blogs, children: BlogRoutes },
];
