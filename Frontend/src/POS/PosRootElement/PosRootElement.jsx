import { Outlet, redirect } from "react-router"
import Navbar from "../Navbar/Navbar"
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../Redux/User/userActions";
export default function PosRootElement() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setUserData())
  },[])
  return (
    <div className="bg-white text-d-bg-primary-color min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  )
}


const PosLoader = () =>{
  const token = Cookies.get("token");
  if(!token){
    return redirect ("/login");

  } else {
    const userData = jwtDecode(token);
    if(userData['cognito:groups'][0] === "Cashiers"){
      return null;
    }
    else {
      return redirect("/inventory-management")
    }
  }
 }

export {PosLoader};