import "./Header.css";
import logo from "../../assets/img/logo-frontify.svg";

import SearchInput from "./SearchInput";
import ConstructorAPI from "../../../ConstructorAPI";
import LoginBtn from "./LoginBtn";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ sendData, sendIsDoingSearch }) {

  const [inputValue, setInputValue] = useState(null);
  const [isLogged, setIsLogged] = useState(null);
  
  const navigate = useNavigate();

  useEffect( () => {
    validateUser();
  }, []);


  function validateUser(){

    if(JSON.parse(localStorage.getItem('user'))){
      setIsLogged(true);
    } else{
      setIsLogged(false);
    }

  }

  function handleLogout(){
    localStorage.removeItem('user');
    validateUser();
  }


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
      <img className="logo" src={logo} alt="logo" onClick={() => navigate('/home')}/>

      <SearchInput
        handleInputSearch={handleInputValue}
        handleSearch={handleSearch}
      />

      { isLogged
      ? (<button id="logout" onClick={handleLogout}>Logout</button>)
      : (<LoginBtn />)
      }

    </header>
  );
}
