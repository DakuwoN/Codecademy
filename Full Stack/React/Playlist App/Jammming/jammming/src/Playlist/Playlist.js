import { useState } from "react";
import "./Playlist.css";

function Playlist(props) {
  console.log("App component is rendering");
  // State hook to manage the state of the playlist name
  const [playlistName, setPlaylistName] = useState(props.playlistName);

  // handles the name changing of the playlist
  const handleNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  // function for saving the playlist
  const savePlaylist = () => {
    // creates array of track URI's
    const trackURIs = props.playlistTracks.map((track) => track.uri);
    console.log(trackURIs); // replace with call to spotify
    setPlaylistName("Create New Playlist"); // resets playlist name to Create New Playlist
    props.onSave(); // Calls the onSave function passed as a prop
  };

  return (
    <>
      <div className="playlist-container">
        // this is the input field for the playlist
        <input value={playlistName} onChange={handleNameChange} />
        // this displays the playlist name
        <h2>{props.playlistName}</h2>
        // maps over the array of playlists tracks
        {props.playlistTracks.map((track, index) => (
          <div key={index}>
            // do I need this? // each track is wrapped in a div with a unique
            key
            <p>
              {track.name} by {track.artist} from {track.album} // displays
              track info
            </p>
            <button onClick={() => props.onRemove(track)}>Remove</button> //
            button to remove a track from playlist
          </div>
        ))}
        <button onClick={savePlaylist}>Save Playlist to Spotify!</button> //
        button to save to playlist
      </div>
    </>
  );
}

export default Playlist;
