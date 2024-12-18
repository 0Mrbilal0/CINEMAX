export default function Search({ search, setSearch, searchMovies }: any) {
  const handleSubmit = (event: any) => {
    event.preventDefault();
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
        <button type="submit" className="btn">Rechercher</button>
      </form>
    </div>
  );
}
