import "./HomePage.css";
import Header from "../../components/Header/Header";
import Catalog from "../../components/Catalog/Catalog";
import Hero from "../../components/Hero/Hero";
import Spinner from './../../components/Spinner/Spinner';
import ConstructorAPI from "../../../ConstructorAPI";
import { useState, useEffect } from "react";

export default function HomePage() {
  
  const [searchResults, setSearchResults] = useState([]);
  const [isDoingSearch, setIsDoingSearch] = useState(false);

  const [homeData, setHomeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setUser] = useState(true);

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
    <>
      <Header
        sendData={handleHeaderData}
        sendIsDoingSearch={handleHeaderStates}
        admin={admin}
      />
      {!isDoingSearch && !isLoading ? (
        <main className="cont-general">
          <Hero />
          <Catalog fetchData={homeData} />
        </main>
      ) : isDoingSearch && !isLoading ? (
        <main className="cont-general">
          <Catalog fetchData={searchResults} />
        </main>
      ) : (
        <Spinner />
      )}
    </>
  );
}
