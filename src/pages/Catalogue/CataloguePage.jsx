import "./CataloguePage.css";
import logo from "../../img/logo-frontify.svg";
import search from "../../img/search.svg";





export default function CataloguePage() {
  return (
    <section className="sec-catalogue">
      <headder className="sec-head-tools">
        <img className="" src={logo} alt="logo" />
        <div className="">
          <input type="search" />
          <button>
            <img className="" src={search} alt="icon-search" />
          </button>
        </div>
      </headder>
    </section>
  );
}
