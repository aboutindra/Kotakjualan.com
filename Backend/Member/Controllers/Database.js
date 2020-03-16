const async = require('async');

const Model = require('../Models/Index');
const model = new Model();

class DatabaseController{
    async getMember(param){
        let hasil = [];
        console.log(param);
        if( param.id === 1 ){
            hasil = await model.read.readAll();
        } else if( param.id === 2 ) {
            hasil = await model.read.readDataMemberWithParam( param.keyword );
        } else if( param.id === 3 ) {
            hasil = await model.read.readLastNoKop();
        } else if( param.id === 4 ){
            hasil = await model.read.readLastIDMember();
        } else if( param.id === 5 ){
            hasil = await  model.read.readTotalMember();
        } else if( param.id === 6 ){
            hasil = await  model.read.readTotalActiveMember();
        } else if( param.id === 7 ){
            hasil = await  model.read.readTotalNonActiveMember();
        }
        return hasil;
    }
}
module.exports = DatabaseController;