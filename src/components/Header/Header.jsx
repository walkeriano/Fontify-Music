import "./Header.css";
import logo from "../../img/logo-frontify.svg";
import cover from "../../img/cover.jpg";

export default function Header() {
  return (
    <section className="sec-catalogue">
      <header className="tools">
        <img className="logo" src={logo} alt="logo" />
        <div className="search-head">
          <input type="search" placeholder="Buscar" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </header>
      <section className="cover-bg">
        <img src={cover} alt="img-cover" />
        <div className="cont-name-album">
          <h3>Dangerous</h3>
          <p>Album Más Top - Michael Jackson</p>
        </div>
      </section>
      <div className="div">
      </div>
    </section>
  );
}
