const express = require('express');
const app = express.Router();

const cors = require('cors');
const bp = require('body-parser');
const comp = require('compression');

app.use(cors());
app.use(comp());
app.use(bp.json());

app.get('*', ( req, res ) => { res.send({ status: "OK" }) });
app.put('*', ( req, res ) => { res.send({ status: "OK" }) });
app.post('*', ( req, res ) => { res.send({ status: "OK" }) });
app.delete('*', ( req, res ) => { res.send({ status: "OK" }) });

app.get("/gsp", (req, res)=>{
  res.send({result:"Hello"});
});

module.exports = app;