import Track from "./Track/Track";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import Playlist from "./Playlist/Playlist";

import { useState } from "react";
// import SearchResults from "./SearchResults/SearchResults";

function App() {
  // state for the playlist
  const [playlistName, setPlaylistName] = useState("Create New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  // function to add a song to the playlist
  const addTrackToPlaylist = (track) => {
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    playlistTracks.some((playlistTrack) => playlistTrack.id === track.id); // finished off here
  };

  // search results state
  const [results, setResults] = useState([]);
  // function to handle search results
  const handleSearch = (searchTerm) => {
    // Do something with API
    setResults([searchTerm]);
  };

  const trackObj = [
    {
      artist: "Alicia Keys",
      songName: "Girl on Fire",
      album: "Unknown",
      ID: 1,
    },
  ];

  return (
    <>
      <Track songInfo={trackObj} />
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} onAdd={addTrackToPlaylist} />
      <Playlist
        name={playlistName}
        setPlaylistName={setPlaylistName}
        tracks={playlistTracks}
        addTrack={addTrackToPlaylist}
      />
    </>
  );
}

export default App;
