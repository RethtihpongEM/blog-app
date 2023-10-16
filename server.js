const express = require("express")
const path = require("path")
const {logger} = require("./middleware/logEvents")
const errorHandler = require("./middleware/errorHandler")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 8080

//generate req log
app.use(logger)

const whitelist = ["http://127.0.0.1:3000","http://127.0.0.1:8080"]
const corsOptions = {
  origin: (origin,callback) => {
    if(whitelist.indexOf(origin) !== -1 || !origin){
      callback(null,true)
    }else{
      callback(new Error("Not allowed by CORS"))
    }
  },
  optionsSuccessStatus:200
}

app.use(cors(corsOptions))

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(path.join(__dirname,'/public')))

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})