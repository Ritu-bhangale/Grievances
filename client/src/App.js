import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./pages/login/Login";
import Register from "./pages/register/register";
import GrievanceForm from "./pages/student/form/form";
import Dashboard from "./pages/student/dashboard";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/form" element={<GrievanceForm/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
