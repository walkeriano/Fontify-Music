import "react";
import { Routes, Route } from "react-router-dom";
import HomePage  from "./pages/Home/HomePage";
import LoginPage  from "./pages/Login/LoginPage";
import SearchPage  from "./pages/Search/SearchPage";
import AlbumPage from "./pages/Album/AlbumPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login-page" element={<LoginPage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/dashboard" element={<DashboardPage/>} />
            <Route path="/detalle-album/:id" element={<AlbumPage/>} />
        </Routes>
    );
}
