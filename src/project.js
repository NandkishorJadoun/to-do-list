
const projectList = []

export const addProject = (project) => {
    projectList.push(project)
}

export const removeProject = (project) => {
    const projectIndex = projectList.indexOf(project)
    if (projectIndex !== -1) projectList.splice(projectIndex, 1)
}

export const getProjectList = () => [...projectList]

export function Project(name) {
    const taskList = [];
    const projectName = name;

    const addTask = (task) => {
        taskList.push(task)
    }

    const removeTask = (task) => {
        const taskIndex = taskList.indexOf(task)
        if (taskIndex !== -1) taskList.splice(taskIndex, 1)
    }

    const getTaskList = () => [...taskList]

    const getProjectName = () => projectName

    return { addTask, removeTask, getTaskList, getProjectName }
}

