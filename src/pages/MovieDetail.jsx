import { useLocation, useParams, Link } from "react-router-dom"

export function MovieDetail() {
    const {id} = useParams()
    const location = useLocation()
    const prevFilter = location?.state.movieFilter
    console.log(prevFilter)
    console.log(location.state.prevPath)
    return (
        <div>
            <h1>Movie Details: {id}</h1>
            <button>
                {prevFilter ? 
                    <Link className="underline" to={`${location.state.prevPath}?${prevFilter && prevFilter}`} relative="path">Back</Link> 
                : 
                    <Link className="underline" to={location.state.prevPath}>Back</Link>}
            </button>
        </div>
    )
}