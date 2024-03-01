import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {HomePage} from "./components/HomePage"
import {AllMovies} from "./pages/AllMovies"
import {FavoriteMovies} from "./pages/FavoriteMovies"
import {MovieDetail} from "./pages/MovieDetail"
import { Login } from './pages/Login'

function App() {
    return (
        <>
            <Header />

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />}>
                        <Route index element={<AllMovies />}/>
                        <Route path='favoriteMovies' element={<FavoriteMovies />}/>
                        <Route path='login' element={<Login />}/>
                    </Route>
                    <Route path='/:id' element={<MovieDetail />}/>
                </Routes>
            </BrowserRouter>

            <Footer />
        </>
    )
}

export default App
