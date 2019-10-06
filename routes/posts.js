const express = require('express');

const router = express.Router();



// router.get('/', function(req, res){
//     res.send('we are home')
// })

router.get('/', function(req, res){
    res.send('we are on posts')
})

router.get('/people', function(req, res){
    res.send('mariah is awesome')
    // res.send(people)
    
})

module.exports = router;