// addForm.addEventListener("submit", function(e){
//     e.preventDefault()
//     // console.log(addForm.elements)
//     // console.log(e.target)
//     // console.log(this)
//     console.log(this.elements.title.value);
//     let task = {
//         id:Date.now(),
//         // title:this.elements.title.value,
//         // content:this.elements.content.value
//     }
//     taskHeads.forEach(head => task[head]= addForm.elements[head].value)
//     const tasks = localStorage.getItem("tasks")
//     tasks.push(task)
// })
// const data = [ {name:"marwa"}, {name:"ahmed"}, {name:"omar"} ]
// localStorage.setItem("t", JSON.stringify(data))

// try{
//     const res = JSON.parse(localStorage.getItem("t"))
//     console.log( typeof res)
//     res.push("5")
// }
// catch(e){
//     console.log([])
// }


/* try catch */


taskHeads = [
    {key:"id", hasDefault: Date.now()}, 
    {key:"title", hasDefault:false},
    {key:"content", hasDefault:false},
    {key:"age", hasDefault:false},
]



const createTaskObject = (addForm) =>{
    let task = { }
    taskHeads.forEach((head) =>{
        if(head.hasDefault) task[head.key]= head.hasDefault
        else  task[head.key]= addForm.elements[head.key].value
        }
         )
    return task 
}

const addForm= document.querySelector("#addForm")
addForm.addEventListener("submit", function(e){
    e.preventDefault()
    let t = createTaskObject(addForm)
    taskHeads[0].hasDefault=Date.now()
    console.log(t)
})



