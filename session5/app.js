const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()

const myStatics = path.join(__dirname,"public")
const myViews = path.join(__dirname, "frontend/views")
const myLayouts = path.join(__dirname, "frontend/layouts")

app.use( express.static(myStatics) )
app.set('view engine', 'hbs')
app.set("views", myViews)
hbs.registerPartials(myLayouts)

app.get("/", (req,res)=>{
    res.render("home")
})
//localhost:3000
app.listen(3000, ()=> console.log(`we are on http://localhost:3000`))