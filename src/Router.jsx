import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage  from "./pages/Home/HomePage";
import LoginPage  from "./pages/Login/LoginPage";
import SearchPage  from "./pages/Search/SearchPage";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login-page" element={<LoginPage/>} />
            <Route path="/search" element={<SearchPage/>} />
        </Routes>
    );
}
