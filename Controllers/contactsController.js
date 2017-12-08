//var people = [{name: 'Kyle'},{name: 'jillian'}]
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

//connect to the database
mongoose.connect('mongodb://kyle:kyle@ds125146.mlab.com:25146/is545_contact_list')

//Create a schema - this is like a blueprint
var contactSchema = new mongoose.Schema({
    //id: Number,
    name: String,
    email: String,
    phone: String
})

var Contact = mongoose.model('Contact', contactSchema)
var newEntry
var contactID
var urlencodedParser = bodyParser.urlencoded({extended:false})
module.exports = function(app){
    app.get('/', function(req, res){
        //get data from monodb and pass it to view

        Contact.find({}, function(err, data){
            if (err) throw err
            res.render('index', {list: data})
        })
    })

    app.get('/new_contact', function(req, res){
        res.render('new_contact')
    })

    app.get('/edit', function(req, res){
        res.render('edit', {entry: newEntry})
        //console.log(newEntry)
    })

    app.post('/new_contact', urlencodedParser, function(req, res){
        //get data from the view and add it to mongodb
        //console.log(req.body.name)
        Contact(req.body).save(function(err,data){
            if(err) throw err
            res.json(data)
            console.log(data)
            console.log(data.id)
        })
    })
    
    app.post('/', urlencodedParser, function(req, res){
        //grab the information for the selected contact and pass back to /edit page
        Contact.findOne({'name': req.body.name, 'email': req.body.email, 'phone': req.body.phone}, function(err,foundObject){
            if(err){
                res.status(500).send
                console.log(err)
            }else{
                if(!foundObject){
                    console.log('Object not found')
                    res.status(404).send
                }else{
                    res.json(foundObject)
                    newEntry = foundObject
                    contactID = foundObject.id
                }
            }
        })
    })

    app.post('/edit',urlencodedParser, function(req, res){
        console.log('edit post fired')
        Contact.findOneAndUpdate({_id: contactID}, {name: req.body.name, email: req.body.email, phone: req.body.phone}, function(err,doc){
            if(err){
                console.log("Nope, didn't work")
            }else{
                res.json(doc)
                console.log(doc)
                console.log('contactID is '+contactID)
                console.log('name is '+req.body.name)
            }
        })
    })

    app.delete('/:id', function(req, res){
        //delete request item from mongodb
        console.log(req.params.id)
        Contact.findOne({_id: req.params.id.replace(/\-/g, ' ')}).remove(function(err,data){
            if(err) throw err
            res.json(data)
        })
    })
}