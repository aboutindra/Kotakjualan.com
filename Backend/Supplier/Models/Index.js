const mongo = require('mongodb').MongoClient;

const Schema = require('../Schema/Index');
const schema = new Schema();

let publicCount = 0;

class Model{

  constructor(){
    
    this.__init();

  }

  __init(){

    mongo.connect("mongodb://127.0.0.1:27017/KoperasiDB", {useNewUrlParser:true, useUnifiedTopology:true},(err, con) => {

      if(err) console.log("[❌] Failed Connect to Database, Messages : ", err);

      if(publicCount === 0){
        schema.createAllCollection(err, con);
        publicCount++;
      }
    
      this.database = con.db("KoperasiDB");

      this.supp = this.database.collection("Supplier");

    });

  }

}

module.exports = Model;
