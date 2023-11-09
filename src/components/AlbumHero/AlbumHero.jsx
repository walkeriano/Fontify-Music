import "./AlbumHero.css";
import coverAlbum from "../../assets/img/taylorSwift.jpeg";
import { useState, useEffect } from "react";

export default function AlbumHero({ fetchData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(fetchData);
  }, [fetchData]);

  return (
    <section className="albumHero">
      {data.map((item) => (
        <div key={item.id}>
          <img
            className="albumPicture"
            src={item.images[0].url}
            alt="album cover"
          />
          <p>{item.name}</p>
          <p>{item.artists[0].name}</p>
        </div>
      ))}
    </section>
  );
}
