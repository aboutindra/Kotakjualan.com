const async = require('async');
const Models = require('../Models/Index');

const model = new Models();
     
class DbControll {
    async postRiwayat(param,ress){
             await model.insert.insertHistory(param,ress);
        }
    
    async deleteRiwayat(param){
        await model.delete.deleteOneHistory(param);
    }

    async nambahInput(param){
        await model.update.updateMasukan(param);
    }

    async getHistory(param){
        await model.get.findHistory(param); 

    }
}
module.exports = DbControll; 