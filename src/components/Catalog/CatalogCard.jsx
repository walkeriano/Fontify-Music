import "./CatalogCard.css";
import { Link } from "react-router-dom";

export default function Card({
  id,
  src,
  name,
  artist,
  albumType,
  numTracks,
  releaseDate,
  adminSearch,
  adminCatalog,
  addToHomeData,
}) {

  const handleAddToHomeData = () => {
    const newData = {
      id,
      src,
      name,
      artist,
      albumType,
      numTracks,
      releaseDate,
    };
    addToHomeData(newData);
  };

  return (
    <section  className="album-card">
      <Link to={`/album/${id}`} className="box-img">
        <img src={src} alt="img-album" />
      </Link>
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
      {adminSearch && (
        <section className="admin-btns" >
          <button onClick={handleAddToHomeData}><i className="fa-solid fa-heart"></i></button>
          <button><i className="fa-solid fa-trash-can"></i></button>
        </section>
      )}
      {adminCatalog && (
        <section className="admin-btns" >
          <button><i className="fa-solid fa-trash-can"></i></button>
        </section>
      )}
    </section>
  );
}
