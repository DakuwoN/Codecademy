import Track from "../Track/Track";

function Playlist({ name, setPlaylistName, tracks, addTrack }) {
  function handleChange({ target }) {
    setPlaylistName(target.value);
  }

  tracks.map((track) => {
    return <Track 
  })

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
    </>
  );
}

export default Playlist;
