import React, { useState } from "react";

// Ввод нового задания в форму добавления
export default function ToDoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [formValide, setFormValide] = useState(false);

  // Обработчик отправки формы при нажатии Enter
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
    setFormValide(false);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        className="todo-input"
        placeholder="Что будем делать сегодня?"
        onChange={(e) => {
          setValue(e.target.value);
          setFormValide(e.target.value.trim() !== "");
        }}
      />
      <button type="submit" className="todo-btn" disabled={!formValide}>
        Добавить задание
      </button>
    </form>
  );
}
