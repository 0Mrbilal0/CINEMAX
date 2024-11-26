import { useCallback, useEffect, useState } from "react"
import Movies from "../Components/Movies";
import Navbar from "../Components/Navbar";
import { Favorites, OMDBAPI } from "../@types/movies";
import Requests from "../config/axios";

function Favorite() {
    const [favorites, setFavorites] = useState<Favorites[]>([])
    const [movies, setMovies] = useState<OMDBAPI[]>([])
    const API = 'https://www.omdbapi.com/?apikey=f4c562c9'

    const fetchFavorites = useCallback(async () => {
        try {
            const result: Favorites[] = await Requests.get<Favorites[]>("/favorites")
            console.log(result);
            setFavorites(result)
        } catch (err) {
            console.error(err)
        }
    }, [])

    let moviesResponse: OMDBAPI[] = []
    const fetchMovies = useCallback(async () => {
        try {
            for (const element of favorites) {
                console.log(element);
                moviesResponse = await Requests.get<OMDBAPI[]>(`${API}&i=${element.id}`)
            }
            setMovies(moviesResponse)
        } catch (err) {
            console.error(err)
        }
    }, [])

    useEffect(() => {
        fetchFavorites().catch(err => {
            console.error('Une erreur c\'est produite lors de la recuperation des favories', err)
        })
        console.log("favorite Response: " + favorites);
    }, [])

    useEffect(() => {
        fetchMovies().catch(err => {
            console.error('Une erreur c\'est produite lors de la recuperation des films', err)
        })
        console.log("movies Response: " + movies);
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