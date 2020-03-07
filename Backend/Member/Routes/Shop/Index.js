const express = require('express');
const bp = require('body-parser');

const app = express.Router();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const get = require('../Get');
const Get = new get();

const post = require('../Post');
const Post = new post();

//Get All Client Data
app.get('/gs', async (req, res) => {
    res.send( await Get.getAllShop() );
});

//Get Total Member Data
app.get('/tm', async (req, res) => {
    res.send( await Get.getTotalMember())
});

//Get Total Active Member
app.get('/tam', async (req, res) => {
    res.send( await Get.getTotalActiveMember() )
});

//Get Total Non-Active Member
app.get('/tnm', async (req, res) => {
    res.send( await Get.getTotalNonActiveMember() )
});

//Get Last ID Member
app.get('/lim', async (req, res) => {
    res.send( await Get.getLastIDMember() )
});

//Get Last NoKop
app.get('/lnk', async (req, res) => {
    res.send( await Get.getLastNoKop() );
});

//Post Member Data
app.post('/im', async (req,res) => {

    let parameter = req.body.parameter;
    /*let nik = req.body.nik;
    let nama = req.body.nama;
    let shop = req.body.shop;
    let dept = req.body.dept;
    let plant = req.body.plant;
    let tglmasuk = req.body.tglmasuk;
    let tglkeluar = req.body.tglkeluar;
    let staanggota = req.body.staanggota;
    let stakaryawan = req.body.stakaryawan;
    let ket = req.body.ket;*/

    /*let memberParam = { nokop : nokop, nik : nik, idcard : idcard, nama : nama, shop : shop, dept : dept, plant : plant, tglmasuk : tglmasuk, tglkeluar : tglkeluar, staanggota : staanggota, stakaryawan : stakaryawan, ket : ket , TglTerdaftar : new Date(Date.now()).toString() };*/

    res.send( { data : await Post.postDataMember(parameter)});

});

//Post Find Member Data
app.post('/fs', async (req, res) => {
    let searchParam = req.body.parameter;
    res.send( await Post.searchDataShop(searchParam) );
});

//Put Update Member Data
app.put('/um', async (req, res) => {

    let update = req.body.parameter;
    res.send({ data : await Post.updateDataMember(update) })

});

//Delete Member Data
app.delete('/dm', async (req, res) => {

    let id_member = req.body.parameter;
    res.send({ data : await Post.deleteDataMember(id_member)})

});

module.exports = app;