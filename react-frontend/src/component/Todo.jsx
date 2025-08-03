import React, { useState } from "react";

const Todo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-purple-200 space-y-5">
      
      <h2 className="text-3xl font-bold text-center text-purple-700"> 📝 My Todo List </h2>

      <input type="text" placeholder="Enter Todo Title"className="w-full px-4 py-3 rounded-xl border border-purple-300 bg-purple-50 placeholder-purple-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
      onChange={(e) => {
        setTitle(e.target.value);
      }}
      />

      <input type="text" placeholder="Enter Todo Description" className="w-full px-4 py-3 rounded-xl border border-purple-300 bg-purple-50 placeholder-purple-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
        onChange={(e) => {
            setDescription(e.target.value);
        }}
      />

      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300" > ➕ Send Todo </button>
      {title}<br />
      {description}
      
    </div>
  );
};

export default Todo;