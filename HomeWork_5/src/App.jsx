import { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";
import "./App.css";

function App() {
  const { tasks, addTask, toggleCompleted, deleteTask } =
    useContext(TaskContext);
  const [task, setTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <div className="app">
      <h1>Список задач</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Добавить новую задачу"
          className="task-input"
        />
        <button type="submit">Добавить</button>
      </form>
      <ul className="task-list">
        {tasks.map((taskItem) => (
          <li
            key={taskItem.id}
            className={`task-item ${taskItem.completed ? "completed" : ""}`}
          >
            <div className="task-info">
              <input
                type="checkbox"
                checked={taskItem.completed}
                onChange={() => toggleCompleted(taskItem.id)}
              />
              <span>{taskItem.text}</span>
            </div>
            <button onClick={() => deleteTask(taskItem.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
