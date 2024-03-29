const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const app = express.Router();

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const db = require('../../Controllers/Database');
const DB = new db();

app.get('/d', async (req, res) => {
    let param = JSON.parse(req.query.param);
    let data = param.data;
    let id = param.id;
    let parameter = { id : id, keyword : data };
    res.send( await DB.getDept(parameter) );
});

app.post('/d', async (req, res) => {
    let id = req.body.id;
    let data = req.body.data;
    let param = { id : id, data : data };
    res.send( await DB.postDept(param) );
});

app.put('/d', async ( req, res ) => {
    let id = req.body.id;
    let data = req.body.data;
    let param = { id : id, data : data };
    res.send( await DB.updateDept(param) );
});

app.delete('/d', async (req, res) => {
    let id = req.body.id;
    let data = req.body.data;
    let param = { id : id, data : data };
    res.send( await DB.deleteDept(param) );
});

module.exports = app;