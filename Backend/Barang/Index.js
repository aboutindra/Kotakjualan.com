const express = require('express');
const app = express();

const cors = require('cors');
const bp = require('body-parser');
const comp = require('compression');

const Route = require('./Routes/Barang');

app.use(cors());
app.use(comp());
app.use(bp.json());

app.use("/api/v1/barang", Route);

app.get('*', ( req, res ) => { res.send({ status: "OK" }) });
app.put('*', ( req, res ) => { res.send({ status: "OK" }) });
app.post('*', ( req, res ) => { res.send({ status: "OK" }) });
app.delete('*', ( req, res ) => { res.send({ status: "OK" }) });

app.listen(1666, (err)  =>{

    if(err){ console.log("[❌] Failed to run Supplier Microservices, \nMessages : ", err) }        

    console.log("[✔] Successfully running Supplier Microservices at http://localhost:1888/")

});