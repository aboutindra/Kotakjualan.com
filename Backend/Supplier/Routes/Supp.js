const express = require('express');
const app = express.Router();

const cors = require('cors');
const bp = require('body-parser');
const comp = require('compression');

const Control = require('../Controllers/Index');
const cntrl = new Control();

app.use(cors());
app.use(comp());
app.use(bp.json());

app.get('*', ( req, res ) => { res.send({ status: "OK" }) });
app.put('*', ( req, res ) => { res.send({ status: "OK" }) });
app.post('*', ( req, res ) => { res.send({ status: "OK" }) });
app.delete('*', ( req, res ) => { res.send({ status: "OK" }) });

app.get("/e", (req, res)=>{
  let temp = cntrl.mongo.getSupp(req.body.param);
  res.send({result:temp});
});

app.post("/e", (req, res)=>{
  let temp = cntrl.mongo.postSupp(req.body.param);
  res.send({result:temp});
});

app.put("/e", (req, res)=>{
  let temp = cntrl.mongo.putSupp(req.body.param);
  res.send({result:temp});
});

app.delete("/e", (req, res)=>{
  let temp = cntrl.mongo.delSupp(req.body.param);
  res.send({result:temp});
});

module.exports = app;