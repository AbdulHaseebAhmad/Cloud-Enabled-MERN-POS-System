import { Outlet } from "react-router-dom";
import InventoryNavbar from "../Navbar/InventoryNavbar.jsx";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";

export default function InventoryManagementRootElement() {
  return (
    <div>
      <InventoryNavbar />
      <SecondaryNavbar />
      <Outlet />
    </div>
  );
}
