import "../AlbumHero/AlbumHero.css";

function AlbumHero({ itemData }) {
  return (
    <section className="cont-album-hero">
      <img src={itemData.images[0].url} className="image-hero" />
      <div className="cont-info-album">
        <h2>{itemData.name}</h2>
        <p>{itemData.artists[0].name}</p>
      </div>
    </section>
  );
}

export default AlbumHero;
