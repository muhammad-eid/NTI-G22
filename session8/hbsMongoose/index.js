require("./database/dbconnect")
//setup required modules
const express = require("express")
const hbs = require("hbs")
const path = require("path")
//setup the main variables
const PORT = 3000
const app = express()
app.use(express.urlencoded({extended:true}))
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
const userRoutes = require("./routes/user.routes")
app.use(userRoutes)
app.all('*', (req,res)=>{
    res.render("err404", {
        pageTitle:"Page not found"
    })
})

//listen to server
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))