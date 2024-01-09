import { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar(props) {
  console.log("App component is rendering");

  const [searchTerm, setSearchTerm] = useState("");

  // function to handle changes in the input form
  function handleInputchange(event) {
    setSearchTerm(event.target.value);
  }

  // function to handle form submisison
  function handleSubmit(event) {
    // prevents default behavior
    event.preventDefault();
    // fetching data from spotify api
    fetch("https://api.spotify.com/v1/search?q=" + searchTerm + "&type=track", {
      headers: {
        // including the access token in the header
        Authorization: "Bearer " + props.accessToken,
      },
    })
      // parsing the response as JSON
      .then((response) => response.json())
      // loggin the data to the console
      .then((data) => console.log(data));
  }

  return (
    // form element with onsubmit handler
    <form className="search-bar" onSubmit={handleSubmit}>
      {/* // input field with onChange handler */}
      <input
        type="text"
        onChange={handleInputchange}
        placeholder="Artist, Song, Genre"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
