import "./SearchPage.css";

import Albums from "../../components/albums/Albums";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";


export default function SearchPage() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const localStorage = window.localStorage;

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
        // console.log(localStorage.getItem('access_token'), 'from getItem of localstorage');
        // console.log(accessToken, ' from useSTATE');
      }
    }

    getToken();


  }, []);


  // SEARCH FUNCTION
  async function search() {
    console.log('Search for ' + searchValue);

    // Get request using search to get Album ID

    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }

    let requestAlbum = await fetch('https://api.spotify.com/v1/search?q=' + searchValue + '&type=album', options);
    let responseAlbum = await requestAlbum.json();

    if (requestAlbum.ok) {
      console.log(responseAlbum, ' ALBUM FETCH');
      setSearchResults(responseAlbum.albums.items);
    }

  }

  return (
    <>
      <Header
        handleInputSearch={input => setSearchValue(input.target.value.toLowerCase())}
        handleSearch={e => {
          if (e.key == 'Enter') {
            // console.log('Has presionado ENTER');
            search();
          }

          if (e.type == 'click') {
            // console.log('Has hecho click en el BUTTON');
            search();
          }

          console.log(e);
        }}
      />
      <main className="content">
        <h1>Results</h1>
        <Albums inputData={searchValue} fetchData={searchResults} />
      </main>
    </>
  );
}
