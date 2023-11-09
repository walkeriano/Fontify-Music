import "./FormLogin.css";
import logo from "./../../assets/img/logo-frontify.svg";
import { useState , useEffect, createElement} from "react";
import { useNavigate } from "react-router-dom";

function showAlertMessage(message, parentEl){

  const alert = createElement('p', {className: 'alertError-form'}, message);
  if(parentEl.querySelector('p.alertError-form')){
    return;
  }

  parentEl.appendChild(alert);

}

function FormLogin({adminUsers}) {
  const localStorage = window.localStorage;
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(( ) => {
    validateUser();
    if(isLogged){
      navigate('/dashboard');
    }
  }, []);

  useEffect(() => {
    if(isLogged){
      navigate('/dashboard');
    }
  }, [isLogged]);


  function handleLogin(e){

    e.preventDefault();
    console.log(e);

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
      validateUser();
    } else{
      validateUser();
      showAlertMessage('El usuario/constraseña no es correcto.', e.target);
    }



  }

  function validateUser(){

    if(JSON.parse(localStorage.getItem('user'))){
      setIsLogged(true);
      console.log('Usuario ADMIN logueado')
    } else{
      setIsLogged(false);
      console.log('Usuario NO LOGUEADO');
    }

  }



  return (
    <div id="container">
      <form id="welcome-form" onSubmit={handleLogin}>
        <img id="logo-img" src={logo} alt="" />
        <br></br>

        <button id="register-button" onClick={() => navigate('home')} >Entrar sin registrarse</button>
  
        <label htmlFor="email"></label>
        <input type="email" className="email-input" id="email" placeholder="Correo electronico"/>
        
        <label htmlFor="password"></label>
        <input type="password" className="password-input" id="password" placeholder="Contraseña" required/>

        <button type='submit' id="login-button">Login</button>

    </form>


  </div>
  );
}

export default FormLogin;
