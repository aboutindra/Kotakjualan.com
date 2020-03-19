const MongoControl = require('./Mongo');


class Controllers{

  constructor(){
    
    this.mongo = new MongoControl();

  }

}

module.exports = Controllers;