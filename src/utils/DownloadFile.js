// Функция скачивания текущего списка дел в виде текстового файла
export default function downloadTodoList(todos) {
  // Формируем два списка с удобной сортировкой
  const notCompleted = todos.filter((t) => !t.completed).map((t) => `Задание: ${t.task}`);
  const сompleted = todos.filter((t) => t.completed).map((t) => `Задание: ${t.task}`);

  const notCompletedContent = notCompleted.length
    ? `Не выполнено:\n${notCompleted.join("\n")}`
    : "Не выполнено: Нет заданий";

  const CompletedContent = сompleted.length
    ? `Выполнено:\n${сompleted.join("\n")}`
    : "Не выполнено: Нет заданий";

  const content = `${notCompletedContent}\n\n${CompletedContent}`;

  // Создаем объект Blob(объект с данными для дальнешего скачивания)
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });

  // Создаем ссылку для скачивания файла
  const url = document.createElement("a");
  url.href = URL.createObjectURL(blob);
  url.download = "todo-list.txt";
  url.click();
}
