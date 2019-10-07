const express = require('express');

const router = express.Router();

const Post = require('../models/Post');




router.get('/', async function(req, res){
    try{
        const posts = await Post.find()
        res.json(posts)
    }catch(err){
        res.json({message:err})
        
    }
})

router.post('/', async function(req, res){
    var toSend = req.body;
    console.log(toSend)

    var post = new Post({
        title: req.body.title,
        description: req.body.description
    })


    try{
        const savedPost = await post.save();
        res.json(savedPost)

    }catch(err){
        res.json({message: err})
    }




})



module.exports = router;