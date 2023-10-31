import "./Header.css";
import logo from "../../img/logo-frontify.svg";

export default function Header() {
  return (
    <header className="tools">
      <img className="logo" src={logo} alt="logo" />
      <div className="search-head">
        <input type="search" placeholder="Buscar" />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </header>
  );
}
