import { Route, Routes } from "react-router"
import { routes } from "./menuRoutes"
import Layout from "../components/layout/Layout"
import Dashboard from "../components/pages/dashboard/Dashboard"
import ProtectedRoutes from "./ProtectedRoutes"

const AppRouter = () => {


    return (
        <Routes>
            <Route element={<Layout />}>
                {routes.map(({ id, path, Element }) => (<Route key={id} path={path} element={<Element />} />
                ))}
            </Route>

            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            <Route path="*" element={<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1>404 - Not Found</h1>
                <img src="https://res.cloudinary.com/dwiiarrki/image/upload/v1690927480/404_i8hlli.jpg" alt="notFound" style={{ width: "100%", maxWidth: "400px", alignSelf: "center" }} />
            </div>} />
        </Routes>
    )
}

export default AppRouter;