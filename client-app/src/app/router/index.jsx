import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { DefaultLayout } from '@/shared/layout/default'
import { Login } from "@/pages/login"
import { Tent } from "@/pages/Tent"
import { NotFound } from "@/pages/notFound"

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
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
        ]
    }
])

export function AppRouter () {
    return <RouterProvider router={router} />
}