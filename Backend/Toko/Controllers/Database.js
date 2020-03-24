const model = require('../Models/Index');
const Model = new model();

class DatabaseController{

    async getToko(param){
        let hasil;
        if( param.id === 1 ){
           hasil = await Model.read.getAllToko();
        } else if( param.id === 2 ){
            hasil = await Model.read.getSpecificToko(param.data);
        }
        return hasil;
    }

    async postToko(param){

        let hasil;
        if( param.id === 1 ){
            hasil = { insertToko : await Model.insert.insertToko(param.data), updateLogs : await Model.update.updateDataLogs("Toko") };
        }
        return hasil;

    }

    async updateToko(param){
        let hasil;
        if( param.id === 1 ){
            hasil = { updateToko : await Model.update.updateDataToko(param.data) };
        }
        return hasil;
    }

    async deleteToko(param){
        let hasil;
        if( param.id === 1 ){
            hasil = { deleteToko : await Model.drop.dropDataToko( param.data ) }
        }
        return hasil;
    }

}
module.exports = DatabaseController;