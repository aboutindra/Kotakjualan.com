const async = require('async');
const Models = require('../Models/Index');

const model = new Models();
     
class DbControll {
    async postRiwayat(param){
             await model.insert.insertHistory(param);
        }
    
    async deleteRiwayat(param){
        if(param == 1){
        await model.delete.deletesatuRiwayat(param);
        }else{
        await model.delete.deletebanyakRiwayat(param);
        }

    }

    async nambahInput(param){
        await model.update.updateMasukan(param);
    }
}
module.exports = DbControll; 