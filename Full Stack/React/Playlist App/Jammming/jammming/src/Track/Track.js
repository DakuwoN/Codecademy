// Responsible for displaying track information
function Track(props) {
  return (
    <>
      <div className="trackinfo">
        <p>{props.songInfo[0].songName}</p>
        <p>{props.songInfo[0].artist}</p>
        <p>{props.songInfo[0].album}</p>
      </div>
    </>
  );
}

export default Track;
