import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import LoginButton from "./Login/LoginButton";
import SearchResults from "./SearchResults/SearchResults";
import Playlist from "./Playlist/Playlist";

function App() {
  return (
    <div className="App">
      <h1>Jammming Playlist App</h1>
      <LoginButton />
      <SearchBar />
      <SearchResults />
      <Playlist />
    </div>
  );
}

export default App;
