// const mongodb = require("mongodb")
// const MonogClient = mongodb.MongoClient

const { MongoClient, ObjectId } = require("mongodb")
const dbURL = "mongodb://localhost:27017"
const dbName = "s7G22"

const data = [
    {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit"
    },
    {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vita"
    },
    {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iur"
    },
    {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci"
    }
    ]
MongoClient.connect(dbURL, (error, client)=>{
    if(error) return console.log(error.message)
    const db = client.db(dbName)
    // db.collection('data')
    // .insertOne( {name:"marwa", age:37} )
    // .then(res => {
    //     console.log(res)
    //     client.close()
    // })
    // .catch(e=> {
    //     console.log(e.message)
    //     client.close()
    // })
    
    // db.collection("newTab")
    // .insertMany(data)
    // .then(res=> console.log(res))
    // .catch(e=> console.log(e))
    
    // db.collection("newTab")
    // .find()
    // .toArray((e, data)=>{
    //     if(e) return console.log(e.message)
    //     console.log(data)
    //     client.close()
    // })
    // db.collection("newTab").findOne({_id:new ObjectId('63204865ede8ee5c9e5aea50')})
    // .then(result=> console.log(result))
    // .catch(e=> console.log(e.message))
    db.collection("newTab")
    .updateOne(
        {_id:new ObjectId('63204865ede8ee5c9e5aea50')},
        {$set:{title:"marwa"}})
    .then(res=> console.log(res))
    .catch(e=>console.log(e.message))
    // db.collection("newTab")
    // .updateOne(
    //     {_id:new ObjectId('63204865ede8ee5c9e5aea50')},
    //     {$inc:{age:10}})
    // .then(res=> console.log(res))
    // .catch(e=>console.log(e.message))

})
