import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getAllMovies, getAllGenres } from "../data";
import { useEffect, useState } from "react";

export function AllMovies() {
    const [movies, setAllMovies] = useState(null) // {genre_ids: [28, 27, 53]}
    const [genres, setGenres] = useState(null) // {id: 28, name: 'Action'}
    const location = useLocation()
    const [searchParams, setSearchParam] = useSearchParams()
    const [formData, setFormData] = useState({
        genre: ""
    })
    
    // searchParams.get("genre") && console.log(searchParams.get("genre"))
    // movies && console.log(movies)
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

    let optionHTMLs = null
    if(genres) {
        optionHTMLs = genres.map(e => <option key={e.id} value={e.id}>{e.name}</option>)
    }

    function handleChange(event) {
        let {name, value} = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    // Get data
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

    // Set up movie filter 
    useEffect(() => {
        formData.genre !== "" && setSearchParam({genreId: formData.genre})
    }, [formData.genre])

    // Reset search when refreshing the app 
    useEffect(() => {
        setSearchParam({})
    }, [])

    return (
        <>
            <form action="#" className="mb-4 bg-gray-200">
                <select name="genre" value={formData.genre} onChange={handleChange}>
                    <option value="">Select</option>
                    {optionHTMLs}
                </select>
            </form>
            {imgHTMLs}
        </>
    )
}