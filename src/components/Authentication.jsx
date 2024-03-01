import { Outlet, Navigate } from "react-router-dom";

export function Authentication() {
    let isSignedIn = JSON.parse(localStorage.getItem("isSignedIn"))
    if(isSignedIn) {
        return <Outlet />
    }
    return <Navigate to={"/login"} replace/>
}