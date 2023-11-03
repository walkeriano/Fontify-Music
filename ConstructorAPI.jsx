
class ConstructorAPI{
  constructor(baseUrl){
    this.baseUrl = baseUrl || 'http://localhost:3000/items';
  }

  async fetchData(){
    
    // el parámetro path se usará más adelante cuando usemos la api de spotify
    try{
      const request = await fetch(`${this.baseUrl}`);

      // Descomentar el fetch comentado para poder hacer un fetch por cada path instanciado
      // const request = await fetch(`${this.baseUrl}/${path}`);

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