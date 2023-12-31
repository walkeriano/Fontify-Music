import { useNavigate } from "react-router-dom";
import "./DashboardPage.css";
import AdminDashboard from "../../components/AdminDashboard/AdminDashboard";
import Catalog from "../../components/Catalog/Catalog";
import ConstructorAPI from "../../../ConstructorAPI";
import Spinner from "./../../components/Spinner/Spinner";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [isDoingSearch, setIsDoingSearch] = useState(false);

  const [homeData, setHomeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [adminSearch, setAdminSearch] = useState(true);
  const [adminCatalog, setAdminCatalog] = useState(true);
  const [isLogged, setIsLogged] = useState(null);
  

  const homePath = "browse/new-releases?country=US&limit=30";

  useEffect(() => {
    validateUser();
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

  function addToHomeData(newAlbum) {
    const isAlbumInHomeData = homeData.some(
      (album) => album.id === newAlbum.id
    );

    if (!isAlbumInHomeData) {
      const updatedHomeData = [...homeData, newAlbum];
      setHomeData(updatedHomeData);
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    validateUser();
  }, []);

  function validateUser() {
    if (localStorage.getItem("user")) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
      navigate("/");
    }
  }

  return (
    <section className="home-dashboard">
      <AdminDashboard />
      <Header
        sendData={handleHeaderData}
        sendIsDoingSearch={handleHeaderStates}
      />
      {!isDoingSearch && !isLoading ? (
        <main className="cont-general">
          <Catalog fetchData={homeData} adminCatalog={adminCatalog} />
        </main>
      ) : isDoingSearch && !isLoading ? (
        <main className="cont-general">
          <Catalog
            fetchData={searchResults}
            adminSearch={adminSearch}
            addToHomeData={addToHomeData}
          />
        </main>
      ) : (
        <Spinner />
      )}
    </section>
  );
}

