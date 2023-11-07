import "./Catalog.css";
import { useState, useEffect } from "react";
import CatalogCard from './CatalogCard';

export default function Catalog({ fetchData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(fetchData);
  }, [fetchData]);

  return (
    <section className="catalog">
      <div className="catalog-container">
        {data.map((item) => (
          <CatalogCard
            key={item.id}
            id={item.id}
            src={item.images[0].url}
            name={item.name}
            artist={item.artists[0].name}
            albumType={item.type}
            numTracks={item.total_tracks}
            releaseDate={item.release_date}
            />
        ))}
      </div>
    </section>
  );
}
