import { Outlet } from "react-router"
import NavBar from "./navbar/NavBar"
import Footer from "./footer/Footer"


const Layout = () => {
  return (
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout