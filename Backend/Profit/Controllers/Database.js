const model = require('../Models/Index');
const Model = new model();

class DatabaseController {

    async getProfit(param){
        let hasil;
        if( param.id === 1 ){
            hasil = await Model.read.getAllProfit();
        }
        return hasil;
    }

    async postProfit(param){

    }

    async deleteProfit(param){

    }

    async updateProfit(param){

    }

}
module.exports = DatabaseController;