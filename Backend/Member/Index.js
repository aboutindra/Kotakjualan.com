const express = require('express');
const bp = require('body-parser');

const routes = require('./Routes/Index');

const app = new express();
app.use('/api/v1/member' , routes);
app.use(bp.json);
app.use(bp.urlencoded({ extended: true }));

app.listen(3001, (err) => {

    if(err){ console.log("[❌] Failed to run Client Microservices, \nMessages : ", err) }

    app.post('*', async( req, res ) => { res.send({ status: "OK" }) });
    app.put('*', async( req, res ) => { res.send({ status: "OK" }) });
    app.delete('*', async( req, res ) => { res.send({ status: "OK" }) });
    app.get('*', async( req, res ) => { res.send({ status: "OK" }) });

    console.log("[✔] Successfully running Client Microservices at http://localhost:3001/")

});