export async function getAllMovies() {
    let res = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=cd48c60eb2bfcb6e551283f754cbe73f")
    let data = await res.json()
    return data.results
}