import "./SearchResults.css";
import { useState } from "react";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ addTrack }) {
  console.log("App component is rendering");
  const [tracks, setTracks] = useState([]);

  return (
    <>
      <div className="search-results-container">
        <div className="search-results">
          Search Results
          <Tracklist tracks={tracks} addTrack={addTrack} />
        </div>
      </div>
    </>
  );
}

export default SearchResults;
