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

  function addTrack(track) {
    if (!playlistTracks.includes(track)) {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }
  }

  function removeTrack(track) {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((t) => t.id !== track.id)
    );
  }

  return (
    <div className="App">
      <h1>Jammming Playlist App</h1>
      <LoginButton />
      <SearchBar />
      <SearchResults addTrack={addTrack} />
      <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
    </div>
  );
}

export default App;
