import { Task } from "./task";

/* const tasks = document.querySelector(".tasks") */
const taskContainer = document.querySelector("#task-container")
const taskDialog = document.querySelector(".task-dialog")
const submitTaskBtn = document.querySelector("#submit-task")

const taskTitleInp = document.querySelector("#task-title")
const taskDescInp = document.querySelector("#task-desc")
const taskDueDateInp = document.querySelector("#task-due-date")
const taskPriorityInp = document.querySelector("#task-priority")


export function getAddTaskBtn(project) {
    taskContainer.textContent = ""

    const addTaskBtn = document.createElement("button")
    addTaskBtn.textContent = "Add Tasks"
    addTaskBtn.onclick = () => showTaskDialog()
    taskContainer.appendChild(addTaskBtn)
    submitTaskBtn.onclick = () => addNewTask(project)
}


function showTaskDialog() {
    taskDialog.showModal()
}

function addNewTask(project) {
    const newTaskName = taskTitleInp.value
    const newTaskDesc = taskDescInp.value
    const newTaskDueDate = taskDueDateInp.value
    const newTaskPriority = taskPriorityInp.value

    const newTask = new Task(newTaskName, newTaskDesc, newTaskDueDate, newTaskPriority)

    project.addTask(newTask)

    console.log(project.getProjectName(), project.getTaskList())
}