import "./SearchBar.css";

function SearchBar() {
  return (
    <form className="search-bar">
      <input type="text" placeholder="Artist, Song, Genre" />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
