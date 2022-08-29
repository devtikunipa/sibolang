import { useRoutes } from "react-router-dom";
import GuestRoutes from "./GuestRoutes";
import ErrorRoutes from "./ErrorRoutes";


export default function ThemeRoutes() {
  return useRoutes([GuestRoutes, ErrorRoutes])
}