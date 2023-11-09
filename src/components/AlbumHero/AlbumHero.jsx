import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ConstructorAPI from "../../../ConstructorAPI";
import "../AlbumHero/AlbumHero.css";

function AlbumHero() {
  const { id } = useParams();
  const [itemData, setItemData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      const albumPath = "albums/" + id;
      console.log(id);
      const api = new ConstructorAPI(albumPath);

      try {
        const data = await api.fetchData();
        setItemData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching item data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="hero">
      <img src={itemData.images[0].url} className= "imageHero"/>
      <h1>{itemData.name}</h1>
      <p>{itemData.artists[0].name}</p>
      <h2>Album Tracks</h2>
      <p>{itemData.tracks.items[0].name}</p>
    </div>
  );
}

export default AlbumHero;
