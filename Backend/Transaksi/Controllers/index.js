const async = require('async');
const Models = require('../Models/Index');

const model = new Models();
     
class DbControll {
    async postTransaksi(param,ress){
             await model.insert.insertTransaksi(param,ress);
        }
    
    async deleteTransaksi(param){
        await model.delete.deleteTransaksi(param);
    }

    async putTransaksi(param){
        await model.update.updateTransaksi(param);
    }

    async getTransaksi(param){
       return await model.get.findTransaksi(param); 

    }
}
module.exports = DbControll; 