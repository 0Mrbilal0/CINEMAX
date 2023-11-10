import { useEffect, useState } from "react"
import Movies from "../components/Movies";
import Navbar from "../components/Navbar";

function Favorite() {
    const [favorites, setFavorites] = useState([])
    const [movies, setMovies] = useState([])
    const API = "https://www.omdbapi.com/?apikey=f4c562c9";

    const fetchFavorites = async () => {
        try {
            const response = await fetch('/api/fav')
            const jsonResponse = await response.json()
            setFavorites(jsonResponse.favorites)
        } catch (err) {
            console.error(err)
        }
    }

    let moviesResponse = []
    const fetchMovies = async () => {
        try {
            for (const element of favorites) {
                const response = await fetch(`${API}&i=${element.id}`)
                const jsonResponse = await response.json()
                moviesResponse.push(jsonResponse)
            }
            setMovies(moviesResponse)
        } catch (err) {
            console.error(err);
        }
    }

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