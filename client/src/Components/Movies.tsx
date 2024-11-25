import { useCallback } from "react";
import { Favorites, OMDBAPI } from "../@types/movies";
import Requests from "../config/axios";

export default function Movies({ movies }: { movies: OMDBAPI[] }) {
  const imdb = "https://imdb.com/title/"
  const Save = useCallback(async (imdbId: string) => {
    const data: Favorites = {
      id: imdbId,
      movie: imdbId
    }
    console.log(data);
    const result: Favorites[] = await Requests.post<Favorites[], Favorites>("/favorites", data)
    console.info(result);
  }, [])
  return (
    <div className="movies">

      {movies.map((movie) => (
        <div className="movie" key={movie.imdbID}>
          <section className="favorite">
            <input type="hidden" name="imdbID" value={JSON.stringify(movie)} />
            <button type="button" className="btn-favorite" onClick={() => Save(movie.imdbID)}>
              <img src="https://api.iconify.design/mdi:star-circle.svg" alt="star" width="50" />
            </button>
          </section>
          <div className="movie-info">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://placehold.co/300x450/000000/FFF?text=Non+disponible"
              }
              alt={movie.Title}
            />
            <h3>{movie.Title}</h3>
            <p>
              Voir les détails
              <a href={imdb + movie.imdbID} target="_blank">
                IMDB
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
