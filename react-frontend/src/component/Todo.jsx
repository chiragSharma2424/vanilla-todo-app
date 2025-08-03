import React from "react";

const Todo = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-purple-200 space-y-5">
      
      <h2 className="text-3xl font-bold text-center text-purple-700"> 📝 My Todo List </h2>

      <input type="text" placeholder="Enter Todo Title"className="w-full px-4 py-3 rounded-xl border border-purple-300 bg-purple-50 placeholder-purple-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"/>

      <input type="text" placeholder="Enter Todo Description" className="w-full px-4 py-3 rounded-xl border border-purple-300 bg-purple-50 placeholder-purple-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"/>

      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300" > ➕ Send Todo </button>
      
    </div>
  );
};

export default Todo;