import React, { useState } from "react";

const Todo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [todos, setTodos] = useState([]);

    function sendTodo() {
        fetch('http://localhost:3000/api/v1/todos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                description: description
            })
        }).then(() => {
            console.log("post request sended successfully");
            setTitle('');
            setDescription('');
        }).catch((err) => {
            console.log(`something went wrong ${err}`);
        })
    }

    function getTodos() {
        try {
            fetch('http://localhost:3000/api/v1/todos', {
                method: "GET"
            }).then((resp) => {
                return resp.json();
            }).then((data) => {
                console.log(data);
                setTodos(data.todos);
            })
        } catch(err) {
            console.log(err);
        }
    }

    function deleteTodo(id) {
        fetch(`http://localhost:3000/api/v1/todos/${id}`, {
            method: "DELETE"
        }).then(() => {
            console.log("todo deleted successfully");
        }).catch((err) => {
            console.log(`something went wrong ${err}`);
        })
        setTodos(todos.filter((todo) => todo._id !== id));
    }

  return (
    <div className="max-w-xl mx-auto mt-30 p-6 bg-white shadow-lg rounded-2xl border border-purple-200 space-y-5">
      
      <h2 className="text-3xl font-bold text-center text-purple-700"> 📝 My Tudo List </h2>

      <input type="text" placeholder="Enter Todo Title"className="w-full px-4 py-3 rounded-xl border border-purple-300 bg-purple-50 placeholder-purple-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
      onChange={(e) => {
        setTitle(e.target.value);
        
      }}
      value={title}
      />

      <input type="text" placeholder="Enter Todo Description" className="w-full px-4 py-3 rounded-xl border border-purple-300 bg-purple-50 placeholder-purple-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
        onChange={(e) => {
            setDescription(e.target.value);
        }}
        value={description}
      />

      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300" 
        onClick={sendTodo}
      > ➕ Send Todo </button>


      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300" 
        onClick={getTodos}
      > Get Todo </button>
      

<div className="grid gap-4">
  {todos.map((todo) => {
    return (
      <div key={todo._id} className="bg-white shadow-lg rounded-2xl p-6 border border-purple-100 hover:shadow-purple-300 transition duration-300 ease-in-out" >
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-purple-900 mb-1">Title {todo.title}</h2>
            <p className="text-sm text-purple-700">Description: {todo.description}</p>
          </div>
          <button className="ml-4 bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-md shadow"
            onClick={() => {
                deleteTodo(todo._id);
            }}
          > Delete</button>
        </div>
      </div>
    );
  })}
</div>
      
    </div>
  );
};

export default Todo;