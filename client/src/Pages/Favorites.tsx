import { useCallback, useEffect, useState } from "react"
import Movies from "../Components/Movies";
import Navbar from "../Components/Navbar";
import { Favorites, OMDBAPI } from "../@types/movies";
import Requests from "../config/axios";

function Favorite() {
    const [favorites, setFavorites] = useState<Favorites[]>([])
    const [movies, setMovies] = useState<OMDBAPI[]>([])
    const API = import.meta.env.VITE_OMDB;


    const fetchFavorites = async () => {
        try {
            const result: Favorites[] = await Requests.get<Favorites[]>("/favorites")
            setFavorites(result)
        } catch (err) {
            console.error(err)
        }
    }

    let moviesResponse = []
    const fetchMovies = useCallback(async () => { 
        try {
            for (const element of favorites) {
                const response = await fetch(`${API}&i=${element.id}`)
                const jsonResponse = await response.json()
                moviesResponse.push(jsonResponse)
            }
            setMovies(moviesResponse)
        } catch (err) {
            console.error(err)
        }
    }, [])

    useEffect(() => {
        fetchFavorites()
            .catch(err => {
                console.error('Une erreur c\'est produite lors de la recuperation des favories', err)
            })
    }, [])

    useEffect(() => {
        fetchMovies()
            .catch(err => {
                console.error('Une erreur c\'est produite lors de la recuperation des films', err)
            })
    }, [favorites])

    return (
        <>
            <Navbar />
            <div className="App">
                <h1 style={{ textAlign: 'center', paddingBottom: '1rem' }}>Favories</h1>
                <Movies movies={movies} />
            </div>
        </>
    )

}

export default Favorite