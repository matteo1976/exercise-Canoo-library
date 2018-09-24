let express = require('express');
let route = express.Router();
var books = require('./books.json');
var autors = require('./autors.json');

// # SHOW BOOKS
route.get('/', function (req, res) {
  //it will be good if we utilize a DB or may be use try catch or promisis
  if (res.statusCode === 200) {
    res.json(books);
  } else {
    let codError = res.statusCode;
    let msgError = res.statusMessage;
    res.send("ERROR : " + msgError + " Code: " + codError);
  }
});

// # ADD BOOK
route.get('/new', function (req, res) {
  //it will be good if we utilize a DB or may be use try catch or promisis
  if (res.statusCode === 200) {
    //TODO: make here function for add a new book in json
    let msg="New book added"
    res.send (msg);
  } else {
    let codError = res.statusCode;
    let msgError = res.statusMessage;
    res.send("ERROR : " + msgError + " Code: " + codError);
  }
});

// # DELETE BOOK
route.get('/delete', function (req, res) {
  //it will be good if we utilize a DB or may be use try catch or promisis
  if (res.statusCode === 200) {
    //TODO: make here function for delete book
    res.send("Book deleted");
  } else {
    let codError = res.statusCode;
    let msgError = res.statusMessage;
    res.send("ERROR : " + msgError + " Code: " + codError);
  }
});

module.exports = route;