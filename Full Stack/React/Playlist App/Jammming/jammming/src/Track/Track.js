import "./Track.css";

// Responsible for displaying track data
function Track(props) {
  console.log("App component is rendering");
  // addTrack function uses the addTrack function passed as a prop
  // to add the current track (also passed as a prop) to the playlist
  const addTrack = () => {
    props.addTrack(props.track);
  };

  return (
    <>
      <div className="track">
        // display the artist, track name, and album name
        <p>{props.track.artist}</p>
        <p>{props.track.name}</p>
        <p>{props.track.album}</p>
        <div className="add-track">
          // add song button uses the addTrack function when clicked
          <button onClick={addTrack}>Add Song</button>
        </div>
      </div>
    </>
  );
}

export default Track;
