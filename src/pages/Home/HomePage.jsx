import "./HomePage.css";
import Header from "../../components/Header/Header"
import Catalog from "../../components/Catalog/Catalog"
import Hero from "./../../components/Hero"
import { useState, useEffect } from "react";
import Albums from "../../components/albums/Albums"
import Spinner from "../../components/Spinner";

import ConstructorAPI from "../../../ConstructorAPI";

export default function HomePage() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [homeData, setHomeData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [isDoingSearch, setIsDoingSearch] = useState(false);

    const localStorage = window.localStorage;

    function handleHeaderStates(state) {
        setIsDoingSearch(state);
    }

    useEffect(() => {
        const api = new ConstructorAPI();
        api.fetchData('https://api.spotify.com/v1/browse/new-releases?country=US&limit=30').then((data) => {setHomeData(data.albums.items)}).catch().finally(setIsLoading(false))
    }, []);

    async function homeLoad () {

        try{
            let options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
                }
            }
    
            let requestAlbum = await fetch('https://api.spotify.com/v1/browse/new-releases?country=US&limit=30' , options);
            let responseAlbum = await requestAlbum.json();
            if (requestAlbum.ok) {
                console.log(responseAlbum, ' ALBUM FETCH');
                setHomeData(responseAlbum.albums.items);
            }
        } catch(error){
            console.log(error);
        } finally{
            setIsLoading(false);
        }

    }
    // SEARCH FUNCTION
    

    // checkInputValue
    function checkInputValue(input){
      console.log(input);
      setSearchValue(input.target.value.toLowerCase());
      if(input.target.value.trim() == ''){
        setIsDoingSearch(false);
      }
    }

    // checkSearchAction
    function handleHeaderData(data) {
        setSearchResults(data);
    }
    

    return (
        <>
            <Header sendData={handleHeaderData}
            sendIsDoingSearch={handleHeaderStates}
            token={localStorage.getItem("access_token")}
            />
            {
            !isDoingSearch && !isLoading ?
                (<main className="cont-general">
                    <Hero/>
                    <Catalog fetchData={homeData}/>
                    {/* <Albums inputData={searchValue} fetchData={homeData} /> */}
                </main>
                )
            : isDoingSearch && !isLoading ?
                (
                  <main className="content">
                    <h1>Results</h1>
                    <Catalog fetchData={searchResults}/>
                  </main>
                )
            :
                (
                    <Spinner />
                )
            }
        </>
    );
}
