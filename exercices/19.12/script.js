const taskButton = document.getElementById("addButton");
const searchButton = document.getElementById("searchButton");
const todoList = document.getElementById("todoList");

taskButton.addEventListener("click", (event) => {
  event.preventDefault();

  const listItem = document.createElement("li");
  const deleteButton = document.createElement("button");
  const taskText = document.createElement("span");
  const taskInput = document.getElementById("addInput");

  if (taskInput.value !== "") {
    deleteButton.textContent = "Өшіру";
    taskText.textContent = taskInput.value;

    listItem.appendChild(taskText);
    listItem.append(deleteButton);
    todoList.appendChild(listItem);

    listItem.style.listStyle = "none";
    listItem.style.background = "#d66d4d4";
    listItem.style.width = "250px";
    listItem.style.display = "flex";
    listItem.style.justifyContent = "space-between";
    listItem.style.padding = "10px";

    deleteButton.addEventListener("click", () => {
      listItem.remove();
    });

    taskInput.value = "";
  }
});

searchButton.addEventListener("click", (event) => {
  event.preventDefault();

  const searchInput = document.getElementById("searchInput");

  console.log(searchInput.value);

  const tasks = document.querySelectorAll("li");
  console.log(tasks);

  tasks.forEach((task) => {
    console.log(task.textContent);

    if (!task.textContent.includes(searchInput.value)) {
      task.style.display = "none";
    } else {
      task.style.display = "flex";
    }
  });
});
