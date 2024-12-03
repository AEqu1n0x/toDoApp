import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// Элемент из списка заданий. Обрабатывает события клика на текст и кнопки редактирования/удаления
export default function ToDo({ task, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="Todo">
      <p
        onClick={() => {
          toggleComplete(task.id);
        }}
        className={`text ${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => {
            editTodo(task.id);
          }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
            deleteTodo(task.id);
          }}
        />
      </div>
    </div>
  );
}
