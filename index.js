let express = require('express')
let route = express.Router()

route.get('/', function (req, res) {
  res.send('hello world with express')
})

module.exports = route
