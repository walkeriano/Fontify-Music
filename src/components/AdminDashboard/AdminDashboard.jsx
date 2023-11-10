import { useEffect, useState } from "react";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {

  const localStorage = window.localStorage;
  const [isLogged, setIsLogged] = useState(null);
  const navigate = useNavigate();
  const userItem = localStorage.getItem('user');

  useEffect(() => {
    validateUser();
  }, []);

  function validateUser(){
    if(JSON.parse(localStorage.getItem('user'))){
      setIsLogged(true);
    } else{
      setIsLogged(false);
    }
  }

  function handleLogout(){
    localStorage.removeItem('user');
    navigate('/home');
  }

  return (
    <div className="tools-admin">
      <div className="user-rol">
        <i className="fa-solid fa-circle-user"></i>
        <div className="user-info">
          <div className="datos">
            <p className="title">Correo Usuario:</p>
            <p className="name-user">{userItem ? JSON.parse(localStorage.getItem('user')).email : "email"}</p>
          </div>
        </div>
      </div>
      <i className="fa-solid fa-gear i-tools"></i>
      <div onClick={handleLogout} className="i-sesion">
        <i className="fa-solid fa-xmark"></i>
      </div>
      <span></span>
    </div>
  );
}
