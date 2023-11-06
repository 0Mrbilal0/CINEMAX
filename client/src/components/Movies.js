import React from "react";

export default function Movies({ movies }) {
  const imdb = "https://imdb.com/title/";

  return (
    <div className="movies">
      {movies.map((movie) => (
        <div className="movie" key={movie.imdbID}>
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
              Voir les détailes{" "}
              <a
                href={`${imdb}${movie.imdbID}`}
                rel="noreferrer"
                target="_blank"
              >
                IMDB
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
