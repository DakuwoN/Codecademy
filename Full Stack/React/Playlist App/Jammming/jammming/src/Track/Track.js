// Responsible for displaying track information
function Track({
  songInfo, // Information about the song (name, artist, album, etc.)
  addTrackToPlaylist, // Function to add the track to the playlist
  removeTrackFromPlaylist, // Function to remove the track from the playlist
  isRemovable, // Indicates whether the track is removable from the playlist
}) {
  // Handles click event when adding the track to the playlist
  function handleClick() {
    addTrackToPlaylist(songInfo);
  }

  // Handles click event when removing the track from the playlist
  function handleRemove() {
    removeTrackFromPlaylist(songInfo);
  }

  return (
    <>
      {/* Display track information */}
      <div className="trackinfo">
        <p>{songInfo.name}</p>
        <p>{songInfo.artist}</p>
        <p>{songInfo.album}</p>
      </div>

      {/* Render the appropriate button based on track removability */}
      {isRemovable ? (
        // Render "Remove Song" button for removable tracks
        <div className="removebutton">
          <button onClick={handleRemove}>Remove Song</button>
        </div>
      ) : (
        // Render "+" button for non-removable tracks
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
