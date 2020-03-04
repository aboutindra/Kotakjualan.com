const controllers = require('../Controllers/Index');
const Control = new controllers();

class Get{

    getAllClient(){
        return Control.reqAllClientData();
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

}

module.exports = Get;