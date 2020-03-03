const controllers = require('../Controllers/Index');
const Control = new controllers();

class Get{

    getAllClient(){
        return Control.reqAllClientData();
    }

}

module.exports = Get;