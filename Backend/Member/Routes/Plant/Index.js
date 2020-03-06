const express = require('express');
const bp = require('body-parser');

const app = express.Router();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const get = require('../Get');
const Get = new get();

const post = require('../Post');
const Post = new post();

//Get All Plant Data
app.get('/gp', async (req, res) => {
    res.send( await Get.getAllPlant() );
});

//Get Plant Data with specific ID
app.get('/gpi', async (req, res) => {
    res.send( await Post.searchDataPlant( req.body.parameter ) )
});

app.post('/ip', async (req, res) => {
    res.send( await Post.postDataPlant( req.body.parameter ) )
});

app.put('/up', async (req, res) => {
    res.send( await Post.updateDataPlant( req.body.parameter ) )
});

app.delete('/dp', async (req, res) => {
    res.send( await Post.deleteDataPlant( req.body.parameter ))
});

module.exports = app;