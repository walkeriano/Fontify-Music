
import './SearchInput.css';


export default function SearchInput({handleInputSearch, handleSearch}){
  return (
    <div className="searchField">
      <input type="search" placeholder="Buscar" onChange={handleInputSearch} onKeyDown={handleSearch}/>
      <button onClick={handleSearch}>
        <i className="fa-solid fa-magnifying-glass i-search"></i>
      </button>
    </div>
  )

}