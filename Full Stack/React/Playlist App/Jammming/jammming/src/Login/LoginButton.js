import styles from "./LoginButton.module.css";
import Spotify from "../Spotify/Spotify";

function LoginButton() {
  console.log("App component is rendering");
  return (
    <button className={styles.loginbutton} onClick={Spotify.getAccessToken}>
      Login with Spotify
    </button>
  );
}

export default LoginButton;
