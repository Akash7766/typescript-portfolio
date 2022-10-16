import { Paths } from "../../@shared/constant/Paths";
import ContactPage from "./routes/ContactPage";

export const ContactRoutes = [
  {
    path: Paths.Contact,
    element: <ContactPage />,
  },
];
