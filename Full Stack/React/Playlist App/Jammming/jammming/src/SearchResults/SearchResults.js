import Tracklist from "../Tracklist/Tracklist";

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
