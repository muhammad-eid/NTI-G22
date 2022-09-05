
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
const createMyOwnEle = (eleTag, parent, txtContent=null, classes=null) =>{
    const myNewElement = document.createElement(eleTag)
    if(classes)  myNewElement.classList = classes
    if(txtContent) myNewElement.innerText= txtContent
    parent.appendChild(myNewElement)
    return myNewElement
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
    tasks.forEach((task, i)=>{
        let tr = createMyOwnEle("tr", dataWrap)
        createMyOwnEle("td", tr, task.id)
        createMyOwnEle("td", tr, task.title)
        createMyOwnEle("td", tr, task.content)
        createMyOwnEle("td", tr, task.age)
        let td = createMyOwnEle("td", tr)
        
        let delBtn = createMyOwnEle("button", td, "delete", "btn btn-danger mx-2")
        delBtn.addEventListener("click", function(e){ console.log(i) } )

        let editBtn = createMyOwnEle("button", td, "edit", "btn btn-warning mx-2")
 
        let showBtn = createMyOwnEle("button", td, "show", "btn btn-success mx-2")
 
    })
}