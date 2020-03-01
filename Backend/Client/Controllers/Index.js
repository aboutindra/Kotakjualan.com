const request = require('./Request');
const Request = new request();
class Controllers{

    reqAllClientData(){
        return Request.getAllClientData();
    }

}

module.exports = Controllers;