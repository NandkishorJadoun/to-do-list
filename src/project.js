let projectList = [];

const saveProjectList = JSON.parse(localStorage.getItem("container"))

if (saveProjectList) {

    projectList = reviveProjects(saveProjectList)

} else {

    const defaultProject = Project("Default");
    projectList.push(defaultProject);
    updateStorage()

}

function updateStorage() {
    localStorage.setItem("container", JSON.stringify(projectList));
}

function reviveProjects(projects) {
    return projects.map(p => {
        const proj = Project(p.projectName)
        p.taskList.forEach(task => proj.addTask(task))
        return proj;
    })
}

export const addProject = (project) => {
    projectList.push(project)
    updateStorage()
}

export const removeProject = (project) => {
    const projectIndex = projectList.indexOf(project)
    if (projectIndex !== -1) projectList.splice(projectIndex, 1)
        updateStorage()
}

export const getProjectList = () => [...projectList]

export function Project(name) {
    const taskList = [];
    const projectName = name;

    const addTask = (task) => {
        taskList.push(task)
        updateStorage()
    }

    const removeTask = (task) => {
        const taskIndex = taskList.indexOf(task)
        if (taskIndex !== -1) taskList.splice(taskIndex, 1)
        updateStorage()
    }

    const getTaskList = () => [...taskList]

    const getProjectName = () => projectName

    return {taskList, projectName, addTask, removeTask, getTaskList, getProjectName }
}

