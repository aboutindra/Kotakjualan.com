const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const app = express.Router();

app.use(cors());
app.use(bp.urlencoded({ extended: true }));

const db = require('../Controllers/index');
const DB = new db();

app.post('/T', async (req, res) => {
    let input = req.body.input;
    console.log(input);
    let params = JSON.parse(input);


    for (let index = 0; index < params.length; index++) {
        let element =  params[index];
        console.log(element);
    
    res.send( await DB.postRiwayat(element));
}
});
        
app.delete('/T', async (req, res) => {
    let id = req.param.id;
    console.log(id);
    res.send( await DB.deleteRiwayat(id) );
});

app.put('/T', async (req, res) => {
    let id = req.body.id;
    let data = req.body.data;
    let param = { id : id, data : data };
    res.send( await DB.nambahInput(param) );
});

module.exports = app;   