document.addEventListener("DOMContentLoaded", function () {
  let addButton = document.getElementById("add-task-btn");
  let taskInput = document.getElementById("task-input");
  let taskList = document.getElementById("task-list");

  function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a Task :)");
      return;
    }

    let list = document.createElement("li");
    list.textContent = taskText;
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", function () {
      list.remove();
    });

    list.appendChild(removeBtn);
    taskList.appendChild(list);
    taskInput.value = "";
  }

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  addButton.addEventListener("click", addTask);
});
