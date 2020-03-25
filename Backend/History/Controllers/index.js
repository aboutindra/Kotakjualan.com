const async = require('async');
const Models = require('../Models/Index');

const model = new Models();
     
class DbControll {
    async postRiwayat(param){
             await model.insert.insertHistory(param);
        }
    
    async deleteRiwayat(param){
        await model.delete.deleteOneHistory(param);
    }

    async nambahInput(param){
        await model.update.updateMasukan(param);
    }
}
module.exports = DbControll; 