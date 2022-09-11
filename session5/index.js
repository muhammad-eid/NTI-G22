/*
npm init --y
npm i express
nodemon => one time on device   npm i -g nodemon
nodemon index
*/
const express = require("express")
const path = require("path")
const app = express()

const myStatics = path.join(__dirname,"html")
app.use( express.static(myStatics) )
//routes

//get post (if api delete link patch  put unlink, ......)
// app.get("/", (req, res)=>{
//     res.send("hello from nodemon")
// }) //localhost:3000/

// app.get("/about", (req, res)=>{
//     res.send("<h2>hello</h2>")
// })

// app.get("/contact", (req,res)=>{
//     res.send([{name:"marwa"}])
// })

// app.get("/myHtml", (req,res)=>{
//     res.sendFile(`${__dirname}/task.txt`)
// })

// from view engine
/*php => .php , js (node)=> .hbs, .ejs. pug, ... , python => djtemp, .net => .net */
//view engine
app.set('view engine', 'hbs')
app.get("/", (req,res)=>{
    res.render("home")
})
//localhost:3000
app.listen(3000, ()=> console.log(`we are on http://localhost:3000`))