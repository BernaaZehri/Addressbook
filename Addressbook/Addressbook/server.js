var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var addressbook = require('./routes/contacts')
var cors = require('cors')

var port = 3000

var app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', addressbook)

app.listen(port, function() {
  console.log('Server started on port ' + port)
})