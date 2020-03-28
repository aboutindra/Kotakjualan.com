const db = require('../Controllers/Database');
const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const app = express.Router();
const DB = new db();

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/t', async (req, res) => {
    let data = JSON.parse(req.query.param).param;
    res.send( await DB.getToko( { id : data.id, data : data.data  } ) )
});

app.post('/t', async (req, res) => {
    res.send( await DB.postToko( { id : req.body.id, data : req.body.data } ) )
});

app.put('/t', async (req, res) => {
    res.send( await DB.updateToko( { id : req.body.id, data : req.body.data } ) )
});

app.delete('/t', async (req, res) => {
    res.send( await DB.deleteToko( { id : req.body.id } ) )
});

module.exports = app;