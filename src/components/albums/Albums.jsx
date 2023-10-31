import './Albums.css';

import cover from './../../assets/covers/rosalia-el_mal_querer.jpeg';

import AlbumCard from './AlbumCard';

export default function Albums(){

  const album1 = {
    src: cover,
    title: 'EL MAL QUERER',
    artist: 'Rosalía',
    genere: 'Pop',
    year: 2018
  }

  return (
    <section className="albums">
      <AlbumCard src={album1.src} title={album1.title} artist={album1.artist} genere={album1.genere} year={album1.year}/>
      <AlbumCard src={album1.src} title={album1.title} artist={album1.artist} genere={album1.genere} year={album1.year}/>
      <AlbumCard src={album1.src} title={album1.title} artist={album1.artist} genere={album1.genere} year={album1.year}/>
      <AlbumCard src={album1.src} title={album1.title} artist={album1.artist} genere={album1.genere} year={album1.year}/>
      <AlbumCard src={album1.src} title={album1.title} artist={album1.artist} genere={album1.genere} year={album1.year}/>
      <AlbumCard src={album1.src} title={album1.title} artist={album1.artist} genere={album1.genere} year={album1.year}/>
      <AlbumCard src={album1.src} title={album1.title} artist={album1.artist} genere={album1.genere} year={album1.year}/>
      <AlbumCard src={album1.src} title={album1.title} artist={album1.artist} genere={album1.genere} year={album1.year}/>
    </section>
  )

}