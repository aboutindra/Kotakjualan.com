const express = require('express');
const app = express.Router();

const cors = require('cors');
const comp = require('compression');
const bp = require('body-parser');

const Control = require('../Controller/Index');
const control = new Control();

app.use(cors());
app.use(comp());
app.use(bp.json());

app.get('/e', async (req,res)=>{
  let temp = await control.mongo.getBarang(req.body.param);
  res.send({result:temp});
});

app.post('/e', async (req, res) => {
  let temp = await control.mongo.postBarang(req.body.param);
  res.send({result:temp});
});

app.put('/e', async (req, res) => {
  let temp = await control.mongo.putBarang(req.body.param);
  res.send({result:temp});
});

app.delete('/e', async (req, res) => {
  let temp = await control.mongo.delBarang(req.body.param);
  res.send({result:temp});
});

app.get('*', ( req, res ) => { res.send({ status: "OK" }) });
app.put('*', ( req, res ) => { res.send({ status: "OK" }) });
app.post('*', ( req, res ) => { res.send({ status: "OK" }) });
app.delete('*', ( req, res ) => { res.send({ status: "OK" }) });

module.exports = app;