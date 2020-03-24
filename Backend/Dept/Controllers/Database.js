const async = require('async');
const Model = require('../Models/Index');
const model = new Model();

class DatabaseController{
    async getDept(param){
        let hasil;
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
            return { status : [
                {
                    insertDept : await model.insert.insertDataDept(param.data)
                },
                {
                   updateLogsDept : await model.update.updateDataLogs("Dept")
                }
                ]
            };
        }else if( param.id === 2 ){
            return { status : [
                {
                    insertPlant : await model.insert.insertDataPlant(param.data)
                },
                {
                    updateLogsPlant : await model.update.updateDataLogs("Plant")
                }
                ]
            };
        }else if( param.id === 3 ){
            let insertShop =  model.insert.insertDataShop(param.data);
            let updateLogsShop =  model.update.updateDataLogs("Shop");
            let result = { status : [ {insertShop : await insertShop}, {updateLogsShop : await updateLogsShop }] };
            return result;
        }
    }

    async updateDept(param){
        if( param.id === 1 ){
            return { updateDept : await model.update.updateDataDept(param.data) }
        } else if ( param.id === 2 ){
            return { updatePlant : await model.update.updateDataPlant(param.data) }
        } else if ( param.id === 3 ){
            return { updateShop : await model.update.updateDataShop(param.data) }
        }
    }

    async deleteDept(param){
        if( param.id === 1 ){
            return { deleteDept : await model.drop.dropDataDept(param.data) }
        } else if( param.id === 2 ){
            return { deletePlant : await model.drop.dropDataPlant(param.data) }
        } else if( param.id === 3 ) {
            return { deleteShop : await model.drop.dropDataShop(param.data) }
        }
    }
}
module.exports = DatabaseController;