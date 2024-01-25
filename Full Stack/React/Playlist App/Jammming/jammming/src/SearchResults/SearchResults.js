import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ results, addTrackToPlaylist }) {
  return (
    <>
      <Tracklist tracks={results} addTrackToPlaylist={addTrackToPlaylist} />
    </>
  );
}

export default SearchResults;
