const controllers = require('../Controllers/Index');
const Control = new controllers();

class Get{

    getAllClient(){
        return Control.reqAllClientData();
    }

    getAllDept(){
        return Control.reqAllDeptData();
    }

    getAllPlant(){
        return Control.reqAllPlantData();
    }

    getTotalMember(){
        return Control.reqTotalMember();
    }

    getTotalActiveMember(){
        return Control.reqTotalActiveMember();
    }

    getTotalNonActiveMember(){
        return Control.reqTotalNonActiveMember();
    }

    getLastIDMember(){
        return Control.reqLastIDMember();
    }

    getLastNoKop(){
        return Control.reqLastNoKop();
    }

}

module.exports = Get;