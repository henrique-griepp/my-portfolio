import {createBrowserRouter} from "react-router-dom"
import { LinkHub } from "./pages/LinkHub"
import { RootLayout } from "./pages/RootLayout"
import ComposedPage from "./pages/ComposedPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{
            index: true,
            element: <ComposedPage />, 
        }]
    },
    {
        path: "links",
        element: <LinkHub />
    }
])

export default router