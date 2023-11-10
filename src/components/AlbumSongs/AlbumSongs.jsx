import "../AlbumSongs/AlbumSongs.css";

function AlbumSongs({ albumSongs }) {
  const convertMsToMinSec = (milliseconds) => {
    const totalSeconds = milliseconds / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }; 

  return (
    <section className="cont-general-album">
      <div className="info-songs">
        <p>Tracks</p>
        <i className="fa-regular fa-clock"></i>
      </div>
      <ul className="cont-album-songs">
        {albumSongs.map((item) => (
          <li key={item.id}>
            <div className="name-song">
              <i className="fa-regular fa-circle-play"></i>
              <p>{item.name}</p>
            </div>
            <p className="time-song" >{convertMsToMinSec(item.duration_ms)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AlbumSongs;
