const express = require('express');
const app = new express();

const cors = require('cors');
const comp = require('compression');

const bp = require('body-parser');

app.use(bp.json());
app.use(cors());
app.use(comp());

app.get('*', ( req, res ) => { res.send({ status: "OK" }) });
app.put('*', ( req, res ) => { res.send({ status: "OK" }) });
app.post('*', ( req, res ) => { res.send({ status: "OK" }) });
app.delete('*', ( req, res ) => { res.send({ status: "OK" }) });


app.listen(1888, (err)=>{

  if(err){ console.log("[❌] Failed to run Supplier Microservices, \nMessages : ", err) }        

  console.log("[✔] Successfully running Supplier Microservices at http://localhost:1888/")

});