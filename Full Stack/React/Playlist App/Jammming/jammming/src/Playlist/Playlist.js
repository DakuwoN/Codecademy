import "./Playlist.css";

function Playlist(props) {
  console.log("App component is rendering");
  return (
    <>
      <div className="playlist">Selected Songs</div>
      <h2>{props.playlistName}</h2>
      {props.playlistTracks.map((track, index) => (
        <p key={index}>{track}</p>
      ))}
    </>
  );
}

export default Playlist;
