import "./FormLogin.css";
import logo from "./../../assets/img/logo-frontify.svg";
import { useState } from "react";

const handleSubmit = (e) => {
  e.preventDefault()
}

function FormLogin() {
  const [email, setEmail] = useState("")

  return (
    <div id="container">
      <form id="welcome-form" onSubmit={handleSubmit}>
        
        <img id="logo-img" src={logo} alt="" />
       
        <br></br>
  
        <button id="register-button">Entrar sin registrarse</button>
  
        <label htmlFor="email"></label>
        <input type="email" className="email-input" id="email" placeholder="Correo electronico"/>
        
        <label htmlFor="password"></label>
        <input type="password" className="password-input" id="password" placeholder="Contraseña" required/>
  
      <button id="login-button">Login</button>
    </form>
  </div>
  );
}

export default FormLogin;
