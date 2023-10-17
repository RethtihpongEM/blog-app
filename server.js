require("dotenv").config();
const express = require("express")
const path = require("path")
const {logger} = require("./middleware/logEvents")
const errorHandler = require("./middleware/errorHandler")
const app = express()
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const cookieParser = require("cookie-parser")
const PORT = process.env.PORT || 8080
const mongoose = require('mongoose')
const connectDB = require('./config/dbConn')

//Connect to MongoDB
connectDB();

//Generate all request Log
app.use(logger)


app.use(cors(corsOptions))


app.use(express.urlencoded({extended: false}))

//Built-in middleware for json
app.use(express.json())

//Middleware for cookie
app.use(cookieParser())

app.use('/', (req,res) => {
  res.send("This is the blog app api")
})

app.use(errorHandler)

mongoose.connection.once('open', () =>{
  console.log('Connected to MongoDB')
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
  })
})
