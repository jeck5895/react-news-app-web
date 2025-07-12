import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Filters from "../components/filters/Filters"

export default function WithNavbar () {
  return (
    <>
      <Navbar/>
      <div className="w-2/3 md:w-2/3 sm:w-full mx-auto pt-4">
        <Filters/>
        <Outlet/>
      </div>
    </>
  )
}