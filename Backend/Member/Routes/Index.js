const express = require('express');
const app = express.Router();

const get = require('./Get');
const Get = new get();

const post = require('./Post');
const Post = new post();

//Get All Client Data
app.get('/gc', async (req, res) => {
    res.send( await Get.getAllClient() );
});

//Post
app.post('/ic', async (req,res) => {

    let nokop = req.body.nokop;
    let nik = req.body.nik;
    let idcard = req.body.idcard;
    let nama = req.body.nama;
    let shop = req.body.shop;
    let dept = req.body.dept;
    let plant = req.body.plant;
    let tglmasuk = req.body.tglmasuk;
    let tglkeluar = req.body.tglkeluar;
    let staanggota = req.body.staanggota;
    let stakaryawan = req.body.stakaryawan;
    let ket = req.body.ket;

    let times = () => {
        let date = new Date(Date.now());
        return date.toString();
    };

    let clientParam = { nokop : nokop, nik : nik, idcard : idcard, nama : nama, shop : shop, dept : dept, plant : plant, tglmasuk : tglmasuk, tglkeluar : tglkeluar, staanggota : staanggota, stakaryawan : stakaryawan, ket : ket , TglTerdaftar : times };
    console.log(clientParam);
    res.send( { data : await Post.postDataClient(clientParam)});

});

module.exports = app;