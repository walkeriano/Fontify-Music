import "./CataloguePage.css";
import logo from "../../img/logo-frontify.svg";





export default function CataloguePage() {
  return (
    <section className="sec-catalogue">
      <headder className="sec-head-tools">
        <img className="" src={logo} alt="logo" />
        <div className="">
          <input type="search" />
          <button>
            <i className="fa-sharp fa-light fa-magnifying-glass i-btn"></i>
          </button>
        </div>
      </headder>
    </section>
  );
}
