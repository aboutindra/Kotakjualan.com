const express = require('express');
const app = new express();

const http = require('http');

const cors = require('cors');
const comp = require('compression');

const Order = require('./Routes/Order');

const Model = require('./Models/Index');
const model = new Model();

app.use('/api/v1/order', Order);

app.use(cors());
app.use(comp());

http.globalAgent.maxSockets = Infinity;

app.get('*', ( req, res ) => { res.send({ status: "OK" }) });
app.put('*', ( req, res ) => { res.send({ status: "OK" }) });
app.post('*', ( req, res ) => { res.send({ status: "OK" }) });
app.delete('*', ( req, res ) => { res.send({ status: "OK" }) });

app.listen(1777, (err)=>{

  if(err){ console.log("[❌] Failed to run Order Microservices, \nMessages : ", err) }          

  model.__init();

  console.log("[✔] Successfully running Order Microservices at http://localhost:1777/")

});
