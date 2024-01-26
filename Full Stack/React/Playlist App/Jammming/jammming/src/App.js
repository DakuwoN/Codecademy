import Track from "./Track/Track";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import Playlist from "./Playlist/Playlist";

import { useState } from "react";

function App() {
  // state for the playlist
  const [playlistName, setPlaylistName] = useState("Create New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  // function to add a song to the playlist
  const addTrackToPlaylist = (track) => {
    const isTrackInPlaylist = playlistTracks.some(
      (playlistTrack) => playlistTrack.id === track.id
    );
    if (!isTrackInPlaylist) {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }
  };

  const removeTrackFromPlaylist = (track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((t) => t.id !== track.id)
    );
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
      id: 1,
    },
  ];

  return (
    <>
      <Track
        songInfo={trackObj[0]}
        addTrackToPlaylist={addTrackToPlaylist}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
        playlistTracks={playlistTracks}
      />
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} onAdd={addTrackToPlaylist} />
      <Playlist
        name={playlistName}
        setPlaylistName={setPlaylistName}
        tracks={playlistTracks}
        addTrack={addTrackToPlaylist}
        removeTrack={removeTrackFromPlaylist}
      />
    </>
  );
}

export default App;
