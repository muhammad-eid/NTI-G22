const heads = ["id", "name", "age", "email", "status"]
const files = require("./files.controller")
const objCreator= (data) => {
    const user = {}
    heads.forEach(h=> user[h]= data[h]??null)
    return user
}

class User{
    static add(data){
        const user = objCreator(data)
        const allUsers = files.readFromFile("db/users.json")
        allUsers.push(user)
        files.writeToFile("db/users",allUsers)
    }
    static showAll(){
        console.log("showAll from user class")
    }
    static showSingle(){
        console.log("show single from user class")
    }
    static edit(){
        console.log("edit from user class")
    }
    static del(){
        console.log("del from user class")
    }
}
// const u1 = new User()
module.exports = User
