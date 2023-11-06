import "./FormLogin.css";
import { useForm } from "react-hook-form";


function FormLogin() {
  return (
    <form id="welcomeForm">
      <label>
        <input className="main-btn" type="button" value="Registrate gratis"></input>
      </label>
      <label> <html>Nombres y apellidos</html>
        <input className="input-box" type="text" placeholder=""></input>
      </label>
      <label><html>Tu mejor correo</html>
        <input className="input-box" type="email"></input>
      </label>
      <label><html>Contraseña"</html>
        <input className="input-box" type="password"></input>
      </label>
      <label>
        <input className="submit-btn" type="submit" value="Entrar sin registrarse"></input>
      </label>
    </form>
  )
}

export default FormLogin;