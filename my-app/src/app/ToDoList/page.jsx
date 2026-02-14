"use client";
import { useState } from "react";

export default function TodoUI() {
  const [todos, setTodos] = useState([
    { text: "Tailwind CSS To DO App List 1", completed: false },
    { text: "Tailwind CSS To DO App List 2", completed: true },
  ]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const addTodo = () => {
    if (inputValue.trim() === "") return;

    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };
  return (
    <div className={darkMode ? "bg-gray-900" : "bg-gray-200"}>
      <div className="flex items-center justify-center h-screen">
        <div
          className={
            darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
          }
        >
          <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3 ">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="mb-4 px-3 py-1 rounded border bg-amber-500"
            >
              Toggle Mode
            </button>

            <h1 className="mb-6 text-4xl font-bold text-purple-600">
              TO DO APP
            </h1>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Add a new task"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                // onKeyDown={(e) => {
                //   if (e.key === "enter") {
                //     addTodo();
                //   }
                // }}
                onKeyDown={handleKeyDown}
                className="w-full py-2 border rounded outline-none focus:ring-2 focus: ring-purple-500 bg-blue-200 text-black"
              />
            </div>

            <ul className="list-reset">
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className="relative flex items-center justify-between px-2 py-6 border-b"
                >
                  <div>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(index)}
                      className=""
                    />
                    <p
                      className={`inline-block mt-1 ml-2 text-gray-600 ${
                        todo.completed ? "line-through" : ""
                      }`}
                    >
                      {todo.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
