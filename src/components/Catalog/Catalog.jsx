import "./Catalog.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Catalog({fetchData}) {

  const [data, setData] = useState([]);


  useEffect(() => {

    setData(fetchData);

  }, [fetchData]);

  return (
    <section className="cont-songs">
      <p className="title-cat">Álbums Disponibles</p>
      <div className="songs-slider">
        {data.map((item) => (
          <Link
            to={`/detalle-album/${item.id}`}
            className="song-card"
            key={item.id}
          >
            <img src={item.images[0].url} alt="img-song" />
            <div className="song-info">
              <p>{item.name}</p>
              <p>{item.artists[0].name}</p>
            </div>
            <i className="fa-solid fa-circle-play i-music"></i>
            <ul className="info-hover">
              <li className="info-item">
                <p>{item.type}</p>
                <i className="fa-solid fa-compact-disc"></i>
              </li>
              <li className="info-item">
                <p>{item.total_tracks} Songs</p>
                <i className="fa-solid fa-music "></i>
              </li>
              <li className="info-item">
                <p>{item.release_date}</p>
                <i className="fa-regular fa-calendar-days"></i>
              </li>
            </ul>
          </Link>
        ))}
      </div>
    </section>
  );
}
