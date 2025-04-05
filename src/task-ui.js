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
    getTaskLineSeparator()
    submitTaskBtn.onclick = () => addNewTask(project)
    updateTaskUI(project)
}

function getAddTaskBtn() {
    const addTaskBtn = document.createElement("button")
    addTaskBtn.textContent = "Add Tasks"
    addTaskBtn.onclick = () => showTaskDialog()
    taskContainer.appendChild(addTaskBtn)
}

function getTaskLineSeparator() {
    const lineSeparator = document.createElement("hr")
    taskContainer.appendChild(lineSeparator)
}

function updateTaskUI(project) {

    const tasks = document.createElement("div")
    tasks.classList.add("tasks")
    taskContainer.appendChild(tasks)

    project.getTaskList().forEach(task => {
        const taskCard = document.createElement("div")
        const taskName = document.createElement("button")
        const taskDeleteBtn = document.createElement("button")

        taskName.onclick = () => openTaskDetails(task)
        taskDeleteBtn.onclick = () => deleteTask(project, task)

        taskName.textContent = task.title
        taskDeleteBtn.textContent = "X"

        taskCard.appendChild(taskName)
        taskCard.appendChild(taskDeleteBtn)
        tasks.appendChild(taskCard)
    });
}

function showTaskDialog() {
    taskDialog.showModal()
}

function addNewTask(project) {

    if (taskTitleInp.value && taskDescInp.value && taskDueDateInp.value && taskPriorityInp.value) {

        const newTaskName = taskTitleInp.value
        const newTaskDesc = taskDescInp.value
        const newTaskDueDate = taskDueDateInp.value
        const newTaskPriority = taskPriorityInp.value

        const newTask = new Task(newTaskName, newTaskDesc, newTaskDueDate, newTaskPriority)

        project.addTask(newTask)
        getTaskUi(project)
        taskDialog.close()

        taskTitleInp.value = taskDescInp.value = taskDueDateInp.value = taskPriorityInp.value = ""
    }
}

function deleteTask(project, task) {
    project.removeTask(task)
    getTaskUi(project)
}

function openTaskDetails(task) {
    const taskInfoDialog = document.createElement("dialog")
    document.body.appendChild(taskInfoDialog)
    taskInfoDialog.showModal()

    const taskInfoTitle = document.createElement("p")
    const taskInfoDesc = document.createElement("p")
    const taskInfoDueDate = document.createElement("p")
    const taskInfoPriority = document.createElement("p")

    taskInfoTitle.textContent = `Name: ${task.title}`
    taskInfoDesc.textContent = `Description: ${task.description}`
    taskInfoDueDate.textContent = `Due Date: ${task.dueDate}`
    taskInfoPriority.textContent = `Priority: ${task.priority}`

    const taskInfoCloseBtn = document.createElement("button")
    taskInfoCloseBtn.textContent = "Close"
    taskInfoCloseBtn.onclick = () => taskInfoDialog.close()

    taskInfoDialog.appendChild(taskInfoTitle)
    taskInfoDialog.appendChild(taskInfoDesc)
    taskInfoDialog.appendChild(taskInfoDueDate)
    taskInfoDialog.appendChild(taskInfoPriority)
    taskInfoDialog.appendChild(taskInfoCloseBtn)
}
