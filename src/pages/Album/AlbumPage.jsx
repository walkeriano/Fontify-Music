import Header from "../../components/Header/Header";
import AlbumHero from "../../components/AlbumHero/AlbumHero";
import "../Album/AlbumPage.css";
import AlbumSongs from "../../components/AlbumSongs/AlbumSongs";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ConstructorAPI from "../../../ConstructorAPI";

export default function AlbumPage() {
  const { id } = useParams();
  const [itemData, setItemData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [albumSongs, setAlbumSongs] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const albumPath = "albums/" + id;
      console.log(id);
      const api = new ConstructorAPI(albumPath);

      try {
        const data = await api.fetchData();
        setItemData(data);
        setAlbumSongs(data.tracks.items);
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
    <>
      <Header />
      <main className="cont-general">
        <AlbumHero itemData={itemData} />
        <AlbumSongs albumSongs={albumSongs} />
      </main>
    </>
  );
}
