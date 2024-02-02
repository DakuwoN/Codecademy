// Responsible for displaying track information
function Track({
  songInfo,
  addTrackToPlaylist,
  removeTrackFromPlaylist,
  playlistTracks = [],
  isRemovable,
}) {
  function handleClick() {
    addTrackToPlaylist(songInfo);
  }

  function handleRemove() {
    removeTrackFromPlaylist(songInfo);
  }

  return (
    <>
      <div className="trackinfo">
        <p>{songInfo.name}</p>
        <p>{songInfo.artist}</p>
        <p>{songInfo.album}</p>
      </div>
      {isRemovable ? (
        <div className="removebutton">
          <button onClick={handleRemove}>Remove Song</button>
        </div>
      ) : (
        <div className="addbutton">
          <button type="submit" onClick={handleClick}>
            +
          </button>
        </div>
      )}
    </>
  );
}

export default Track;
