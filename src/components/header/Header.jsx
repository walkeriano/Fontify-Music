import "./Header.css";
import logo from "../../img/logo-frontify.svg";

import SearchInput from "./SearchInput";

export default function Header({handleInputSearch, handleSearch}) {


  return (
    <header className="mainHeader">
      <img className="logo" src={logo} alt="logo" />
      <SearchInput handleInputSearch={handleInputSearch} handleSearch={handleSearch} />
    </header>
  );
}
