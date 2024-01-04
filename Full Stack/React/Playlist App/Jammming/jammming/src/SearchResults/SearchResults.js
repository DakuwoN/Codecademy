import "./SearchResults.css";
import { useState } from "react";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults() {
  console.log("App component is rendering");
  const [tracks, setTracks] = useState([]);

  return (
    <>
      <div className="search-results">Search Results</div>
      <Tracklist tracks={tracks} />
    </>
  );
}

export default SearchResults;
