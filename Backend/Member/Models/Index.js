const Mongo = require('mongodb').MongoClient;

const read = require('./Read');
const Read = new read();

const insert = require('./Insert');
const Insert = new insert();

const Schema = require('../Schema/Index');
const schema = new Schema();

class Models{

    constructor(){
        this.db = '';
        this.members = '';
    }

    initDB(){

      Mongo.connect("mongodb://127.0.0.1:27017/KoperasiDB", {useNewUrlParser:true, useUnifiedTopology:true}, (err, con) => {

        if(err){ console.log("[❌] Failed Connect to Database, Messages : ", err) }
            
        this.db = con.db('KoperasiDB');
        
        this.members = this.db.collection('Members');

        schema.createAllCollection(err, con);        

      });

    }

    readAllData(){
        return Read.readAll(this.members);
    }

    insertDataClient(clientParam){
        return Insert.insertDataClient(clientParam, this.members);
    }

}

module.exports = Models;
