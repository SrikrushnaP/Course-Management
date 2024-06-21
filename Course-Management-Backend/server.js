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

app.get('/', function (req, res) {
    res.send("Hello from server");
});

app.get('/html-text', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('' +
    `<html>
    <head></head>
    <body>
    <h2>Welcome to the MEAN stack course</h2>
      <script>
        /********** Browser start ********/
        /* This code is run in the browser */
        console.log('print in browser console ');
        /********** Browser end ********/
      </script>
    </body>
    </html>`
  )
});

//Invalid Route Error Handler
app.use(notFound);

//Server Error Middleware Handler
app.use(serverError)

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`)
  })