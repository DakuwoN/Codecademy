import "./Track.css";

// Responsible for displaying track data
function Track(props) {
  console.log("App component is rendering");

  const addTrack = () => {
    props.addTrack(props.track);
  };
  return (
    <>
      <div className="track">
        <p>{props.track.artist}</p>
        <p>{props.track.name}</p>
        <p>{props.track.album}</p>
        <div className="add-track">
          <button onClick={addTrack}>Add Song</button>
        </div>
      </div>
    </>
  );
}

export default Track;
