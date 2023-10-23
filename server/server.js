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
const connectDB = require('./config/dbConn');

//Connect to MongoDB
connectDB();

//Generate all request Log
app.use(logger)

//Cors
app.use(cors(corsOptions))

//Built-in middleware for json
app.use(express.json())

//Middleware for cookie
app.use(cookieParser())

app.use(express.urlencoded({extended: false}))

//static files
app.use('/',express.static(path.join(__dirname,'/public')))

//routes
app.use('/', require('./routes/root'))
app.use('/api/blogs', require('./routes/api/blogRoutes'))
app.use('/register', require('./routes/registerRoutes'))
app.use('/auth', require('./routes/authRoutes'))

//handle 404
app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
      res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
      res.json({ "error": "404 Not Found" });
  } else {
      res.type('txt').send("404 Not Found");
  }
});

app.use(errorHandler)

mongoose.connection.once('open', () =>{
  console.log('Connected to MongoDB')
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
  })
})
