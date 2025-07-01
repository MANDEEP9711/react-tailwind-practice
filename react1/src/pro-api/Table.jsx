import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
const Table = ({ userData }) => {
  const navigate = useNavigate();
  const userDelete = async (id) => {
    const url = `http://localhost:3000/users/${id}`;
    let response = await fetch(url, {
      method: 'DELETE',
    });
    response = await response.json();
    if (response) {
      window.location.reload();
    }
  }
  const userEdit=(id)=>{
    navigate(`/edit/${id}`);
  }
  return (
    <>
    <div><NavLink to="/" className="text-lg">back to home</NavLink></div>
    <h1 >User Data</h1>
      <div className='gap-4'>
        {
          userData.map((user,index) => (
            <div key={index} className='flex items-center justify-between border p-4 m-2 rounded-lg shadow-lg'>
              <h2>{user.name}</h2>
              <p>{user.email}</p> 
              <p>{user.phone}</p>
              <p>{user.age}</p>
              <button onClick={()=>userDelete(user.id)} className='bg-blue-200 text-black px-4 py-2 rounded'>delete</button>
              <button onClick={()=>userEdit(user.id)} className='bg-green-200 text-black px-4 py-2 rounded'>edit</button>
            </div>
        ))
      }
    </div>
    </>
  )
} 

export default Table