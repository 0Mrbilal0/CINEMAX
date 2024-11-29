interface Favorites {
    id: string
    movie: string
}

interface OMDBAPI {
    Title: string
    Year: string
    Rated: string
    Released: string
    Runtime: string
    Genre: string
    Directory: string
    Writer: string
    Actors: string
    Plot: string
    Langage: string
    Country: string
    Awrads: string
    Poster: string
    Rating: object
    Metascore: string
    imdbRating: string
    imdbVotes: string
    imdbID: string
    Type: string
    DVD: string
    BoxOffice: string
    Production: string
    Website: string
    Response: string
}

export type { OMDBAPI, Favorites }