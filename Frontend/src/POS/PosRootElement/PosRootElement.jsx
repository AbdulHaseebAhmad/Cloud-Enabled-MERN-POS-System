import { Outlet } from "react-router"
import Navbar from "../Navbar/Navbar"

export default function PosRootElement() {
  return (
    <div className="bg-white text-d-bg-primary-color min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  )
}
