import { useNavigate } from "react-router-dom";
import "./DashboardPage.css";
import { useEffect, useState } from "react";

export default function DashboardPage(){

    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        validateUser();
    }, []);

    function validateUser(){
        if(localStorage.getItem('user')){
            setIsLogged(true);
            console.log('Usuario logueado. DESDE VALIDATE USER');
        } else{
            setIsLogged(false);
            console.log('Usuario NO logueado. DESDE VALIDATE USER')
            navigate('/');
        }
    }



    return (
        <h1>helloworld</h1>
    );
}