import { Outlet,redirect } from "react-router-dom";
import InventoryNavbar from "../Navbar/InventoryNavbar.jsx";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../Redux/User/UserActions.jsx";
export default function InventoryManagementRootElement() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
   dispatch(setUserData());
  },[]);

  return (
    <div>
      <InventoryNavbar />
      <SecondaryNavbar />
      <Outlet />
    </div>
  );
}

export const dashboardLoader = async () => {
  if (!Cookies.get("token")) {
    return redirect("/login");}
  return null
  }

