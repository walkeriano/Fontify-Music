import "./AlbumHero.css";
import coverAlbum from "../../img/taylorSwift.jpeg"

export default function AlbumHero() {
    let albumName = "1989 (Taylor's Version)";
    return (
        <div className= "albumHero">
            <img className="albumPicture" src={coverAlbum} alt="album cover" />
            <h1>{albumName}</h1>
        </div>
    )
}