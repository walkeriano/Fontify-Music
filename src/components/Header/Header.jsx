import "./Header.css";
import logo from "../../assets/img/logo-frontify.svg";

import SearchInput from "./SearchInput";
import ConstructorAPI from "../../../ConstructorAPI";
import { Link } from "react-router-dom";

import { useState } from "react";

export default function Header({ sendData, sendIsDoingSearch, admin }) {
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
    <header className="mainHeader">
      <img className="logo" src={logo} alt="logo" />
      <div className="admin-header">
        <SearchInput
          handleInputSearch={handleInputValue}
          handleSearch={handleSearch}
        />
        {admin && (
          <Link to="/dashboard">
            <i className="fa-solid fa-circle-user i-admin"></i>
          </Link>
        )}
      </div>
    </header>
  );
}
