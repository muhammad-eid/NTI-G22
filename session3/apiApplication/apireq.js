const baseURL = "https://jsonplaceholder.typicode.com/"
const btnList = ["posts", "users", "photos", "todos"]

const myBtns = [
    {key:"posts", showAs: "User Posts", keys: ["userId", "id", "title", "body"]},
    {key:"todos", showAs: "User Todos", keys: ["userId", "id", "title", "completed"]}
]
const heads = document.querySelector("#heads")
const tbody = document.querySelector("tbody")

myBtns.forEach((btn, i)=>{
    const myBTN = document.createElement("button")
    myBTN.innerText = btn.showAs
    document.querySelector("#btnWrap").appendChild(myBTN)
    myBTN.addEventListener("click", ()=>apiReq(`${baseURL}${btn.key}`, i) )
})

const apiReq = async(apiURl, i)=>{
    try{
        const res = await (await fetch(apiURl)).json()
        draw(res, i)
    }
    catch(e){
        console.log(e)
    }
}

draw = (res, i) =>{
    heads.innerHTML=""
    tbody.innerHTML=""
    myBtns[i].keys.forEach(k=> {
        let th = document.createElement("th")
        heads.appendChild(th)
        th.innerText=k
    })
}


// btnList.forEach(btn=>{
//     const myBTN = document.createElement("button")
//     myBTN.innerText = btn
//     document.querySelector("#btnWrap").appendChild(myBTN)
//     myBTN.addEventListener("click", ()=>apiReq(`${baseURL}${btn}`) )
// })
