
import './SearchInput.css';

export default function SearchInput(){

  return (
    <div className="input-search">
      <input type="text" placeholder="Introduce tu búsqueda" />
      <i className="fa-solid fa-magnifying-glass icon-search"></i>
    </div>
  )
}