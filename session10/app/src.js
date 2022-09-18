require('dotenv').config()
require('./database/connection')

const express = require("express")
const path = require("path")
const cors = require("cors")
const app = express()
app.use(cors())
const staticDir = path.join(__dirname, "../public")
app.use(express.static(staticDir))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const userRoutes = require("../routes/user.api")
app.use(userRoutes)

module.exports = app 