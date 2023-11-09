import "./AdminDashboard.css";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="tools-admin">
      <div className="user-rol">
        <i className="fa-solid fa-circle-user"></i>
        <div className="user-info">
          <div className="datos">
            <p className="title">Correo Usuario:</p>
            <p className="name-user">awalkerbarreda@gmail.com</p>
          </div>
          <div className="datos">
            <p className="title">Nombre de usuario:</p>
            <p className="name-user">Alexander Walker</p>
          </div>
        </div>
      </div>
      <i className="fa-solid fa-gear i-tools"></i>
      <Link to="/" className="i-sesion">
        <i className="fa-solid fa-xmark"></i>
      </Link>
      <span></span>
    </div>
  );
}
