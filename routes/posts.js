const express = require('express');

const router = express.Router();

const Post = require('../models/Post');




router.get('/', function(req, res){
    res.send('we are on posts')
})

router.post('/', function(req, res){
    var toSend = req.body;
    console.log(toSend)
})



module.exports = router;