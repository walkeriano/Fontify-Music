import "./HomePage.css";
import Header from "../../components/Header/Header";
import Catalog from "../../components/Catalog/Catalog";
import Hero from "./../../components/Hero";
import { useState, useEffect } from "react";
import Albums from "../../components/albums/Albums";
import Spinner from "../../components/Spinner";

import ConstructorAPI from "../../../ConstructorAPI";

export default function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const [accessToken, setAccessToken] = useState(null);
  const [homeData, setHomeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isDoingSearch, setIsDoingSearch] = useState(false);

  const localStorage = window.localStorage;

  const homePath = 'browse/new-releases?country=US&limit=30';
  const searchPath = 'search?q=' + {inputValue} + '&type=album';

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
        token={localStorage.getItem("access_token")}
      />
      {!isDoingSearch && !isLoading ? (
        <main className="cont-general">
          <Hero />
          <Catalog fetchUrl={homePath}/>
          {/* <Albums inputData={searchValue} fetchData={homeData} /> */}
        </main>
      ) : isDoingSearch && !isLoading ? (
        <main className="content">
          <h1>Results</h1>
          <Catalog fetchUrl={searchPath} />
        </main>
      ) : (
        <Spinner />
      )}
    </>
  );
}
