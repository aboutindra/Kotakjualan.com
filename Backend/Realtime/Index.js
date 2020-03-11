const express = require('express');
const app = new express();

const bp = require('body-parser');

const http = require('http');

const svr = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(svr);

const Member = require("./Member");
const member = new Member(io);

app.use(bp.json());

svr.listen(1999, (err)=>{
  if(err){ console.log("[❌] Failed to run Realtime Microservices, \nMessages : ", err) }          
  console.log("[✔] Successfully running Realtime Microservices at http://localhost:1999/")
});
