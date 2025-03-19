function Container() {
    const projectContainer = []

    const addProject = (project) => {
        projectContainer.push(project)
    }

    const removeTask = (project) => {
        const projectIndex = projectContainer.indexOf(project)
        if (projectIndex !== -1) projectContainer.splice(projectIndex, 1)
    }

    const getProjectContainer = () => [...projectContainer]

    return { addProject, removeTask, getProjectContainer }
}

function Project(name) {
    const taskContainer = [];

    const addTask = (task) => {
        taskContainer.push(task)
    }

    const removeTask = (task) => {
        const taskIndex = taskContainer.indexOf(task)
        if (taskIndex !== -1) taskContainer.splice(taskIndex, 1)
    }

    const getTaskContainer = () => [...taskContainer]

    return { name, addTask, removeTask, getTaskContainer }
}

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export { Container, Project, Task }