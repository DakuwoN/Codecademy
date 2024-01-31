import Track from "../Track/Track";
// import { savePlaylistToSpotify } from "../Spotify/Spotify";

function Playlist({
  name,
  setPlaylistName,
  tracks,
  addTrackToPlaylist,
  removeTrackFromPlaylist,
}) {
  // handles the playlist name change
  function handleChange({ target }) {
    setPlaylistName(target.value);
  }

  // uri to save to spotify
  const getTrackURIs = (tracks) => {
    return tracks.map((track) => track.uri);
  };

  function handleSaveToSpotify() {
    const trackURIs = getTrackURIs(tracks);
    // savePlaylistToSpotify(name, trackURIs);
  }
  console.log(tracks);
  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      {tracks.map((track, index) => (
        <Track
          key={index}
          songInfo={track}
          addTrackToPlaylist={addTrackToPlaylist}
          removeTrackFromPlaylist={removeTrackFromPlaylist}
          isRemovable={true}
        />
      ))}
      <button onClick={handleSaveToSpotify}>Save To Spotify</button>
    </>
  );
}

export default Playlist;
