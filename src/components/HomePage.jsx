import { NavLink, Outlet } from "react-router-dom"

export function HomePage() {
    return (
        <div>
            <nav>
                <NavLink to={"."} className={(obj) => obj.isActive ? "underline" : ""}>All Movies</NavLink>
                <NavLink to={"/favoriteMovies"} className={(obj) => obj.isActive ? "underline" : ""}>Favorite Movies</NavLink>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
}