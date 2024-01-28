import Track from "../Track/Track";
// import { savePlaylistToSpotify } from "../Spotify/Spotify";

function Playlist({ name, setPlaylistName, tracks, addTrack }) {
  function handleChange({ target }) {
    setPlaylistName(target.value);
  }

  const getTrackURIs = (tracks) => {
    return tracks.map((track) => track.uri);
  };

  function handleSaveToSpotify() {
    const trackURIs = getTrackURIs(tracks);
    // savePlaylistToSpotify(name, trackURIs);
  }

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      {tracks.map((track, index) => (
        <Track key={index} songInfo={track} addTrackToPlaylist={addTrack} />
      ))}
      <button onClick={handleSaveToSpotify}>Save To Spotify</button>
    </>
  );
}

export default Playlist;
