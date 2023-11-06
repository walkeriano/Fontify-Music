import "./Header.css";
import logo from "../../img/logo-frontify.svg";
import SearchInput from "./SearchInput";
import { useState } from "react";

export default function Header({ sendData, sendIsDoingSearch, token }) {
  const [inputValue, setInputValue] = useState(null);
  function handleSearch(e) {
    if (e.key == "Enter") {
      search();
    } else if (e.type == "click") {
      search();
    }
  }
  function handleInputValue(input) {
    setInputValue(input.target.value.toLowerCase());
    if (input.target.value.trim() == "") {
      sendIsDoingSearch(false);
    }
  }
  async function search() {
    sendIsDoingSearch(true);
    console.log("Search for " + inputValue);

    try {
      // setIsLoading(true);
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      let requestAlbum = await fetch(
        "https://api.spotify.com/v1/search?q=" + inputValue + "&type=album",
        options
      );
      let responseAlbum = await requestAlbum.json();

      if (requestAlbum.ok) {
        console.log(responseAlbum, " ALBUM FETCH");
        // setSearchResults(responseAlbum.albums.items);
        sendData(responseAlbum.albums.items);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  return (
    <header className="tools">
      <img className="logo" src={logo} alt="logo" />
      <SearchInput
        handleInputSearch={handleInputValue}
        handleSearch={handleSearch}
      />
    </header>
  );
}
