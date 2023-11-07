import Header from "../../components/Header/Header";
import "../Album/AlbumPage.css";
import AlbumHero from "../../components/AlbumHero/AlbumHero";
import Catalog from "../../components/Catalog/Catalog";

import { useState } from "react";

function AlbumPage() {
    const [searchResults, setSearchResults] = useState([]);
    const [isDoingSearch, setIsDoingSearch] = useState(false);

    function handleHeaderStates(state) {
        setIsDoingSearch(state);
      }
    
    function handleHeaderData(data) {
        setSearchResults(data);
    }
    
    return (
        <>
            <Header sendData={handleHeaderData} sendIsDoingSearch={handleHeaderStates} />
            <AlbumHero />
            {isDoingSearch
            ?  (<Catalog fetchData={searchResults} />)
            :  (<h1>NADA</h1>)
            }
        </>

    );
}
export default AlbumPage

