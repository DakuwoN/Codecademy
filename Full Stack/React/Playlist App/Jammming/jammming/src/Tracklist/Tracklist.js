import Track from "../Track/Track";
// renders the search results
function Tracklist({ tracks, playlistTracks, addTrackToPlaylist }) {
  let songsAdded = tracks.filter(
    (track) =>
      !playlistTracks.some((playlistTrack) => track.id === playlistTrack.id)
  );
  return (
    <>
      {songsAdded.map((track, index) => (
        <Track
          key={index}
          songInfo={track}
          addTrackToPlaylist={addTrackToPlaylist}
          isRemovable={playlistTracks.some(
            (playlistTrack) => playlistTrack.id === track.id
          )}
        />
      ))}
    </>
  );
}

export default Tracklist;
