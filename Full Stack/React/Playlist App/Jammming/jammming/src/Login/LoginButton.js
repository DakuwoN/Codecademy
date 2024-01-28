import React, { useEffect } from "react";
import Spotify from "../Spotify/Spotify";

function LoginButton() {
  useEffect(() => {
    // Check if access token is valid when component mounts
    if (!Spotify.isAccessTokenValid()) {
      Spotify.getAccessToken();
    }
  }, []);

  return (
    <>
      <button onClick={Spotify.getAccessToken}>Login with Spotify!</button>
    </>
  );
}

export default LoginButton;
