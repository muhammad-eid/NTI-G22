const chalk = require("chalk")
const heads = ["id", "name", "age", "email", "status"]
const files = require("./files.controller")
const objCreator= (data) => {
    const user = {}
    heads.forEach(h=> user[h]= data[h]??null)
    return user
}
const userPrinter = (user)=>{
    heads.forEach(h=> console.log(`${h} => ${user[h]??"no data"}`))
}
const searchUser = (allUsers,val, searchType ,key="id")=>{
//searchType => index , element, all
    let myUser
    if(searchType=="element") 
        myUser = allUsers.find(user=> user[key]==val)
    else if(searchType=="index")
        myUser = allUsers.findIndex(user=> user[key]==val)
    else if(searchType=="all")
        myUser = allUsers.filter(user=> user[key]==val)
    else    
        myUser = "invalid"
    return myUser
}
class User{
    static add(data){
        const user = objCreator(data)
        const allUsers = files.readFromFile("db/users.json")
        allUsers.push(user)
        files.writeToFile("db/users",allUsers)
        console.log(chalk.green("user added"))
    }
    static showAll(){
        const allUsers = files.readFromFile("db/users.json")
        if(allUsers.length==0) return console.log(chalk.red("no data yset"))
        allUsers.forEach(user=> userPrinter(user))
    }
    static showSingle(id){
        const allUsers = files.readFromFile("db/users.json")
        const myUser = searchUser(allUsers,id, "element", "id")
        if(!myUser||myUser=="invalid") return console.log(chalk.red("no users"))
        userPrinter(myUser)
    }
    static edit(argv){
        const allUsers = files.readFromFile("db/users.json")
        const myUser = searchUser(allUsers,argv.id, "index", "id")
        if(myUser==-1||myUser=="invalid") return console.log(chalk.red("no users"))
        heads.forEach(h=> {
            if(argv[h]) allUsers[myUser][h] = argv[h]
        })
        files.writeToFile("db/users", allUsers, "json")
    }
    static del(id){
        const allUsers = files.readFromFile("db/users.json")
        const myUser = searchUser(allUsers,id, "index", "id")
        if(myUser==-1||myUser=="invalid") return console.log(chalk.red("no users"))
        allUsers.splice(myUser,1)
        files.writeToFile("db/users",allUsers)
    }
}
module.exports = User
