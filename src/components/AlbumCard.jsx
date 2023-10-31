
import './AlbumCard.css';

export default function AlbumCard({src, title, artist, genere, year}){

  return (
    <article className="album">
      <img src={src} />
      <h4>{title}</h4>
      <h3>{artist}</h3>
      <p><span>{genere}</span><span>*</span><span>{year}</span></p>
    </article>
  )
}