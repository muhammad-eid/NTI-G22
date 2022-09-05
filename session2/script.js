const taskHeads =  ["title", "content", "age"]
// const tasks = []
const addForm = document.querySelector("#addForm")
const dataWrap = document.querySelector("#dataWrap")

const readFromStorage = (key= "tasks") => {
    let data
    try{
        data = JSON.parse(localStorage.getItem(key)) || []
        if(!Array.isArray(data)) throw new Error("data is not an array")
    }
    catch(e){
        data = []
    }
    return data
}

const writeToStorage = (data, key="tasks") => {
    localStorage.setItem(key, JSON.stringify(data))
}

const createTaskObject = (addForm) =>{
    let task = { id:Date.now() }
    taskHeads.forEach(head => task[head]= addForm.elements[head].value)
    return task 
}
if(addForm){
    addForm.addEventListener("submit", function(e){
        e.preventDefault()
        const task =createTaskObject(this)
        const tasks = readFromStorage()
        tasks.push(task)
        writeToStorage(tasks)
        window.location.href="index.html"
    })
}

if(dataWrap){
    const tasks = readFromStorage()
    tasks.forEach(task=>{
        let tr = document.createElement("tr")
        dataWrap.appendChild(tr)
        let td = document.createElement("td")
        td.textContent = task.id
        tr.appendChild(td)
        td = document.createElement("td")
        td.textContent = task.title
        tr.appendChild(td)
        td = document.createElement("td")
        td.textContent = task.content
        tr.appendChild(td)
        td = document.createElement("td")
        td.textContent = task.age
        tr.appendChild(td)


    })
}