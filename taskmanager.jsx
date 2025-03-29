import { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 w-full rounded-md"
          placeholder="New task..."
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`p-2 flex justify-between items-center border-b ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.text}
            <button
              onClick={() => toggleTask(task.id)}
              className="bg-green-500 text-white px-2 py-1 rounded-md"
            >
              {task.completed ? "Undo" : "Done"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;