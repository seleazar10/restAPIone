var express = require ("express");
var path = require('path')
var app = express()


app.use(express.json());

var PORT = process.env.PORT || 3000

var people = []


app.get('/', function(req, res){
    // res.send('mariah is awesome')
    res.send(people)
    
})

app.get('/posts', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'))

})


app.post('/posts', function(req, res){

    var toSend = req.body
    console.log(toSend)

    var person = {

        name: req.body.name,
        gender: req.body.gender

    }

    // console.log(name)
    // console.log(gender)

    people.push(person)
    // if(err) throw err
    console.log('pushed data')
    
    

})

app.listen(PORT, function(err){
    if(err) throw err
    console.log('listening on http://localhost:'+ PORT)
});
