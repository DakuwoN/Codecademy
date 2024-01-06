import { useState } from "react";
import "./Playlist.css";

function Playlist(props) {
  console.log("App component is rendering");

  const [playlistName, setPlaylistName] = useState(props.playlistName);

  const handleNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const savePlaylist = () => {
    const trackURIs = props.playlistTracks.map((track) => track.uri);
    console.log(trackURIs); // replace with call to spotify
    setPlaylistName("Create New Playlist");
    props.onSave();
  };

  return (
    <>
      <div className="playlist-container">
        <input value={playlistName} onChange={handleNameChange} />
        <h2>{props.playlistName}</h2>
        {props.playlistTracks.map((track, index) => (
          <div key={index}>
            <p>
              {track.name} by {track.artist} from {track.album}
            </p>
            <button onClick={() => props.onRemove(track)}>Remove</button>
          </div>
        ))}
        <button onClick={savePlaylist}>Save Playlist to Spotify!</button>
      </div>
    </>
  );
}

export default Playlist;
