import Header from "../../components/Header/Header";
import "../Album/AlbumPage.css";
import AlbumHero from "../../components/AlbumHero/AlbumHero";
import ConstructorAPI from "../../../ConstructorAPI";
import { useState, useEffect } from "react";
import Spinner from "./../../components/Spinner/Spinner";
import Catalog from "../../components/Catalog/Catalog";

function AlbumPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [isDoingSearch, setIsDoingSearch] = useState(false);
  const [homeData, setHomeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const homePath = "browse/new-releases?country=US&limit=30";

  useEffect(() => {
    const api = new ConstructorAPI(homePath);
    api
      .fetchData()
      .then((data) => {
        setHomeData(data.albums.items);
      })
      .catch()
      .finally(setIsLoading(false));
  }, []);

  function handleHeaderStates(state) {
    setIsDoingSearch(state);
  }

  function handleHeaderData(data) {
    setSearchResults(data);
  }

  return (
    <section>
      <Header
        sendData={handleHeaderData}
        sendIsDoingSearch={handleHeaderStates}
      />
      {!isDoingSearch && !isLoading ? (
        <main className="cont-general">
          <AlbumHero fetchData={homeData} />
        </main>
      ) : isDoingSearch && !isLoading ? (
        <main className="cont-general">
          <Catalog fetchData={searchResults} />
        </main>
      ) : (
        <Spinner />
      )}
    </section>
  );
}
export default AlbumPage;
