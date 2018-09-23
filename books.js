let express = require('express')
let route = express.Router()
var books = require('./books.json');
var autors = require('./autors.json');


route.get('/', function (req, res) {
  //it will be good if we utilize a DB or may be use try catch or promisis
if (res.statusCode   ===200) {
  
  res.json(books)
  
  
} else{
  let codError= res.statusCode
  let msgError= res.statusMessage
  res.send( "ERROR : "+ msgError +" Code: "+ codError)
}

})
  




  

//   router.get('/lastYear', function (req, res) {
//     let myData = {}
//     influx.query(`${queryOneYear}`).then(result => {
//       myData = result
//       res.json(myData)
//     }).catch(err => {
//       res.status(500).send(err.stack)
//     })
//   })
  
  module.exports = route
  