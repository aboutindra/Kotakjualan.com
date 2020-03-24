const express = require("express");
const app = express();

const cors = require('cors');
const bp = require('body-parser');
const comp = require('compression');

const Akun = require('./Routes/Akun');

app.use(cors());
app.use(comp());
app.use(bp.json());

app.use("/api/v1/akun", Akun);

app.get('*', ( req, res ) => { res.send({ status: "OK" }) });
app.put('*', ( req, res ) => { res.send({ status: "OK" }) });
app.post('*', ( req, res ) => { res.send({ status: "OK" }) });
app.delete('*', ( req, res ) => { res.send({ status: "OK" }) });

app.listen(1555, (err)  =>{

    if(err){ console.log("[❌] Failed to run Akun Microservices, \nMessages : ", err) }        

    console.log("[✔] Successfully running Akun Microservices at http://localhost:1555/")

});