import React from 'react'
import {NavLink,Outlet } from 'react-router-dom';
import Table from './Table';
import Home from './Home';
const Rout = () => {
  return (
    <>
      <nav className="flex justify-between p-4 bg-gray-800 text-white">
        <div className="font-bold">LOGO</div>
        <div className="flex gap-4">
          <NavLink to="/home" className="text-lg">Home</NavLink>
          <NavLink to="/table" className="text-lg">User Data</NavLink>
        </div>
      </nav>
      <div className="p-4"><Outlet /></div>
    </>
  )
}

export default Rout