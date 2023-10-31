import './Header.css';
import logo from './../../img/logo-frontify.svg';

import SearchInput from './SearchInput';
import LoginBtn from './LoginBtn';


export default function Header(){

  return (
    <header className="mainHeader">
      <img className="logo-frontify" src={logo} alt="Logo Frontify" />
      <div className="right">
        <SearchInput />
        <LoginBtn />
      </div>
    </header>
  )

}