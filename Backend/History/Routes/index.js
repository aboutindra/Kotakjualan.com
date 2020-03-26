const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const app = express.Router();

app.use(cors());
app.use(bp.urlencoded({ extended: true }));

const db = require('../Controllers/index');
const DB = new db();

app.post('/T', async (req, ress) => {
    let input = req.body.input;
    console.log(input);
    let params = JSON.parse(input);


    for (let index = 0; index < params.length; index++) {
        let element =  params[index];
        console.log(element);

    
    ress.send( await DB.postRiwayat(element,ress));
}
});

app.get('/T',async (req,res)=>{
    let kunci = req.body.kunci;
    let param = { kunci : kunci, res : res};
    console.log(kunci);
    await DB.getHistory(param);

})
        
app.delete('/T', async (req, res) => {
    let id = req.body.id;
    console.log(id);
    param = JSON.parse(id);
    res.send( await DB.deleteRiwayat(param) );
});

app.put('/T', async (req, res) => {
    let id = req.body.id;
    let data = req.body.data;
    let param = { id : id, data : data };
    res.send( await DB.nambahInput(param) );
});

module.exports = app;   