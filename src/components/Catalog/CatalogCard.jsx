import './CatalogCard.css';

import { Link } from "react-router-dom"

export default function Card({id, src, name, artist, albumType, numTracks, releaseDate}){

  return(
    <Link
      to={`/album/${id}`}
      className="album-card"
    >
      <img src={src} alt="img-album" />
      <div className="album-info">
        <p>{name}</p>
        <p>{artist}</p>
      </div>
      <i className="fa-solid fa-circle-play i-music"></i>
      <ul className="info-hover">
        <li className="info-item">
          <p>{albumType}</p>
          <i className="fa-solid fa-compact-disc"></i>
        </li>
        <li className="info-item">
          <p>{numTracks} Songs</p>
          <i className="fa-solid fa-music "></i>
        </li>
        <li className="info-item">
          <p>{releaseDate}</p>
          <i className="fa-regular fa-calendar-days"></i>
        </li>
      </ul>
      </Link>
  )
}