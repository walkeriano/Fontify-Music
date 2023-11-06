import "./HomePage.css";
import Header from "../../components/Header/Header"
import Catalog from "../../components/Catalog/Catalog"
import Hero from "./../../components/Hero"
import { useState, useEffect } from "react";
import Albums from "../../components/albums/Albums"
import Spinner from "../../components/Spinner";

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

        async function getToken() {
            //const AUTH_CODE = 'AQBdi9nPXCB_C1VSd3t2bS2EiHuv-HrxlEkPDBSoIuA2dNHFhknKLVZ-DnLLmUK1EfuuqDHy5aDbaShqOi5E7h6XquEVkfYofcqAb1yvQZoFYh63-zztPcT6fst3k3kuVkGSkmdt-NLvGrh-pC_Rm_wvk2PP1fDSowUEGsIm8bQNqvU8xp08mlLHem4';
            const CLIENT_ID = 'dc39fccfb0f34a0f93bd97639a8344c8';
            const CLIENT_SECRET = '9ae3c3c13d244a27ac7bd05793d085ea';
            //const REDIRECT_URI = 'http://localhost:5173';
            const URL = 'https://accounts.spotify.com/api/token';

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
            }

            try {
                const request = await fetch(URL, options);
                const response = await request.json();

                if (request.ok) {
                    setAccessToken(response.access_token);
                    localStorage.setItem('access_token', response.access_token);
                }
            } catch (error) {
                console.log(error);
            } finally {
                homeLoad();
            }
        }

        getToken();

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
