const express = require('express')
const app = express()
const pug= require('pug')
require('dotenv').config()
const port = process.env.PORT
const controller = require('./controllers')
const fs = require("fs");
var moment = require('moment');
app.set('view engine', 'pug')
app.use(express.static('public'));
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/', controller.index)
app.get('/new', controller.new)
app.get('/calendar', controller.calendar)
app.post('/save', controller.save)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})