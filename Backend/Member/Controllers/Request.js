const model = require('../Models/Index');
const DB = new model();

class Request{

    getAllClientData(){
        return DB.readAllData();
    }

    getTotalMember(){
        return DB.readTotalMember();
    }

}

module.exports = Request;