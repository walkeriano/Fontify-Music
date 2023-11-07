import "react";
import { Routes, Route } from "react-router-dom";
import HomePage  from "./pages/Home/HomePage";
import LoginPage  from "./pages/Login/LoginPage";
import AlbumPage from "./pages/Album/AlbumPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login-page" element={<LoginPage/>} />
<<<<<<< HEAD
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/dashboard" element={<DashboardPage/>} />
            <Route path="/detalle-album/:id" element={<AlbumPage/>} />
=======
            <Route path="/album/:id" element={<AlbumPage/>} />
>>>>>>> 94000d2d3d2977b6b2e4cc8c35e9a4ab9634e654
        </Routes>
    );
}
