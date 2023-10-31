import "./SearchPage.css";

import Albums from "../../components/Albums";
import Header from "../../components/header/Header";


export default function SearchPage() {
  return (
    <>
      <Header />
      <main className="content">
        <h1>Results</h1>
        <Albums />
      </main>
    </>
  );
}
