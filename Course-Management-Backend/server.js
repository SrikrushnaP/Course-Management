// Starting up the server
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const serverError = require('./middlewares/serverError')
const app = express()
const api = require('./routes/userRoutes')

// Setting up the port
const PORT = process.env.PORT || 5000

//Allow access to .env file
dotenv.config()

//Database connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to Mongo DB'))
    .catch (error => console.log(error));

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

//configure api from api route
app.use('/api', api)

//Invalid Route Error Handler
app.use(notFound);

//Server Error Middleware Handler
app.use(serverError)

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`)
})