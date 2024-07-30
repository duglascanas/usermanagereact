import { createBrowserRouter} from "react-router-dom"
import Home from "../components/pages/Home"
import Error404 from "../components/pages/Error404"
import Pages1 from "../components/pages/Pages1"
import App from "../components/templates/App"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Home />,
           },
            {
                    path: "/Pages1",
                    element: <Pages1 />,
            }
        ]
    }    
])

export default router

