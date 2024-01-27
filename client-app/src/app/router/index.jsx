import { createBrowserRouter, RouterProvider } from "react-router-dom"

import ProtectedRoute from './protectedRoute'
import PublicRoute from './publicRoute'
import { Login } from "@/pages/login"
import { Tent } from "@/pages/tent"
import { NotFound } from "@/pages/notFound"

const router = createBrowserRouter([
    {
        element: <PublicRoute />,
        children: [
            {
                path: "/",
                element: <Login />,
            }
        ]
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/tents",
                element: <Tent />,
            },
        ]
    },
    {
        path: "*",
        element: <NotFound/>,
    }
])

export function AppRouter () {
    return <RouterProvider router={router} />
}