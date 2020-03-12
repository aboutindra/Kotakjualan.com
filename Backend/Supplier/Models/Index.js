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
    
    this.get;
    
    this.post;
    
    this.put;
    
    this.del;

    this.__init();
    
  }

  __init(){

    mongo.connect("mongodb://127.0.0.1:27017/KoperasiDB", {useNewUrlParser:true, useUnifiedTopology:true}, async (err, con) => {

      if(err) console.log("[❌] Failed Connect to Database, Messages : ", err);

      if(publicCount === 0){
        console.log("Masuk");
        await schema.createAllCollection(err, con);
        publicCount++;
      }
    
      this.database = con.db("KoperasiDB");      

      this.get = new Get(this.database);

      this.post = new Post(this.database);

      this.put = new Put(this.database);

      this.del = new Del(this.database);
    
    });

    
  }  

}

module.exports = Model;
