const { MongoClient } = require("mongodb")
const dbURL = "mongodb://localhost:27017"
const dbName = "s7G22"
const myConnection = (cb) =>{
    MongoClient.connect(dbURL, (error, client)=>{
        if(error) return console.log(error.message)
        const db = client.db(dbName)
        cb(db)
    })
}
module.exports = myConnection
