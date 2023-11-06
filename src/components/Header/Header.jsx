import "./Header.css";
import logo from "../../img/logo-frontify.svg";
import SearchInput from "./SearchInput";
import { useState } from "react";

export default function Header({sendData, sendIsDoingSearch, token}) {
  const [isDoingSearch, setIsDoingSearch] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  function handleInputSearch(input) {
    setInputValue(input.target.value.toLowerCase());
  }
  function handleSearch(e) {
    if (e.key == 'Enter') {
      search();
    } else if(e.type == 'click') {
      search();
    }
  }

  async function search() {
    setIsDoingSearch(true);
    sendIsDoingSearch(true);
    console.log('Search for ' + inputValue);

    // Get request using search to get Album ID

    try{
        // setIsLoading(true);
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }

        let requestAlbum = await fetch('https://api.spotify.com/v1/search?q=' + inputValue + '&type=album', options);
        let responseAlbum = await requestAlbum.json();

        if (requestAlbum.ok) {
            console.log(responseAlbum, ' ALBUM FETCH');
           // setSearchResults(responseAlbum.albums.items);
            sendData(responseAlbum.albums.items);
        }
    } catch(error){
        console.log(error);
    } finally{
        //setIsDoingSearch(false);
    }
}

  return (
    <header className="tools">
      <img className="logo" src={logo} alt="logo" />
      <SearchInput handleInputSearch={handleInputSearch} handleSearch={handleSearch}/>
    </header>
  );
}

