const async = require('async');
const Model = require('../Models/Index');
const model = new Model();

class DatabaseController{
    async getDept(param){
        let hasil = [];
        if( param.id === 10 ){
            hasil = await model.read.readDept();
        } else if( param.id === 11 ) {
            hasil = await model.read.readDataDeptWithParam( param.keyword );
        } else if( param.id === 20 ) {
            hasil = await model.read.readPlant();
        } else if( param.id === 21 ) {
            hasil = await model.read.readDataPlantWithParam( param.keyword );
        } else if( param.id === 30 ) {
            hasil = await model.read.readShop();
        } else if( param.id === 31 ) {
            hasil = await model.read.readDataShopWithParam( param.keyword );
        }else {
            hasil = false;
        }
        return hasil;
    }

    async postDept(param){
        if( param.id === 1 ){
            let insertDept =  model.insert.insertDataDept(param.data);
            let updateLogsDept =  model.update.updateDataLogs("Dept");
            let result = { status : [ {insertDept : await insertDept}, {updateLogsDept : await updateLogsDept}] };
            return result;
        }
    }

    async updateMember(param){
        if( param.id === 1 ){
            let updateMembers = model.update.updateDataMember(param.data);
            return { updateMembers : await updateMembers }
        }
    }

    async deleteMember(param){
        if( param.id === 1 ){
            let deleteMembers = model.drop.dropDataMember(param.data);
            return { deleteMembers : await deleteMembers }
        }
    }
}
module.exports = DatabaseController;