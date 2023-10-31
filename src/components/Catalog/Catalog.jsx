import "./Catalog.css";
import React, { useState, useEffect } from "react";

export default function Catalog() {
  const [data, setData] = useState([]);

  const url = "http://localhost:3000/items";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="cont-songs" >
      <h3>Catalog</h3>
      <div  className="songs-slider" >
        {data.map((item) => (
          <div className="song-card" key={item.id}>
            <img src={item.images[0].url} alt="img-song" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
