import { useState } from "react";
import styles from "./Playlist.module.css";

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
    props.savePlaylist(); // Calls the onSave function passed as a prop

    // this is the data we send to Spotify to create a new playlists
    let data = { name: playlistName };

    // this is where you send a POST request to Spotify to create a new playlist
    fetch("https://api.spotify.com/v1/me/playlists", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify(data), // data can be `string` or {object}!
    })
      .then((response) => response.json())
      .then((data) => {
        // after the post is created, spotify sends back data about the playlist
        // extracting the id of the playlist from the data
        const playlistId = data.id;
        console.log(playlistId);
        // send a POST request to Spotify to add tracks to the playlist
        fetch(
          "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + accessToken,
            },
            body: JSON.stringify({ uris: trackURIs }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <div className="playlistcontainer">
        {/* // this is the input field for the playlist */}
        <input value={playlistName} onChange={handleNameChange} />
        {/* // this displays the playlist name */}
        <h2>{props.playlistName}</h2>
        {/* // maps over the array of playlists tracks */}
        {props.playlistTracks.map((track, index) => (
          <div key={index}>
            {/* // do I need this? // each track is wrapped in a div with a unique
            key */}
            <p>
              {track.name} by {track.artist} from {track.album}
              {/* // displays track info */}
            </p>
            <button onClick={() => props.onRemove(track)}>Remove</button>
            {/* button to remove a track from playlist */}
          </div>
        ))}
        <button onClick={savePlaylist} className="saveToSpotify">
          Save Playlist to Spotify!
        </button>
        {/* //button to save to playlist */}
      </div>
    </>
  );
}

export default Playlist;
