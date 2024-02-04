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

  // savePlaylistToSpotify(name, trackURIs) {
  //   if (!name || !trackURIs.length) {
  //     return;
  //   }

  //   const accessToken = Spotify.getAccessToken();
  //   const headers = { Authorization: `Bearer ${accessToken}` };
  //   let userID;

  //   return fetch("https://api.spotify.com/v1/me", { headers: headers })
  //     .then((response) => response.json())
  //     .then((jsonResponse) => {
  //       userID = jsonResponse.id;
  //       return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
  //         headers: headers,
  //         method: "POST",
  //         body: JSON.stringify({ name: name }),
  //       })
  //         .then((response) => response.json())
  //         .then((jsonResponse) => {
  //           const playlistID = jsonResponse.id;
  //           return fetch(
  //             `https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
  //             {
  //               headers: headers,
  //               method: "POST",
  //               body: JSON.stringify({ uris: trackURIs }),
  //             }
  //           );
  //         });
  //     });
  // },

  async savePlaylistToSpotify(playlistName, trackURIs, accessToken) {
    try {
      if (!accessToken) {
        throw new Error("Access token not available or expired.");
      }

      const userResponse = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!userResponse.ok) {
        throw new Error("Unable to fetch user data");
      }

      const jsonResponse = await userResponse.json();
      const userId = jsonResponse.id;

      if (!userId) {
        throw new Error("Unable to retrieve user ID");
      }

      const playlistResponse = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: playlistName }),
        }
      );

      if (!playlistResponse.ok) {
        throw new Error("Unable to create playlist");
      }

      const playlistJsonResponse = await playlistResponse.json();
      const playlistId = playlistJsonResponse.id;

      if (playlistId) {
        const addTracksResponse = await fetch(
          `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ uris: trackURIs }),
          }
        );

        if (!addTracksResponse.ok) {
          throw new Error("Unable to add tracks to the playlist");
        }

        console.log("Playlist saved successfully!");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  },
};

export default Spotify;
