import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Api from "./pro-api/Api";
import Table from "./pro-api/Table";
import Home from "./pro-api/Home";
import Rout from "./pro-api/Rout";
import { NavLink, Outlet } from "react-router-dom";
import UserEdit from "./pro-api/userEdit";
function App() {
  const [userData, setUserData] = useState([]);
  return (
    <>
      <Api setUserData={setUserData} />
      <Routes>
        <Route path="/" element={<Rout />} />
        <Route path="/home" element={<Home setUserData={setUserData} />} />
        <Route path="/table" element={<Table userData={userData} />} />
        <Route path="/edit/:id" element={<UserEdit />} />
        <Route path="/*" element={<h1 className='text-2xl font-bold text-center my-4'>Page Not Found</h1>} />
      </Routes> 
    </>
  );
}

export default App;
