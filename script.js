document.addEventListener("DOMContentLoaded", function () {
  let addButton = document.getElementById("add-task-btn");
  let taskInput = document.getElementById("task-input");
  let taskList = document.getElementById("task-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadTasks() {
    taskList.innerHTML = "";
    tasks.forEach((taskText) => {
      createTaskElement(taskText);
    });
  }

  function createTaskElement(taskText) {
    let list = document.createElement("li");
    list.textContent = taskText;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", function () {
      tasks = tasks.filter((task) => task !== taskText);
      saveTasks();
      list.remove();
    });

    list.appendChild(removeBtn);
    taskList.appendChild(list);
  }

  function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a Task :)");
      return;
    }

    tasks.push(taskText);
    saveTasks();
    createTaskElement(taskText);
    taskInput.value = "";
  }

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  addButton.addEventListener("click", addTask);

  loadTasks();
});
