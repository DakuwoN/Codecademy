import Track from "../Track/Track";

import Spotify from "../Spotify/Spotify";

function Playlist({
  playlistName,
  setPlaylistName,
  tracks = [
    "spotify:track:6jG2YzhxptolDzLHTGLt7S",
    "spotify:track:02M6vucOvmRfMxTXDUwRXu",
  ],
  addTrackToPlaylist,
  removeTrackFromPlaylist,
}) {
  // handles the playlist playlistName change
  function handleChange({ target }) {
    setPlaylistName(target.value);
  }

  // uri to save to spotify
  const getTrackURIs = (tracks) => {
    return tracks.map((track) => track.uri);
  };

  function handleSaveToSpotify() {
    const trackURIs = getTrackURIs(tracks);
    const accessToken = Spotify.getAccessToken();
    const playlistData = {
      name: playlistName,
      description: "My awesome playlist", // You can customize the description
      public: true, // Set to true for a public playlist, false for private
    };

    Spotify.savePlaylistToSpotify(playlistData, trackURIs, accessToken);
  }

  return (
    <>
      <input type="text" value={playlistName} onChange={handleChange} />
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
