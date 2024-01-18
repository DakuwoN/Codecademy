function Playlist({ name, setPlaylistName }) {
  function handleChange({ target }) {
    setPlaylistName(target.value);
  }

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
    </>
  );
}

export default Playlist;
