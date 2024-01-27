import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export default function PublicRoute() {
    if (Cookies.get("accessToken")) {
        return <Navigate to="/tents" />;
    }
    return <Outlet />;
}
