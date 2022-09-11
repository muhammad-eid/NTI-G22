//setup required modules
const express = require("express")
const hbs = require("hbs")
const path = require("path")
//setup the main variables
const PORT = 3000
const app = express()
//setup main paths
const publicLoc = path.join(__dirname, "frontend/public")
const viewsLoc = path.join(__dirname, "frontend/views")
const layoutsLoc = path.join(__dirname, "frontend/layouts")
//setup engine data
app.use(express.static(publicLoc))
app.set("view engine", 'hbs')
app.set("views", viewsLoc)
hbs.registerPartials(layoutsLoc)
//routes
app.get('/', (req,res)=>{
    res.render("home", {
        pageTitle:"home page",
        slides: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"]
    })
})
app.get('/add', (req,res)=>{
    res.render("add", {
        pageTitle:"add user"
    })
})
app.get('/edit', (req,res)=>{
    res.render("edit", {
        pageTitle:"edit user"
    })
})
app.get('/single', (req,res)=>{
    res.render("single", {
        pageTitle: "single user"
    })
})
app.get('*', (req,res)=>{
    res.render("err404", {
        pageTitle:"Page not found"
    })
})
//listen to server
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))