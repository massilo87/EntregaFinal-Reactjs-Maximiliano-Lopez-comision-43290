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

            <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
    )
}

export default AppRouter;