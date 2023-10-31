import './Hero.css';
import cover from "./../img/cover.jpg";

export default function Hero(){

  return (
    <section className="cover-bg">
      <img src={cover} alt="img-cover" />
      <div className="cont-name-album">
        <h3>Dangerous</h3>
        <p>Album Más Top - Michael Jackson</p>
      </div>
    </section>
  )
}