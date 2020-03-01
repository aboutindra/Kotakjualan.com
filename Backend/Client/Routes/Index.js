const express = require('express');
const app = express.Router();

const get = require('./Get');
const Get = new get();

//Get All Client Data
app.get('/gc', async (req, res) => {
    res.send( await Get.getAllClient() );
});


module.exports = app;