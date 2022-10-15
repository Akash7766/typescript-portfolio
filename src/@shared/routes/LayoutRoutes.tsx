import Layout from "../layout/Layout";
import ErrorLayout from "./ErrorLayout";
import { PublicRoutes } from "./PublicRoutes";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const LayoutRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: PublicRoutes,
    errorElement: <ErrorLayout />,
  },
];
