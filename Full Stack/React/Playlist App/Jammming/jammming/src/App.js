import Track from "./Track/Track";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";

import { useState } from "react";
// import SearchResults from "./SearchResults/SearchResults";

function App() {
  const [results, setResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Do something with API
    setResults([searchTerm]);
  };

  const trackObj = [
    {
      artist: "Alicia Keys",
      songName: "Girl on Fire",
      album: "Unknown",
      ID: 1,
    },
  ];

  return (
    <>
      <Track songInfo={trackObj} />
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} />
    </>
  );
}

export default App;
