import { Link, useLocation } from "react-router-dom";
import { getAllMovies } from "../data";
import { useEffect, useState } from "react";

export function AllMovies() {
    const [movies, setAllMovies] = useState(null)
    const location = useLocation()

    let imgHTMLs = null
    if(movies) {
        imgHTMLs = movies.map(m => 
            <button key={m.id} className="mb-10">
                <Link state={{prevPath: location.pathname}} to={`/${m.id}`}>
                    <h1>{m.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/original/${m.backdrop_path}`} />
                </Link>
            </button>
        )
    } 

    useEffect(() => {
        async function getData() {
            let movies = await getAllMovies()
            setAllMovies(movies)
        }
        getData()
    }, [])

    return (
        <>
            {imgHTMLs}
        </>
    )
}