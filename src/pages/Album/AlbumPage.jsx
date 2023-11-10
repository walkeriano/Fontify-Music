import Header from "../../components/Header/Header";
import AlbumHero from "../../components/AlbumHero/AlbumHero";
import "../Album/AlbumPage.css";
import AlbumSongs from "../../components/AlbumSongs/AlbumSongs";
import Catalog from "../../components/Catalog/Catalog";
import Spinner from "../../components/Spinner/Spinner";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ConstructorAPI from "../../../ConstructorAPI";

export default function AlbumPage() {
  const { id } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [isDoingSearch, setIsDoingSearch] = useState(false);
  const [itemData, setItemData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [albumSongs, setAlbumSongs] = useState([]);
  const [admin, setAdmin] = useState(true);

  function handleHeaderStates(state) {
    setIsDoingSearch(state);
  }

  function handleHeaderData(data) {
    setSearchResults(data);
  }

  useEffect(() => {
    const fetchItem = async () => {
      const albumPath = "albums/" + id;
      console.log(id);
      const api = new ConstructorAPI(albumPath);

      try {
        const data = await api.fetchData();
        setItemData(data);
        setAlbumSongs(data.tracks.items);
      } catch (error) {
        console.error("Error fetching item data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  return (
    <>
      <Header
        sendData={handleHeaderData}
        sendIsDoingSearch={handleHeaderStates}
        admin={admin}
      />
      {!isDoingSearch && !isLoading ? (
        <main className="cont-general">
          <AlbumHero itemData={itemData} />
          <AlbumSongs albumSongs={albumSongs} />
        </main>
      ) : isDoingSearch && !isLoading ? (
        <main className="cont-general">
          <div className="results-search">Resultados de busqueda:</div>
          <Catalog fetchData={searchResults} />
        </main>
      ) : (
        <Spinner />
      )}
    </>
  );
}
