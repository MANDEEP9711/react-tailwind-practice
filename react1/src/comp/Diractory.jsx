import React from 'react'
import { useState } from 'react'
const peopleData = [
  { name: "John", age: 25, phone: "123-456-7890" },
  { name: "Doe", age: 30, phone: "987-654-3210" },
  { name: "Jane", age: 28, phone: "555-555-5555" },
  { name: "Alice", age: 22, phone: "444-444-4444" },
  { name: "Bob", age: 27, phone: "666-777-8888" },
  { name: "Mandeep", age: 24, phone: "9625617702" },
  { name: "Simran", age: 26, phone: "888-123-4567" },
  { name: "Raj", age: 31, phone: "321-456-7890" },
];
function Directory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [people, setPeople] = useState(peopleData);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = peopleData.filter((person) =>
      person.name.toLowerCase().includes(value.toLowerCase())
    );
    setPeople(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">📞 Phone Directory</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full max-w-md px-4 py-2 text-white rounded mb-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {people.length > 0 ? (
          people.map((person, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-green-400">{person.name}</h2>
              <p>📅 Age: {person.age}</p>
              <p>📱 Phone: {person.phone}</p>
            </div>
          ))
        ) : (
          <p className="text-red-500 col-span-full text-center">No matches found.</p>
        )}
      </div>
    </div>
  );
}

export default Directory;