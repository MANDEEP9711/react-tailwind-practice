import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserEdit = () => {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`);
      if (!response.ok) throw new Error('Failed to fetch user');
      const data = await response.json();
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
      setAge(data.age);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedUser = { name, email, phone, age };

    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
      });

      if (!response.ok) throw new Error('Failed to update user');

      alert('User updated successfully!');
    } catch (err) {
      console.error('Update error:', err);
    }
  };

  return (
    <div>
      <h1 className='text-2xl font-bold text-center my-4'>Edit User {id}</h1>
      <form onSubmit={handleUpdate} className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" className="w-full p-2 border" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Phone" className="w-full p-2 border" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="number" placeholder="Age" className="w-full p-2 border" value={age} onChange={(e) => setAge(e.target.value)} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Update User</button>
      </form>
    </div>
  );
};

export default UserEdit;
