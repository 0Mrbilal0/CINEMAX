import React from "react";

export default function Movies({ movies }) {
  const imdb = "https://imdb.com/title/";
  const url = `/api/save`
  return (
    <div className="movies">

      {movies.map((movie) => (
        <div className="movie" key={movie.imdbID}>
          <form className="favorite" method="POST" action={url}>
            <input type="hidden" name="imdbID" value={movie.imdbID} />
            <button type="submit" className="btn-favorite">
              <img src="https://api.iconify.design/mdi:star-circle.svg" alt="star" width="50" />
            </button>
          </form>
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
