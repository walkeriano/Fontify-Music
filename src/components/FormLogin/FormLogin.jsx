import "./FormLogin.css";
import { useForm } from "react-hook-form";


function FormLogin() {
  return (
    <form id="welcomeForm">
      <label>
        <input className="main-btn" type="button" value="Registrate gratis"></input>
      </label>
      <label>
        <input className="second-btn" type="text" placeholder="Nombres y apellidos..."></input>
      </label>
      <label>
        <input className="second-btn" type="email" placeholder="Tu mejor correo..."></input>
      </label>
      <label>
        <input className="second-btn" type="password" placeholder="Contraseña"></input>
      </label>
      <label>
        <input className="third-btn" type="submit" value="Entrar sin registrarse"></input>
      </label>
    </form>
  )
}

export default FormLogin;