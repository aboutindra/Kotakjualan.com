const model = require('../Models/Index');
const Model = new model();

class DatabaseController {

    async getProfit(param){
        let hasil;
        if( param.id === 1 ){
            hasil = await Model.read.getAllProfit();
        } else if( param.id === 2 ){
            hasil = await Model.read.getSpecificProfit( param.data );
        }
        return hasil;
    }

    async postProfit(param){
        let hasil;
        if( param.id === 2 ){
            hasil = await Model.insert.insertProfit( param.data );
        }
        return hasil;
    }

    async deleteProfit(param){

    }

    async updateProfit(param){

    }

}
module.exports = DatabaseController;