import Track from "../Track/Track";

function Playlist({ name, setPlaylistName, tracks, addTrack }) {
  function handleChange({ target }) {
    setPlaylistName(target.value);
  }

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      {tracks.map((track, index) => (
        <Track key={index} songInfo={track} addTrackToPlaylist={addTrack} />
      ))}
    </>
  );
}

export default Playlist;
