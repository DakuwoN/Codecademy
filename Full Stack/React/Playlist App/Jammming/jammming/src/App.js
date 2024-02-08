import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import Playlist from "./Playlist/Playlist";
import LoginButton from "./Login/LoginButton";
import Spotify from "./Spotify/Spotify";

import { useState, useEffect } from "react";

function App() {
  // Run once for the Spotify login
  useEffect(() => {
    // Check if the Spotify access token is not valid
    if (!Spotify.isAccessTokenValid()) {
      // Set the access token from Spotify
      setAccessToken(Spotify.getAccessToken());
    }
  }, []);

  // State for the playlist
  const [playlistName, setPlaylistName] = useState("Create New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  // Function to clear the playlist
  function clearPlaylist() {
    // Reset playlist-related state variables
    setPlaylistName("Enter Playlist Name");
    setPlaylistTracks([]);
    // Add any other playlist-related state variables you need to reset
  }

  // Function to add a song to the playlist
  const addTrackToPlaylist = (track) => {
    // Check if the track is already in the playlist
    const isTrackInPlaylist = playlistTracks.some(
      (playlistTrack) => playlistTrack.id === track.id
    );

    // If the track is not in the playlist, add it
    if (!isTrackInPlaylist) {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }
  };

  // Function to remove a track from the playlist
  const removeTrackFromPlaylist = (track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((t) => t.id !== track.id)
    );
  };

  // State for search results
  const [results, setResults] = useState([]);

  // Function to handle search results
  const handleSearch = (searchTerm) => {
    // Your Spotify access token
    const yourAccessToken =
      "BQDZTPzpj9rMgepJ07F3Eit3aZc1ctPghtcFed1v-p5TAIiCZGRqX-bwzvzAw2p4EcJZjaWmPtXsVQJynAq9_1m3NBYkr3IAHckYX1G8eLSSkUMrEi9jR2zKU-Vcg3aEc4m_12-BF8KEm_QeR1Ks1voxQVBkitaQKVKwHkkbNUXzL3Gb5EUVRs4GCscN_4Ge11Uq7EihGpvNNg87A55nF_pxN7SpyZoxm12d6WcQjTU820ggmV0815HDZcEweQu7s4E_7tfd0JEMtA";

    // Fetch search results from Spotify API
    fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
      headers: {
        Authorization: "Bearer " + yourAccessToken,
      },
    })
      .then(
        (response) => {
          // Check if the response is successful
          if (response.ok) {
            console.log(response);
            return response.json();
          }
          // Throw an error if the request fails
          throw new Error("Request failed");
        },
        (networkError) => console.log(networkError.message)
      )
      .then((jsonResponse) => {
        // Code to execute after receiving the JSON response
        if (jsonResponse.tracks) {
          // Extract track data from the JSON response
          let trackData = jsonResponse.tracks.items.map((track) => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
          }));
          // Set the search results state
          setResults(trackData);
        } else {
          // If there are no tracks, set an empty array for results
          setResults([]);
        }
      });
  };

  return (
    <>
      {/* Render the login button */}
      <LoginButton />

      {/* Render the search bar with the search handler */}
      <SearchBar onSearch={handleSearch} />

      {/* Render the search results with playlist-related functionality */}
      <SearchResults
        results={results}
        playlistTracks={playlistTracks}
        addTrackToPlaylist={addTrackToPlaylist}
      />

      {/* Render the playlist with playlist-related functionality */}
      <Playlist
        playlistName={playlistName}
        setPlaylistName={setPlaylistName}
        tracks={playlistTracks}
        addTrackToPlaylist={addTrackToPlaylist}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
        accessToken={accessToken}
        clearPlaylist={clearPlaylist}
      />
    </>
  );
}

// Export the App component as the default export
export default App;
