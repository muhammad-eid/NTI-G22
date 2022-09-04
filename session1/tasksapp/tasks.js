const tasks = []

const addTasks = (id,title, content, tasks) =>{
    const task = {
        id: id,//Date.now(),
        title,
        content
    }
    tasks.push(task)
}
const showAll = (tasks) =>{
    tasks.forEach(task => {
        console.log(`${task.id} -  ${task.title} - ${task.content}`)
    // console.log(task.id+" - "+ )
    });
}
const showSingle = (taskId, tasks) =>{
    const result = tasks.find(task => task.id==taskId)
    console.log(result);
}
const delTask = (taskId, tasks) =>{
    // return tasks.filter(task=> task.id!=taskId)
    const id = tasks.findIndex(task=> task.id==taskId)
    tasks.splice(id, 1)
    return tasks
}
const editTask = (taskId, newData) =>{
    const id = tasks.findIndex(task=> task.id==taskId)
    tasks[id]= newData
    return tasks
}

addTasks(10,"task 1", "content 1", tasks)
addTasks(12,"task 1", "content 1", tasks)
addTasks(16,"task 1", "content 1", tasks)
addTasks(19,"task 1", "content 1", tasks)
addTasks(15,"task 1", "content 1", tasks)
showAll(tasks)
showSingle(16, tasks)
tasks = delTask(16, tasks)
