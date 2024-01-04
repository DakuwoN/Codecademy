import "./Track.css";

// Responsible for displaying track data
function Track(props) {
  console.log("App component is rendering");
  return (
    <div className="track">
      <p>{props.track.artist}</p>
      <p>{props.track.name}</p>
      <p>{props.track.album}</p>
    </div>
  );
}

export default Track;
