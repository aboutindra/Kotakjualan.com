const Mongo = require('./Mongo');

class Controller{

    constructor(){
        this.mongo = new Mongo();
    }

}

module.exports = Controller;