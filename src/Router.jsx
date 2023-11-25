import "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import AlbumPage from "./pages/Album/AlbumPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";


export function Router() {

    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/album/:id" element={<AlbumPage/>} />
            <Route path='/dashboard' element={<DashboardPage/>} />
        </Routes>
    );
}
