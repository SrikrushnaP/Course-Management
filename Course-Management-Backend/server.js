// Starting up the server
const express = require('express')
const app = express()

// Setting up the port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`)
  })