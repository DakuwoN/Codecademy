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
  console.log(typeof addTrackToPlaylist);

  const removeTrackFromPlaylist = (track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((t) => t.id !== track.id)
    );
  };

  // search results state
  const [results, setResults] = useState([]);
  // function to handle search results
  const handleSearch = (searchTerm) => {
    const yourAccessToken =
      "BQCY-PSTfiEgBkAggJfcFen7G2Tz41M1RXs0B8Z36Bo9wnk6fzrv0LrOFm9Aaxu0lev5cDtMGWBaKE7jQB7_vn_9mz3TyCbbBDLuL1ToqZE3Qts-MsvmRF3lY9dn_DkS4OOdfPzrP5mU3P5PbGtpoHXk3pj6PCeezky6lUsNYgeL2hj0YV3uDLIs22dhNhM_0I8Sy7o7HGwVF4VO3qY";
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
      <LoginButton />
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
