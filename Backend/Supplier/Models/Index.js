const mongo = require('mongodb').MongoClient;

const Schema = require('../Schema/Index');
const schema = new Schema();

const Get = require('./Get');

const Post = require('./Post');

const Put = require("./Put");

const Del = require("./Delete");

let publicCount = 0;

class Model{

  constructor(){

    this.database;    
    
    this.__init();
    
    this.get = new Get(this.database);

    this.post = new Post(this.database);

    this.put = new Put(this.database);

    this.del = new Del(this.database);
    
  }

  __init(){

    mongo.connect("mongodb://127.0.0.1:27017/KoperasiDB", {useNewUrlParser:true, useUnifiedTopology:true},(err, con) => {

      if(err) console.log("[❌] Failed Connect to Database, Messages : ", err);

      if(publicCount === 0){
        schema.createAllCollection(err, con);
        publicCount++;
      }
    
      this.database = con.db("KoperasiDB");      

    });

    
  }  

}

module.exports = Model;
