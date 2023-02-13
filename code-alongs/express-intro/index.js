// Import our libraries and set up express.
const express = require('express')
const morgan = require('morgan')

const app = express()

// app.use allows for different middleware to be brought into Express
// Morgan: a logger for express so that we have a record for debugging.
app.use(morgan('dev'))
app.use(express.json())

// Create router for express that recognizes and directs our URLs.
const indexRoute = express.Router()

// Example express configuration for our /apis/ route.
indexRoute.route('/').get((request, response, nextFunction) => {
  return response.json({status: 200, message: 'hello world', data: null})
})

app.use('/apis', indexRoute)

//app.listen declares what port the Express application is running on
app.listen(4200)