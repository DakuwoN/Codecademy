import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import Playlist from "./Playlist/Playlist";
import LoginButton from "./Login/LoginButton";
import Spotify from "./Spotify/Spotify";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import appStyles from "./App.module.css";
import searchStyles from "./SearchResults/SearchResults.module.css";

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
      "BQBQ4tFh3sb6l6wT4DwlUhbKmY9FpsOZ_7kPCG26wWsTkh3e52M6_m1_c9l3-qlv0SAerE2pnORaiZeBjj6w5L24NujV8NCkROqC5fHQduY69Tb0XxSpCGg6nlx7mdhWUf2vFj_QByPCW4ULdivTbDUgg8ze0P8ty_pRo73Tk7ZGD5LJLO83Jn8U2DOTBP4003V6pk5v0lobWZvEk4Z9207HTuIAGYLBHxSnl6uoEspSRsDyESzWonFNMiLo9ePzOCtqIh5u9X3_Sw";

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
      <Grid container spacing={4}>
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

        <div className={appStyles.appWrapper}>
          <Grid item xs={6}>
            <div className={searchStyles.searchWrapper}>
              <SearchBar onSearch={handleSearch} />
              <div className={searchStyles.searchContainer}>
                <SearchResults
                  results={results}
                  playlistTracks={playlistTracks}
                  addTrackToPlaylist={addTrackToPlaylist}
                />
              </div>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div className="playlistWrapper">
              <div className="playlistContainer">
                <Playlist
                  playlistName={playlistName}
                  setPlaylistName={setPlaylistName}
                  tracks={playlistTracks}
                  addTrackToPlaylist={addTrackToPlaylist}
                  removeTrackFromPlaylist={removeTrackFromPlaylist}
                  accessToken={accessToken}
                  clearPlaylist={clearPlaylist}
                />
              </div>
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
}

// Export the App component as the default export
export default App;
