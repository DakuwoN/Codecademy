import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import Playlist from "./Playlist/Playlist";
import LoginButton from "./Login/LoginButton";
import Spotify from "./Spotify/Spotify";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import appStyles from "./App.module.css";
import loginStyles from "./Login/LoginButton.module.css";

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
      "BQDENKkSJxFgA_GoTzD4magMKr1-hOBj5jbSlhIKUF9x89V8RIQbp8dRT_GxY6TeU9rDuUL51okMMKI1Fc2VzDkEbt7lJTh8VN_9KXIVZx6hvEfShAcB6FfN1q9QFFinO9R16Ncjtb28HfhKm1Sz84Pwk9DtUvgDTHdFinNXQXdO8-_quFqf5wvx7uZ4_pRzkHnjT6nu_J9AQlD86Qgukt3-nAjGkZIL1d-aoyCiIb0_BbHjQXnJ4YLICMOmTWXC6DkaIgsMkxWa-A";

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
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <div className={appStyles.headerWrapper}>
            <div className={appStyles.headerTop}>
              <div>
                <h1>Jammming</h1>
              </div>
            </div>
            <div className={appStyles.headerBottom}>
              <p>
                Search for a song, if you like it, add it to your playlist, and
                then save your playlist to Spotify. <br />
                Note: You must Login to create a playlist, you must also Create
                a Playlist name to save to Spotify.
              </p>

              <LoginButton />
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <SearchBar onSearch={handleSearch} />
          <SearchResults
            results={results}
            playlistTracks={playlistTracks}
            addTrackToPlaylist={addTrackToPlaylist}
          />
        </Grid>
        <Grid item xs={6}>
          <Playlist
            playlistName={playlistName}
            setPlaylistName={setPlaylistName}
            tracks={playlistTracks}
            addTrackToPlaylist={addTrackToPlaylist}
            removeTrackFromPlaylist={removeTrackFromPlaylist}
            accessToken={accessToken}
            clearPlaylist={clearPlaylist}
          />
        </Grid>
      </Grid>
    </>
  );
}

// Export the App component as the default export
export default App;
