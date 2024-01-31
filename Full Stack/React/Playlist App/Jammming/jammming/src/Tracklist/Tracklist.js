import Track from "../Track/Track";

function Tracklist({
  tracks,
  playlistTracks,

  addTrackToPlaylist,
}) {
  return (
    <>
      {tracks.map((track, index) => (
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
