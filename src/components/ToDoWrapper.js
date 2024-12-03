import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDoForm";
import downloadTodoList from "../utils/DownloadFile";

// Корневой компонент ToDoWrapper, содержит форму добавления нового задания и список заданий
export default function ToDoWrapper() {
  const [todos, setTodos] = useState([]);

  // Добавление нового задания в список
  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  };

  // Изменение статуса выполнения задания
  const toggleComplete = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  // Удаление задания из списка
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // Редактирование задания
  const editTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, isEditing: !t.isEditing } : t)));
  };

  // Редактирование текста задания (внутри формы редактирования)
  const editTask = (task, id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, task, isEditing: !t.isEditing } : t)));
  };

  // Вызов функции скачки списка дел
  const handleDownload = () => {
    downloadTodoList(todos);
  };

  return (
    <div className="TodoWrapper">
      <h1>Список дел</h1>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditToDoForm key={index} task={todo} editTodo={editTask} />
        ) : (
          <ToDo
            key={index}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
      {todos.length === 0 && <h3>Список пуст</h3>}
      {todos.length !== 0 && (
        <button className="todo-btn" onClick={handleDownload}>
          Скачать список дел
        </button>
      )}
    </div>
  );
}
