// Spotify.js

const clientId = "#";
const redirectUri = "http://localhost:3000"; // Set this to your redirect URI

const Spotify = {
  getAccessToken() {
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      const accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      // Set the access token and expiration time in your app
      this.setAccessToken(accessToken, expiresIn);
      // Clear parameters from the URL to avoid issues with expired access tokens
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      // Redirect the user to the Spotify login page
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=user-read-private user-read-email&redirect_uri=${encodeURIComponent(
        redirectUri
      )}`;
      window.location = accessUrl;
    }
  },

  setAccessToken(accessToken, expiresIn) {
    // Set the access token and its expiration time in your app
    // You can use localStorage or another state management solution
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("expirationTime", Date.now() + expiresIn * 1000);
  },

  isAccessTokenValid() {
    const accessToken = localStorage.getItem("accessToken");
    const expirationTime = localStorage.getItem("expirationTime");

    return accessToken && expirationTime && Date.now() < expirationTime;
  },

  savePlaylistToSpotify(playlist) {
    // Code to save playlist to Spotify...
    fetch("https://api.spotify.com/v1/me", {
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
        let userId = jsonResponse.id;
        if (userId) {
          fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: "POST",
            headers: {
              Authorization: "Bearer " + yourAccessToken,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: playlist }),
          })
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              throw new Error("Request failed");
            })
            .then((playlistResponse) => {
              // Handle the response from the playlist creation
              console.log("Playlist created successfully:", playlistResponse);
            })
            .catch((error) => {
              console.error("Error creating playlist:", error);
            });
        }
      });
  },
};

export default Spotify;
