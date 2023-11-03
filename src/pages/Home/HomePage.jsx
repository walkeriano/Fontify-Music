import "./HomePage.css";
import Header from "../../components/header/Header"
import Catalog from "../../components/Catalog/Catalog"
import Hero from "./../../components/Hero"

export default function HomePage() {
  return (
    <section className="cont-general">
        <Header/>
        <Hero />
        <Catalog />
    </section>
  );
}
