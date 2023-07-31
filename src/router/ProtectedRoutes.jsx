import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoutes = () => {

    let userRol = "admin"

    return (
        <>
            {
                userRol === "admin" ? <Outlet /> : <Navigate to="/" />
            }
        </>
    )
}

export default ProtectedRoutes