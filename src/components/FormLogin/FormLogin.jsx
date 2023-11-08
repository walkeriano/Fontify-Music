import "./FormLogin.css";
import logo from "./../../assets/img/logo-frontify.svg";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";

function FormLogin({adminUsers}) {
  const localStorage = window.localStorage;
  
  const [isLogged, setIsLogged] = useState(false);

  useEffect(( ) => {
    validateUser();
  }, []);

  function handleLogin(e){

    e.preventDefault();

    const inputEmail = document.querySelector('#welcome-form #email');
    const inputPassword = document.querySelector('#welcome-form input[type="password"]');

    const userLogin = {
      email: inputEmail.value,
      password: inputPassword.value
    }

    const usuarioAdmin = adminUsers.find((user) => {
      return userLogin.email === user.email && userLogin.password === user.password;
    });

    if(usuarioAdmin){
      localStorage.setItem('user', JSON.stringify(usuarioAdmin));
      setIsLogged(true);
    } else{
      setIsLogged(false);
    }


    validateUser();

  }

  function validateUser(){

    if(JSON.parse(localStorage.getItem('user'))){
      setIsLogged(true);
    } else{
      setIsLogged(false);
    }

  }

  function handleLogout(){
    localStorage.removeItem('user');
    validateUser();
  }



  return (
    <div id="container">
      <form id="welcome-form" onSubmit={handleLogin}>
        <img id="logo-img" src={logo} alt="" />
        <br></br>

        <Link to={`/`} className="link">
          <button id="register-button">Entrar sin registrarse</button>
        </Link>
  
        <label htmlFor="email"></label>
        <input type="email" className="email-input" id="email" placeholder="Correo electronico"/>
        
        <label htmlFor="password"></label>
        <input type="password" className="password-input" id="password" placeholder="Contraseña" required/>

        <button type='submit' id="login-button">Login</button>

        { isLogged == true
        ? (<><h1>LOGUEADO</h1><button id="logout" onClick={handleLogout}>Logout</button></>)
        : (<h2>NO ESTÁS LOGUEADO</h2>)
        }


    </form>


  </div>
  );
}

export default FormLogin;
