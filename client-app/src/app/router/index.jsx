import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Login } from "@/pages/login"
import { Tent } from "@/pages/tent"
import { NotFound } from "@/pages/notFound"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/tents",
        element: <Tent />,
    },
    {
        path: "*",
        element: <NotFound/>,
    }
])

export function AppRouter () {
    return <RouterProvider router={router} />
}