import { Container, Project } from "./to-do-list";
import { showTaskUI } from "./task-ui";

function ProjectUI() {

    const container = Container()

    //example 
    const gym = Project("gym")
    const study = Project("study")
    container.addProject(gym)
    container.addProject(study)

    const projectContainer = document.querySelector(".project-container")
    const addProjectBtn = document.querySelector(".add-project")
    const projectDialog = document.querySelector(".project-dialog")
    const submitProject = document.getElementById("submit-project")
    const projectInp = document.getElementById("project-input")

    const updateProjectContainer = () => {
        projectContainer.textContent = "";

        for (const project of container.getProjectContainer()) {
            console.log(project.name)

            const projectBtn = document.createElement("button")
            projectBtn.textContent = project.name.toUpperCase()

            projectBtn.addEventListener("click", () => showTaskUI(project))

            projectContainer.appendChild(projectBtn)
        }
    }

    const addProjectEvent = () => {
        addProjectBtn.addEventListener("click", () => {
            projectDialog.showModal()
        })

        submitProject.addEventListener("click", (event) => {
            event.preventDefault();

            let newProject = projectInp.value

            newProject = Project(newProject)
            container.addProject(newProject)

            projectDialog.close()
            updateProjectContainer()
            console.log(container.getProjectContainer())
        })
    }

    

    updateProjectContainer()
    addProjectEvent()
    
}

export { ProjectUI }