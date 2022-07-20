import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/UI/Navigation";
import PageNotFound from "./pages/PageNotFound";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Dashboard from "./components/Dashboard";
import Expenses from "./components/Expenses";
import ProtectedRoute from "./components/Authentication/ProtectedRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to={sessionStorage.getItem("isLoggedIn") ? "/dashboard" : "/login"}
          />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Navigation page={<Dashboard />} />} />
      </Route>
      <Route path="/expenses" element={<ProtectedRoute />}>
        <Route exact path="/expenses" element={<Navigation page={<Expenses />} />} />
      </Route>
      <Route path="*" element={<Navigation page={<PageNotFound />} />} />
    </Routes>
  </BrowserRouter>
);
