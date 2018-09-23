const express = require('express')
const app = express()
const port = 3000

let index = require('.')
let books = require('./books')

// enable CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })
app.use('/', index)
app.use('/books', books)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))