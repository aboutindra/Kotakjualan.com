const DBController = require('../Controllers/Database');
const comp = require('compression');
const express = require('express');
const bp = require('body-parser');
const DB = new DBController();
const cors = require('cors');
const app = express.Router();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(comp());
app.use(cors());

app.get('/p', async (req, res) => {
    res.send( await DB.getProfit( { id : req.body.id, data : req.body.data } ) )
});

app.post('/p', async (req, res) => {
    res.send( await DB.postProfit( { id : req.body.id, data : req.body.data } ) )
});

app.put('/p', async (req, res) => {
    res.send( await DB.updateProfit( { id : req.body.id, data : req.body.data } ) )
});

app.delete('/p', async (req, res) => {
    res.send( await DB.deleteProfit( { id : req.body.id } ) )
});

module.exports = app;