import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export default function ProtectedRoute() {
    if (!Cookies.get("accessToken")) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
}
