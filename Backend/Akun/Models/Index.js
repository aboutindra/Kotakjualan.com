const mongo = require('mongodb').MongoClient;

const Get  = require('./Get');
const Post = require('./Post');
const Put = require('./Put');
const Del = require('./Del');

const Schema = require('../Schema/Index');
const sc = new Schema();

let count = 0;

class Models{

  constructor(){
    
    this.database;

    this.get;

    this.post;

    this.del;

    this.put;

    this.__init();

  }

  __init(){

    mongo.connect("mongodb://127.0.0.1:27017/KoperasiDB", {useNewUrlParser:true, useUnifiedTopology:true}, (err, con)=>{

      if(err) throw "Mongodb ga bisa connect";

      (count === 0) ? sc.createAllCollection(err, con) . count++ : null;

      this.database = con.db("KoperasiDB");

      this.get = new Get(this.database);

      this.post = new Post(this.database);

      this.put = new Put(this.database);

      this.del = new Del(this.database);

    });

  }

}

module.exports = Models