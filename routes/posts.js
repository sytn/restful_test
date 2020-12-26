const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//ROUTERS FOR POSTS
//HERE I CAN USE ARROW FUNCTION INSTEAD OF USING THE FUNCTION STATEMENT
// THIS ONE GET BACK ALL THE DB ELEMENTS
router.get('/', async (req, res) =>{
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err){
        res.json({message:err});
    }
});

router.get('/test', (req, res) => {
    res.send("test")
});

//SUBMITS A POST
router.post('/', async (req, res) => { //VERI TABANINA GONDERILECEK VERIYI TANIMLAMAK
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});

//GETS BACK THE SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch (err){
        res.json({message: err});
    }
});

//DELETE A SPECIFIC POST
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch(err) {
        res.json({message: err});
    }
});

//UPDATE POST
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: { title: req.body.title } }
        );
        res.json(updatedPost)
    }catch(err) {
        res.json({message: err});
    }
});


module.exports = router;