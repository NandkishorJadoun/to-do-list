import { Task } from "./to-do-list";

const taskContainer = document.querySelector(".task-container");
const taskDialog = document.querySelector(".task-dialog");
const submitTaskBtn = document.getElementById("submit-task");
const taskTitleInput = document.getElementById("task-title");

const showTaskUI = (project) => {
    taskContainer.textContent = "";
    const addTaskBtn = document.createElement("button")
    addTaskBtn.textContent = "Add Task"
    addTaskBtn.addEventListener("click", () => openTaskDialog(project))
    taskContainer.appendChild(addTaskBtn)

    for (const task of project.getTaskContainer()) {
        const taskItem = document.createElement("p");
        taskItem.textContent = task.title;
        taskContainer.appendChild(taskItem);
    }
}

const openTaskDialog = (project) => {
    taskDialog.showModal();

    submitTaskBtn.onclick = (event) => {
        event.preventDefault();
        const newTask = new Task(taskTitleInput.value, "Description", "Due Date", "Priority");
        project.addTask(newTask);
        taskDialog.close()
        showTaskUI(project);
    }
}

export { showTaskUI }