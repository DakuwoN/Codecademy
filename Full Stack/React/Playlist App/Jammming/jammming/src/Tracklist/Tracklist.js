import "./Tracklist.css";
import Track from "../Track/Track";

// it takes two props: tracks (an array of track objects) and addTrack (a function)
function Tracklist({ tracks, addTrack }) {
  console.log("App component is rendering");
  return (
    <>
      {/*for each track in the tracks array */}
      {tracks.map((track) => {
        // create a div with a unique key (track's id)
        <div key={track.id}>
          {/* Inside the div, include a Tracak component, passing the track object as a prop */}
          <Track track={track} />
          {/* Also include a button. When clicked, it calls the addTrack function with the current track  */}
          <button onClick={() => addTrack(track)}> + </button>
        </div>;
      })}
    </>
  );
}

export default Tracklist;
