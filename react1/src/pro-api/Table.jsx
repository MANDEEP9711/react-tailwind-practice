import React from 'react'
import { NavLink } from 'react-router-dom';
const Table = ({ userData }) => {
  return (
    <>
    <div><NavLink to="/" className="text-lg">back to home</NavLink></div>
    <h1 className='text-2xl font-bold text-center my-4'>User Data</h1>
      <div className='grid grid-cols-3 gap-4 p-4 border-2'>
        {
          userData.map((user,index) => (
            <div key={index} className='border-2 p-4 rounded-lg shadow-lg'>
              <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.age}</p>
          </div>
        ))
      }
    </div>
    </>
  )
} 

export default Table