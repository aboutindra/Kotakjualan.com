const async = require('async');
const Models = require('../Models/Index');

const model = new Models();
     
class DbControll {
    async postTransaksi(param){
    return await model.insert.insertTransaksi(param);
        }
    
    async deleteTransaksi(param){
    return await model.delete.deleteTransaksi(param);
    }

    async putTransaksi(param){
    return await model.update.updateTransaksi(param);
    }

    async getTransaksi(param){
    return await model.get.findTransaksi(param); 

    }
}
module.exports = DbControll; 