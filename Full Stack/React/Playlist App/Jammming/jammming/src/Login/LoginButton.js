import React, { useEffect } from "react";
import Spotify from "../Spotify/Spotify";
import { Button } from "@mui/material";

function LoginButton() {
  useEffect(() => {
    // Check if access token is valid when the component mounts
    if (!Spotify.isAccessTokenValid()) {
      // If the access token is not valid, initiate the process to obtain it
      Spotify.getAccessToken();
    }
  }, []);

  return (
    <>
      {/* Button to trigger the Spotify login process */}
      <Button variant="text" onClick={Spotify.getAccessToken}>
        Login with Spotify!
      </Button>
    </>
  );
}

export default LoginButton;
