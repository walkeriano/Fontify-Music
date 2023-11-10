import "./Hero.css";
import { useState, useEffect, useRef } from "react";
import ConstructorAPI from "../../../ConstructorAPI";

export default function Hero() {
  const [heroData, setHeroData] = useState([]);
  let container = useRef(null);

  const heroPath = "artists/3fMbdgg4jU18AjLCKBhRSm/albums?limit=5";

  useEffect(() => {
    const api = new ConstructorAPI(heroPath);
    api
      .fetchData()
      .then((data) => {
        setHeroData(data.items);
      })
      .catch()
      .finally();
  }, []);

  const left = () => {
    if (container.current) {
      container.current.scrollLeft -= window.innerWidth;
    }
  };

  const right = () => {
    if (container.current) {
      container.current.scrollLeft += window.innerWidth;
    }
  };

  return (
    <section className="body-hero">
      <div className="container-btn">
        <button onClick={left} className="btn-arrow">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={right} className="btn-arrow">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <section ref={container} className="hero">
        {heroData
          .slice()
          .reverse()
          .map((item) => (
            <div key={item.id} className="item-hero">
              <img src={item.images[0].url} alt="img-cover" />
              <div className="hero-album-name">
                <h3>{item.name}</h3>
                <p>Albums Más Top - {item.artists[0].name}</p>
              </div>
            </div>
          ))}
      </section>
    </section>
  );
}
