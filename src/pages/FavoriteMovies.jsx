import { Link, useLocation } from "react-router-dom";

export function FavoriteMovies() {
    const location = useLocation()
    return (
        <>
            <h1>Favorite Movies</h1>
            <button>
                <Link state={{prevPath: location.pathname}} to={"/1"}>1</Link>
            </button>
            <button>
                <Link state={{prevPath: location.pathname}} to={"/2"}>2</Link>
            </button>
        </>
    )
}