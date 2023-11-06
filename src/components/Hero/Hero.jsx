import './Hero.css';
import cover from "./../../assets/img/cover.jpg";

export default function Hero(){

  return (
    <section className="hero">
      <img src={cover} alt="img-cover" />
      <div className="hero-album-name">
        <h3>Dangerous</h3>
        <p>Album Más Top - Michael Jackson</p>
      </div>
    </section>
  )
}