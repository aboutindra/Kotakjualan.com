const model = require('../Models/Index');
const DB = new model();

class Request{

    getAllClientData(){
        return DB.readAllData();
    }

    getTotalMember(){
        return DB.readTotalMember();
    }

    getTotalActiveMember(){
        return DB.readTotalActiveMember();
    }

    getTotalNonActiveMember(){
        return DB.readTotalNonActiveMember();
    }

    getLastIDMember(){
        return DB.readLastIDMember();
    }

    getLastNoKop(){
        return DB.readLastNoKop();
    }

}

module.exports = Request;