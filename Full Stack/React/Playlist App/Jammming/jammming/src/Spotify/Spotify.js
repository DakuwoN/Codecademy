// this is where you put your Spotify client ID, its like your username for Spotifys API
const clientId = "your_client_id_here";
// This is the URL where Spotify will send the user after they log in
const redirectUri = "http://localhost:3000/"; // for testing
// this variable holds the users access token
let accessToken;

const Spotify = {
  // this method gets the users access token
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Check for an access token match and expiry time
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    // if it finds both
    if (accessTokenMatch && expiresInMatch) {
      // sets accessToken and sets a timer to clear it when it expires
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      // This clears the parameters, allowing us to grab a new access token when it expires.
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      // if it doesnt find both, it redirects the user to Spotifys login page
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },
};

export default Spotify;
