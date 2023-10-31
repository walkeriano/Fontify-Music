import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage  from "./pages/Home/HomePage";
import LoginPage  from "./pages/Login/LoginPage";
import CatalogoPage  from "./pages/Catalogo/CatalogoPage";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login-page" element={<LoginPage/>} />
            <Route path="/catalogo" element={<CatalogoPage/>} />
        </Routes>
    );
}
