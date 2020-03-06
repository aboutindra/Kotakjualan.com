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

module.exports = app;