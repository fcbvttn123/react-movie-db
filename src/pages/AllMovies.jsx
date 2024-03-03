import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getAllMovies, getAllGenres } from "../data";
import { useEffect, useState } from "react";

export function AllMovies() {
    const [movies, setAllMovies] = useState(null) // {genre_ids: [28, 27, 53]}
    const [genres, setGenres] = useState(null) // {id: 28, name: 'Action'}
    const location = useLocation()
    const [searchParams, setSearchParam] = useSearchParams()
    
    // searchParams.get("genre") && console.log(searchParams.get("genre"))
    movies && console.log(movies)
    // genres && console.log(genres)

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
        // Get an array of movies
        async function getData() {
            let movies = await getAllMovies()
            setAllMovies(movies)
        }
        getData()

        // Get an array of genres
        async function getDataGenres() {
           let g = await getAllGenres()
           setGenres(g)
        }
        getDataGenres()
    }, [])

    return (
        <>
            {imgHTMLs}
        </>
    )
}