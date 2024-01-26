// Responsible for displaying track information
function Track({
  songInfo,
  addTrackToPlaylist,
  removeTrackFromPlaylist,
  playlistTracks = [],
}) {
  function handleClick() {
    addTrackToPlaylist(songInfo);
  }

  function handleRemove() {
    removeTrackFromPlaylist(songInfo);
  }
  console.log(playlistTracks);
  let isRemovable = playlistTracks.some(
    (playlistTrack) => playlistTrack.id === songInfo.id
  );

  return (
    <>
      <div className="trackinfo">
        <p>{songInfo.songName}</p>
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
