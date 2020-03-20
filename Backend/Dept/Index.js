const express = require('express');
const app = new express();
const bp = require('body-parser');
const cors = require('cors');

const model = require('./Models/Index');
const Model = new model();

const deptRoutes = require('./Routes/Dept/Index');
const plantRoutes = require('./Routes/Plant/Index');
const shopRoutes = require('./Routes/Shop/Index');

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(cors());

app.use('/api/v1/dept', deptRoutes);
/*app.use('/api/v1/plant', plantRoutes);
app.use('/api/v1/shop', shopRoutes);*/

app.get('/*', async( req, res ) => { res.send({ status: "OK" }) });
app.put('/*', async( req, res ) => { res.send({ status: "OK" }) });
app.post('/*', async( req, res ) => { res.send({ status: "OK" }) });
app.delete('/*', async( req, res ) => { res.send({ status: "OK" }) });

app.listen(3002, (err) => {

    if(err){ console.log("[❌] Failed to run Dept Microservices, \nMessages : ", err) }

    Model.initDB();

    console.log("[✔] Successfully running Dept Microservices at http://localhost:3002/")

});
