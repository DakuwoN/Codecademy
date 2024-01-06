import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import LoginButton from "./Login/LoginButton";
import SearchResults from "./SearchResults/SearchResults";
import Playlist from "./Playlist/Playlist";

import { useState } from "react";
import Track from "./Track/Track";
import Tracklist from "./Tracklist/Tracklist";

function App() {
  console.log("App component is rendering");
  const [playlistName, setPlaylistName] = useState("My Playlists");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // adding a track to playlist
  function addTrack(track) {
    if (!playlistTracks.includes(track)) {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }
  }
  // removing a track from playlist
  function removeTrack(track) {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((t) => t.id !== track.id)
    );
  }

  // function for saving the playlist
  const savePlaylist = () => {
    // creates array of track URI's
    const trackURIs = props.playlistTracks.map((track) => track.uri);
    console.log(trackURIs); // replace with call to spotify
    setPlaylistName("Create New Playlist"); // resets playlist name to Create New Playlist
    props.onSave(); // Calls the onSave function passed as a prop
  };

  return (
    <div className="App">
      <h1>Jammming Playlist App</h1>
      <LoginButton />
      <SearchBar />
      <SearchResults addTrack={addTrack} />
      <Playlist
        playlistName={playlistName}
        playlistTracks={playlistTracks}
        savePlaylist={savePlaylist}
      />
    </div>
  );
}

export default App;
