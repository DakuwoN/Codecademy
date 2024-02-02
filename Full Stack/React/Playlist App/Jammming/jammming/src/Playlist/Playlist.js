import Track from "../Track/Track";

import Spotify from "../Spotify/Spotify";

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
    console.log(trackURIs);
    Spotify.savePlaylistToSpotify(name, trackURIs);
  }

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
