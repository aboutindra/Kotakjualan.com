const Mongo = require('./Mongo');

class Control{

  constructor(){

    this.mongo = new Mongo();
    
  }

}

module.exports = Control;