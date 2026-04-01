import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const API = "http://localhost:5000";

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get(`${API}/todos`);
        setTodos(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!text.trim()) return;

    await axios.post(`${API}/todos`, { text });
    setText("");

    // refresh
    const res = await axios.get(`${API}/todos`);
    setTodos(res.data);
  };

  const toggleTodo = async (id, completed) => {
    await axios.put(`${API}/todos/${id}`, {
      completed: !completed
    });

    const res = await axios.get(`${API}/todos`);
    setTodos(res.data);
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API}/todos/${id}`);

    const res = await axios.get(`${API}/todos`);
    setTodos(res.data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo List</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span
              onClick={() => toggleTodo(todo._id, todo.completed)}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;