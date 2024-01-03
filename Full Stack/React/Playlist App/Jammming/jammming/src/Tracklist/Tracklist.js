import "./Tracklist.css";
import Track from "../Track/Track";

function Tracklist(props) {
  return (
    <>
      {props.tracks.map((track) => {
        return <Track track={track} key={track.id} />;
      })}
    </>
  );
}

export default Tracklist;
