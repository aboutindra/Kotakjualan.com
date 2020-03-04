const express = require('express');
const bp = require('body-parser');

const app = express.Router();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const get = require('./Get');
const Get = new get();

const post = require('./Post');
const Post = new post();

//Get All Client Data
app.get('/gm', async (req, res) => {
    res.send( await Get.getAllClient() );
});

//Get Total Member Data
app.get('/tm', async (req, res) => {
    res.send( await Get.getTotalMember())
});

//Get Total Active Member
app.get('/tam', async (req, res) => {
    res.send( await Get.getTotalActiveMember() )
});

//Post  
app.post('/im', async (req,res) => {

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

    let memberParam = { nokop : nokop, nik : nik, idcard : idcard, nama : nama, shop : shop, dept : dept, plant : plant, tglmasuk : tglmasuk, tglkeluar : tglkeluar, staanggota : staanggota, stakaryawan : stakaryawan, ket : ket , TglTerdaftar : new Date(Date.now()).toString() };
    console.log(memberParam);
    res.send( { data : await Post.postDataMember(memberParam)});

});

app.post('/fm', async (req, res) => {
    let searchParam = req.body.parameter;
    res.send({ data : await Post.searchDataMember(searchParam)})
});

app.put('/um', async (req, res) => {

    let update = req.body.parameter;
    res.send({ data : await Post.updateDataMember(update) })

});

app.delete('/dm', async (req, res) => {

    let id_member = req.body.parameter;
    res.send({ data : await Post.deleteDataMember(id_member)})

});

module.exports = app;