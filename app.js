var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var contactsController = require('./Controllers/contactsController')

// View engine
app.set('view engine', 'ejs')

// global vars
app.use(function(req,res,next){
    res.locals.errors = null
    next()
})

app.use(express.static('./public'))

//fire controllers
contactsController(app)

app.listen(3000, function(){
    console.log("Supz, Server started on port 3000")
})