
class ConstructorAPI{
  constructor(path){
    this.path = path;
    this.baseUrl = 'https://api.spotify.com/v1';
    this.localStorage = window.localStorage;
  }

  async getToken() {
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
          this.localStorage.setItem('access_token', response.access_token);
        }
    } catch (error) {
        console.log(error);
    }
  }

  async fetchData(){
    
    // el parámetro path se usará más adelante cuando usemos la api de spotify
    this.getToken();

    try{
      let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.localStorage.getItem('access_token')
        }
    }

      const request = await fetch(`${this.baseUrl}/${this.path}`, options);

      if(!request.ok){
        console.log('Error desde la request');
        return;
      }

      const response = await request.json();
      return response;

    } catch(error){
      throw new Error('Error al obtener dados de la API de Spotify: ' + error);
    }
  }

}

export default ConstructorAPI;