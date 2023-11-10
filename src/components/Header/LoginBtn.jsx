import './LoginBtn.css';
import { useNavigate } from 'react-router-dom';

export default function LoginBtn(){

  const navigate = useNavigate();

  return (
    <button className="loginBtn" onClick={() => navigate('/')}>Login</button>
  )
}