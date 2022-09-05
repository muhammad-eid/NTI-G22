const taskHeads =  ["title", "content", "age"]
// const tasks = []
const addForm = document.querySelector("#addForm")

const readFromStorage = () => {

}

const writeToStorage = (data) => {

}

const createTaskObject = (addForm) =>{
    let task = { id:Date.now() }
    taskHeads.forEach(head => task[head]= addForm.elements[head].value)
    return task 
}


addForm.addEventListener("submit", function(e){
    e.preventDefault()
    createTaskObject(this)
    const tasks = localStorage.getItem("tasks")
    tasks.push(task)
})