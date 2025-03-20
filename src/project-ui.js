import { getProjectList, addProject, Project, removeProject } from "./project";

const projects = document.querySelector(".projects")
const addProjectBtn = document.querySelector(".add-project")
const projectDialog = document.querySelector(".project-dialog")
const projectInput = document.querySelector("#project-input")
const submitProject = document.querySelector("#submit-project")

function updateProjectUI() {
    projects.textContent = ""

    getProjectList().forEach(project => {
        const projectCard = document.createElement("div")
        const projectDeleteBtn = document.createElement("button")
        projectDeleteBtn.textContent = "X";

        const projectName = document.createElement("button")
        projectName.textContent = project.getProjectName();

        projectDeleteBtn.addEventListener("click", () => deleteProjectInList(project))

        projectCard.appendChild(projectName)
        projectCard.appendChild(projectDeleteBtn)
        projects.appendChild(projectCard)
    })
}


addProjectBtn.addEventListener("click", () => {
    projectDialog.showModal()
})

submitProject.addEventListener("click", () => {

    if(!projectInput.value) return

    let newProjectName = projectInput.value
    const newProject = Project(newProjectName)
    addProject(newProject)
    updateProjectUI()
    projectInput.value = ""
})


function deleteProjectInList(name) {
    removeProject(name)
    updateProjectUI()
}