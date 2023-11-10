import Header from "../../components/Header/Header";
import AlbumHero from "../../components/AlbumHero/AlbumHero"; 
import "../Album/AlbumPage.css";
import AlbumSongs from "../../components/AlbumSongs/AlbumSongs";

export default function AlbumPage() {
  return (
    <>
      <Header />
      <main className="cont-general">
        <AlbumHero />
        <AlbumSongs />
      </main>
    </>
  );
}
