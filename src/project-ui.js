import { addProject, removeProject, getProjectList, Project } from "./project";


import { getTaskUi } from "./task-ui";

export function init() { 

    const addProjectBtn = document.querySelector(".add-project")
    const projectDialog = document.querySelector(".project-dialog")
    const submitProjectBtn = document.querySelector("#submit-project")
    const projectInp = document.querySelector("#project-input")
    const projects = document.querySelector(".projects")

    function updateProjectUI() {

        projects.textContent = ""

        getProjectList().forEach(project => {

            const projectCard = document.createElement("div")
            const projectName = document.createElement("button")
            const projectDeleteBtn = document.createElement("button")

            projectDeleteBtn.textContent = "X"
            projectName.textContent = project.getProjectName()

            projectDeleteBtn.onclick = () => {
                deleteProject(project)
            }

            projectName.onclick = () => {
                getTaskUi(project)
            }

            projectCard.appendChild(projectName)
            projectCard.appendChild(projectDeleteBtn)
            projects.appendChild(projectCard)
        });
    }

    updateProjectUI()

    addProjectBtn.addEventListener("click", () => showProjectDialog())
    submitProjectBtn.addEventListener("click", addNewProject)

    function showProjectDialog() {
        projectDialog.showModal()
    }

    function addNewProject() {
        
        if(projectInp.value){
            const newProjectName = projectInp.value
            const newProject = Project(newProjectName)
            addProject(newProject)
            projectInp.value = ""
            updateProjectUI()
            projectDialog.close()
        }
        
    }

    function deleteProject(project) {
        removeProject(project)
        updateProjectUI()
    }
}