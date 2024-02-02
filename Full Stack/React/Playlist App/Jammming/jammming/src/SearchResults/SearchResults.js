import Tracklist from "../Tracklist/Tracklist";
// grabs the search results and passes to tracklist
function SearchResults({ results, playlistTracks, addTrackToPlaylist }) {
  return (
    <>
      <Tracklist
        tracks={results}
        addTrackToPlaylist={addTrackToPlaylist}
        playlistTracks={playlistTracks}
      />
    </>
  );
}

export default SearchResults;
