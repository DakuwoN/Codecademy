import Playlist from "../Playlist/Playlist";

// Responsible for displaying track information
function Track({ songInfo, addTrackToPlaylist }) {
  function handleClick() {
    addTrackToPlaylist(songInfo[0]);
  }

  function addTrackToPlaylist(track) {
    Playlist.push(track);
  }

  return (
    <>
      <div className="trackinfo">
        <p>{songInfo[0].songName}</p>
        <p>{songInfo[0].artist}</p>
        <p>{songInfo[0].album}</p>
      </div>
      <div className="addbutton">
        <button type="submit" onClick={addTrackToPlaylist(track)}>
          +
        </button>
      </div>
    </>
  );
}

export default Track;
