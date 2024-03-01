import { NavLink, Outlet } from "react-router-dom"

export function HomePage() {
    return (
        <div>
            <nav className="py-4 flex justify-center items-center gap-x-4">
                <NavLink to={"."} className={(obj) => `text-blue-900 ${obj.isActive && "underline"}`}>All Movies</NavLink>
                <NavLink to={"/favoriteMovies"} className={(obj) => `text-blue-900 ${obj.isActive && "underline"}`}>Favorite Movies</NavLink>
                <NavLink to={"/login"} className={(obj) => `text-blue-900 ${obj.isActive && "underline"}`}>Sign in</NavLink>
            </nav>
            <div className="mb-14">
                <Outlet />
            </div>
        </div>
    )
}