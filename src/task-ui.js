import { Task } from "./task";

const taskContainer = document.querySelector("#task-container")
const taskDialog = document.querySelector(".task-dialog")
const submitTaskBtn = document.querySelector("#submit-task")

const taskTitleInp = document.querySelector("#task-title")
const taskDescInp = document.querySelector("#task-desc")
const taskDueDateInp = document.querySelector("#task-due-date")
const taskPriorityInp = document.querySelector("#task-priority")


export function getTaskUi(project) {
    taskContainer.textContent = ""
    getAddTaskBtn()
    submitTaskBtn.onclick = () => addNewTask(project)
    updateTaskUI(project)
}

function getAddTaskBtn() {
    const addTaskBtn = document.createElement("button")
    addTaskBtn.textContent = "Add Tasks"
    addTaskBtn.onclick = () => showTaskDialog()
    taskContainer.appendChild(addTaskBtn)
}

function updateTaskUI(project) {
    project.getTaskList().forEach(task => {
        const tasks = document.createElement("div")
        const taskCard = document.createElement("div")
        const taskName = document.createElement("button")
        const taskDeleteBtn = document.createElement("button")

        taskDeleteBtn.onclick = () => deleteTask(project, task)

        taskName.textContent = task.title
        taskDeleteBtn.textContent = "DLT"

        taskCard.appendChild(taskName)
        taskCard.appendChild(taskDeleteBtn)
        tasks.appendChild(taskCard)
        taskContainer.appendChild(tasks)
    });
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
    getTaskUi(project)

    taskTitleInp.value = taskDescInp.value = taskDueDateInp.value = taskPriorityInp.value = ""

    console.log(project.getProjectName(), project.getTaskList())
}

function deleteTask(project, task){
    project.removeTask(task)
    getTaskUi(project)
}