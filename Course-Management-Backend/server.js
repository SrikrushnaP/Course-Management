// Starting up the server
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const serverError = require('./middlewares/serverError')
const app = express()

// Setting up the port
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(morgan("common"))

//Invalid Route Error Handler
app.use(notFound);

//Server Error Middleware Handler
app.use(serverError)

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`)
  })