import { addProject, removeProject, getProjectList, Project } from "./project";

import "./styles.css"

import { Task } from "./task";

import { getTaskUi } from "./task-ui";

const addProjectBtn = document.querySelector(".add-project")
const projectDialog = document.querySelector(".project-dialog")
const submitProjectBtn = document.querySelector("#submit-project")
const projectInp = document.querySelector("#project-input")
const projects = document.querySelector(".projects")

function updateProjectUI(){

    projects.textContent = ""

    getProjectList().forEach(project => {

        const projectCard = document.createElement("div")
        const projectName = document.createElement("button")
        const projectDeleteBtn = document.createElement("button")

        projectDeleteBtn.textContent = "X"
        projectName.textContent = project.getProjectName()

        projectDeleteBtn.onclick = () => deleteProject(project) 
        projectName.onclick = () => {
            getTaskUi(project)
            console.log(project.getProjectName())
        }

        projectCard.appendChild(projectName)
        projectCard.appendChild(projectDeleteBtn)
        projects.appendChild(projectCard)
    });
}

addProjectBtn.addEventListener("click", () => showProjectDialog())
submitProjectBtn.addEventListener("click", addNewProject)

function showProjectDialog(){
    projectDialog.showModal()
}

function addNewProject(){
    const newProjectName = projectInp.value
    const newProject = Project(newProjectName)
    addProject(newProject)
    projectInp.value = ""
    updateProjectUI()
}

function deleteProject(project){
    removeProject(project)
    updateProjectUI()
}