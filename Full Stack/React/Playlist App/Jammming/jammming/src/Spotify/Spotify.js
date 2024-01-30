// Spotify.js

const clientId = "e4227e62387f4726813d9dba30564e43";
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
};

export default Spotify;

// const getAuthorizationUrl = () => {
//     const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${encodeURIComponent(
//       redirectUri
//     )}`;
//     return accessUrl;
//   };

// const Spotify = {
//   // this method gets the users access token

//   getAccessToken() {
//     if (accessToken) {
//       return accessToken;
//     }

//     // Check for an access token match and expiry time
//     const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);

//     const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

//     // if it finds both

//     if (accessTokenMatch && expiresInMatch) {
//       // sets accessToken and sets a timer to clear it when it expires
//       accessToken = accessTokenMatch[1];
//       const expiresIn = Number(expiresInMatch[1]);
//       // This clears the parameters, allowing us to grab a new access token when it expires.

//       window.setTimeout(() => (accessToken = ""), expiresIn * 1000);

//       window.history.pushState("Access Token", null, "/");

//       return accessToken;
//     } else {
//       // if it doesnt find both, it redirects the user to Spotifys login page
//       const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${encodeURIComponent(
//         redirectUri
//       )}`;

//       window.location = accessUrl;
//     }
//   },
// };

// export default Spotify;

// export const savePlaylistToSpotify = (playlist) => {
//   // Code to save playlist to Spotify...
// };
