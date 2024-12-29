import { Outlet,redirect } from "react-router-dom";
import InventoryNavbar from "../Navbar/InventoryNavbar.jsx";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";
import Cookies from "js-cookie";

export default function InventoryManagementRootElement() {
  return (
    <div>
      <InventoryNavbar />
      <SecondaryNavbar />
      <Outlet />
    </div>
  );
}

export const dashboardLoader = () => {
  if (!Cookies.get("token")) {
    return redirect("/login");
  } 
  return null;
};

