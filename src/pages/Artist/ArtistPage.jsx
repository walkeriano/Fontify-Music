import React, { useState, useEffect } from "react";
import "./ArtistPage.css";
import Artist from "../../components/Artist";
import ConstructorAPI from "../../../ConstructorAPI";

export default function ArtistPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [isDoingSearch, setIsDoingSearch] = useState(false);
  const [homeData, setHomeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const homePath = "artists/0TnOYISbd1XYRBk9myaseg";

  useEffect(() => {
    const api = new ConstructorAPI(homePath);
    api
      .fetchData()
      .then((data) => {
        console.log(data);
        setHomeData(data.genres.id);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  function handleHeaderStates(state) {
    setIsDoingSearch(state);
  }

  function handleHeaderData(data) {
    setSearchResults(data);
  }

  return (
    <>
      <Artist />
      {/* Aquí podrías renderizar el contenido de ArtistPage, por ejemplo, la lista de resultados o la información de búsqueda */}
    </>
  );
}
