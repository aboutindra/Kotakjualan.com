const Mongo = require('mongodb').MongoClient;

const Schema = require("../Schema/Index");
const schema = new Schema();

const Get = require('./Get');
const Post = require('./Post');
const Put = require("./Put");
const Del = require("./Del");

let publicCount = 0;

class Model{
  
  constructor(){

    this.database ;

    this.get;

    this.post;

    this.put;

    this.del;

    this.__init();

  }

  __init(){

    Mongo.connect("mongodb://127.0.0.1:27017/KoperasiDB", {useNewUrlParser:true, useUnifiedTopology:true}, async (err, con)=>{

      this.database = con.db("KoperasiDB");

      if(publicCount === 0){
        schema.createAllCollection(err, con);
      }

      this.get = new Get(this.database);

      this.post = new Post(this.database);
      
      this.put = new Put(this.database);

      this.del = new Del(this.database);

    });

  }

}

module.exports = Model;