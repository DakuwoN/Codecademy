import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import LoginButton from "./Login/LoginButton";
import SearchResults from "./SearchResults/SearchResults";
import Playlist from "./Playlist/Playlist";
import SaveToSpotify from "./SaveToSpotify/SaveToSpotify";
import { useState } from "react";

function App() {
  console.log("App component is rendering");
  const [playlistName, setPlaylistName] = useState("My playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  function addTrack(track) {
    if (!playlistTracks.includes(track)) {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }
  }

  return (
    <div className="App">
      <h1>Jammming Playlist App</h1>
      <LoginButton />
      <SearchBar />
      <SearchResults />
      <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
      <SaveToSpotify />
    </div>
  );
}

export default App;
