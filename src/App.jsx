import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {HomePage} from "./components/HomePage"
import {AllMovies} from "./pages/AllMovies"
import {FavoriteMovies} from "./pages/FavoriteMovies"

function App() {
    return (
        <>
            <Header />

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />}>
                        <Route index element={<AllMovies />}/>
                        <Route path='/favoriteMovies' element={<FavoriteMovies />}/>
                    </Route>
                </Routes>
            </BrowserRouter>

            <Footer />
        </>
    )
}

export default App
