import "./Header.css";
import logo from "../../assets/img/logo-frontify.svg";

import SearchInput from "./SearchInput";
import ConstructorAPI from "../../../ConstructorAPI";

import { useState } from "react";


export default function Header({ sendData, sendIsDoingSearch }) {

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
    const searchPath = "search?q=" + inputValue + "&type=album";
    const api = new ConstructorAPI(searchPath);
    api
      .fetchData()
      .then((data) => {
        sendData(data.albums.items);
      })
      .catch((error) => console.log(error));
  }


  return (
<<<<<<< HEAD
    <header className="mainHeader">
      <img className="logo" src={logo} alt="logo" />
=======
    <header className="tools">
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>
>>>>>>> 7b2d305254840c090b1cc876c83f3ca66db0129d
      <SearchInput
        handleInputSearch={handleInputValue}
        handleSearch={handleSearch}
      />
    </header>
  );
}
