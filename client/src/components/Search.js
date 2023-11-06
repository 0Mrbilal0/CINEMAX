import React from "react";

export default function Search({ search, setSearch, searchMovies }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(search);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Quel film recherchez-vous ?"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
    </div>
  );
}
