import "./Tracklist.css";
import Track from "../Track/Track";

function Tracklist(props) {
  console.log("App component is rendering");
  return (
    <>
      {props.tracks.map((track) => {
        return <Track track={track} key={track.id} addTrack={props.addTrack} />;
      })}
    </>
  );
}

export default Tracklist;
