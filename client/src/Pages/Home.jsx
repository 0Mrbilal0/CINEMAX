import { useState } from "react";

import cinemaxLogo from "../assets/cinemax-lg.png";

import Search from "../components/Search";
import Movies from "../components/Movies";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function App() {
  const API = "https://www.omdbapi.com/?apikey=f4c562c9";

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (searchValue) => {
    try {
      const response = await fetch(`${API}&s=${searchValue}`);
      const data = await response.json();

      if (data.Search) {
        setMovies(data.Search);
        console.log(data.Search)
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <header>
          <img src={cinemaxLogo} className="logo" alt="logo cinema" />
          <Search
            search={search}
            setSearch={setSearch}
            searchMovies={searchMovies}
          />
        </header>
        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  );
}
