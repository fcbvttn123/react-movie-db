import { useLocation, useParams, Link } from "react-router-dom"

export function MovieDetail() {
    const {id} = useParams()
    const location = useLocation()
    return (
        <div>
            <h1>Movie Details: {id}</h1>
            <button>
                <Link className="underline" to={location.state.prevPath}>Back</Link>
            </button>
        </div>
    )
}