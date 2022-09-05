
const taskHeads =  ["title", "content", "age"]
// const tasks = []
const addForm = document.querySelector("#addForm")
const dataWrap = document.querySelector("#dataWrap")
const single = document.querySelector("#single")

const readFromStorage = (key= "tasks", dataType="array") => {
    let data
    try{
        data = JSON.parse(localStorage.getItem(key)) || []
        if(!Array.isArray(data) && dataType=="array") throw new Error("data is not an array")
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
const delTask = (tasks, i)=>{
    tasks.splice(i,1)
    writeToStorage(tasks)
    draw(tasks)
}
const showSingle = (task)=>{
    // localStorage.setItem("itemId", i)
    writeToStorage(task , "item")
    window.location.href = "single.html"
}
const draw = (tasks) => {
    dataWrap.innerHTML=""
    if(tasks.length==0){
        let tr = createMyOwnEle("tr", dataWrap, null, "alert alert-danger")
        let td = createMyOwnEle("td", tr, "no data found", "alert alert-danger")
        td.setAttribute("colspan", "5")
    }
    tasks.forEach((task, i)=>{
        let tr = createMyOwnEle("tr", dataWrap)
        createMyOwnEle("td", tr, task.id)
        createMyOwnEle("td", tr, task.title)
        createMyOwnEle("td", tr, task.content)
        createMyOwnEle("td", tr, task.age)
        let td = createMyOwnEle("td", tr)
        
        let delBtn = createMyOwnEle("button", td, "delete", "btn btn-danger mx-2")
        delBtn.addEventListener("click", ()=>delTask(tasks, i) )

        let editBtn = createMyOwnEle("button", td, "edit", "btn btn-warning mx-2")
        editBtn.addEventListener("click", ()=> showSingle(tasks[i] ) )
        let showBtn = createMyOwnEle("button", td, "show", "btn btn-success mx-2")
 
    })
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

if(dataWrap) {
    const tasks = readFromStorage()
    draw(tasks)
}

if(single){
    // console.log("test")
    const task = readFromStorage("item", "object")
    if(Array.isArray(task)) createMyOwnEle("div", single, "no data to show", "alert alert-danger")
    else createMyOwnEle("div", single, task.title, "alert alert-primary")
}