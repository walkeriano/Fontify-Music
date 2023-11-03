import './Albums.css';

import ConstructorAPI from '../../../ConstructorAPI';
import AlbumCard from './AlbumCard';

import { useEffect, useState } from 'react';

export default function Albums({inputData, fetchData}){

  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const api = new ConstructorAPI();

  // useEffect(() => {

  // }, []);


  useEffect(() => {

    // console.log('Renderizando los datos del fetch desde ALBUMS');
    // console.log(fetchData, 'DESDE ALBUMS COMPONENT');
    setData(fetchData);

  }, [fetchData]);

  return (
    <section className="albums">
      {
        data.map(album => {
          return <AlbumCard key={album.id} data-id={album.id} src={album.images[0].url} title={album.name} artist={album.artists[0].name} genere="POP" year={album.release_date} />
        })
      }
    </section>
  )

}