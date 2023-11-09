import "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import AlbumPage from "./pages/Album/AlbumPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/album/:id" element={<AlbumPage />} />
    </Routes>
  );
}
