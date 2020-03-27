const profitRoutes = require('./Routes/Index');
const Model = require('./Models/Index');
const comp = require('compression');
const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const app = new express();
const model = new Model();

app.use(bp.urlencoded({ extended: true }));
app.use('/api/v1/profit', profitRoutes);
app.use(bp.json());
app.use(comp());
app.use(cors());

app.get('/*', async( req, res ) => { res.send({ status: "OK" }) });
app.put('/*', async( req, res ) => { res.send({ status: "OK" }) });
app.post('/*', async( req, res ) => { res.send({ status: "OK" }) });
app.delete('/*', async( req, res ) => { res.send({ status: "OK" }) });

app.listen(3003 , (err) => {

    if(err){ console.log("[❌] Failed to run Profit Microservices, \nMessages : ", err) }
    model.initDB();
    console.log("[✔] Successfully running Profit Microservices at http://localhost:3004/")

});
