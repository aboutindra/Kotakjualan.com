const tokoRoutes = require('./Routes/Index');
const models = require('./Models/Index');
const compress = require('compression');
const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const model = new models();
const app = new express();

app.use(cors());
app.use(bp.json());
app.use(compress());
app.use('/api/v1/toko', tokoRoutes);
app.use(bp.urlencoded({ extended: true }));

app.get('/*', async( req, res ) => { res.send({ status: "OK" }) });
app.put('/*', async( req, res ) => { res.send({ status: "OK" }) });
app.post('/*', async( req, res ) => { res.send({ status: "OK" }) });
app.delete('/*', async( req, res ) => { res.send({ status: "OK" }) });

app.listen(3003 , (err) => {

    if(err){ console.log("[❌] Failed to run Toko Microservices, \nMessages : ", err) }
    model.initDB();
    console.log("[✔] Successfully running Toko Microservices at http://localhost:3003/")

});
