const express = require('express');
const bp = require('body-parser');

const app = express.Router();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const get = require('../Get');
const Get = new get();

const post = require('../Post');
const Post = new post();

//Get All Dept Data
app.get('/gd', async (req, res) => {
    res.send( await Get.getAllDept() );
});

app.post('/id', async (req, res) => {
   res.send( await Post.postDataDept( req.body.parameter ))
});


module.exports = app;