const express = require('express');
const app = express();

const cors = require('cors');
const bp = require('body-parser');
const comp = require('compression');

const Model = require('./Models/Index');
const model = new Model();

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

    if(err){ console.log("[❌] Failed to run Barang Microservices, \nMessages : ", err) }        

    model.main();

    console.log("[✔] Successfully running Barang Microservices at http://localhost:1666/")

});