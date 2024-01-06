import "./SearchResults.css";
import { useState } from "react";
import Tracklist from "../Tracklist/Tracklist";

// this function gets the search results
function SearchResults({ addTrack }) {
  console.log("App component is rendering");

  const [tracks, setTracks] = useState([]);
  // component returns a div with the search results and a Tracklist component
  // The Tracklist component receives the tracks state and the addTrack function as props
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
