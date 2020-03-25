const comp = require('compression');
const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const app = express.Router();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(comp());
app.use(cors());

app.get('/p', async (req, res) => {

});

app.post('/p', async (req, res) => {

});

app.put('/p', async (req, res) => {

});

app.delete('/p', async (req, res) => {

});

module.exports = app;