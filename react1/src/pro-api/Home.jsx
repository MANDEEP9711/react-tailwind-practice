import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = ({ setUserData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const createUser=async (e)=>{
    e.preventDefault();
    const url="http://localhost:3000/users";
    let responce=await fetch(url,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          age
        })
      });
    responce=await responce.json();
    if(responce){
      alert("User added successfully");
      setUserData((prevData) => [...prevData, responce]);
      setName('');
      setEmail('');
      setPhone('');
      setAge('');
    }
    console.log(responce);
    
  }

  return (
  <div className="max-w-md mx-auto">
    <div><NavLink to="/" className="text-lg">back to home</NavLink></div>
    <h2 className="text-2xl font-bold mb-4">Enter User Data</h2>
    <form className="space-y-4">
    <input type="text" placeholder="Name" className="w-full p-2 border" 
    onChange={(event)=>setName(event.target.value)}/>
    <input type="email" placeholder="Email" className="w-full p-2 border" 
    onChange={(event)=>setEmail(event.target.value)}/>
    <input type="text" placeholder="Phone" className="w-full p-2 border" 
    onChange={(event)=>setPhone(event.target.value)}/>
    <input type="number" placeholder="Age" className="w-full p-2 border" 
    onChange={(event)=>setAge(event.target.value)}/>
    <button className="bg-blue-600 text-white px-4 py-2 rounded w-full" onClick={createUser}>Add user</button>
    </form>
  </div>
  );
};

export default Home;