import { Route, Routes } from "react-router"
import NavBar from "../components/layout/navbar/NavBar"
import { routes } from "./menuRoutes"

const AppRouter = () => {


    return (
        <Routes>
            <Route element={<NavBar />}>
                {routes.map(({ id, path, Element }) => <Route key={id} path={path} element={<Element />} />)

                }
            </Route>

            <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
    )
}

export default AppRouter;