const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const app = express.Router();

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const db = require('../Controllers/Database');
const DB = new db();

app.get('/m', async (req, res) => {
    let param = JSON.parse(req.query.param);
    let data = param.data;
    let id = param.id;
    let parameter = { id : id, keyword : data };
    res.send( await DB.getMember(parameter) );
});

app.post('/m', async (req, res) => {
    let id = req.body.id;
    let data = req.body.data;
    let param = { id : id, data : data };
    res.send( await DB.postMember(param) );
});

app.put('/m', async ( req, res ) => {
    let id = req.body.id;
    let data = req.body.data;
    let param = { id : id, data : data };
    res.send( await DB.updateMember(param) );
});

app.delete('/m', async (req, res) => {
    let id = req.body.id;
    let data = req.body.data;
    let param = { id : id, data : data };
    res.send( await DB.deleteMember(param) );
});

module.exports = app;