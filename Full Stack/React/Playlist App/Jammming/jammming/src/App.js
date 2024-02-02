import Track from "./Track/Track";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import Playlist from "./Playlist/Playlist";
import LoginButton from "./Login/LoginButton";
import Spotify from "./Spotify/Spotify";
import { useState, useEffect } from "react";

function App() {
  // runs once for the spotify login
  useEffect(() => {
    if (!Spotify.isAccessTokenValid()) {
      Spotify.getAccessToken();
    }
  }, []);

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
    const yourAccessToken = "";
    // Do something with API
    fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
      headers: {
        Authorization: "Bearer " + yourAccessToken,
      },
    })
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed");
        },
        (networkError) => console.log(networkError.message)
      )
      .then((jsonResponse) => {
        //code to execute?
        if (jsonResponse.tracks) {
          let trackData = jsonResponse.tracks.items.map((track) => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
          }));
          setResults(trackData);
        } else {
          setResults([]);
        }
      });
  };

  // const trackObj = [
  //   {
  //     artist: "Alicia Keys",
  //     songName: "Girl on Fire",
  //     album: "Unknown",
  //     id: 1,
  //   },
  // ];

  return (
    <>
      <LoginButton />

      <SearchBar onSearch={handleSearch} />
      <SearchResults
        results={results}
        playlistTracks={playlistTracks}
        addTrackToPlaylist={addTrackToPlaylist}
      />
      <Playlist
        name={playlistName}
        setPlaylistName={setPlaylistName}
        tracks={playlistTracks}
        addTrackToPlaylist={addTrackToPlaylist}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
      />
    </>
  );
}

export default App;
