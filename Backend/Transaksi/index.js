const express = require('express');
const bp = require('body-parser');
const comp = require('compression');
const cors = require('cors');


const endpointRoutes = require('./Routes/index');


const Model = require('./Models/Index');
const model = new Model();

const app = new express();

app.use('/api/v1/transaksi' , endpointRoutes);

app.use(comp());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors());

app.get('/*', async( req, res ) => { res.send({ status: "OK" }) });
app.put('/*', async( req, res ) => { res.send({ status: "OK" }) });
app.post('/*', async( req, res ) => { res.send({ status: "OK" }) });
app.delete('/*', async( req, res ) => { res.send({ status: "OK" }) });

app.listen(2100, (err) => {

    if(err){ console.log("[❌] Failed to run Transaksi Microservices, \nMessages : ", err) }    

    model.initDB();

    console.log("[✔] Successfully running Transaksi Microservices at http://localhost:2100/")

});     