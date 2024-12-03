import React, { useState } from "react";

// Форма редактирования задания. Становится активной при нажатии на кнопку "Изменить"
export default function EditToDoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);
  const [formValide, setFormValide] = useState(false);

  // Обработчик события при изменении текста поля ввода
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        className="todo-input"
        placeholder="Обновите задание"
        onChange={(e) => {
          setValue(e.target.value);
          setFormValide(e.target.value.trim() !== "");
        }}
      />
      <button type="submit" className="todo-btn" disabled={!formValide}>
        Изменить
      </button>
    </form>
  );
}
