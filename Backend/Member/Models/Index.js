const Mongo = require('mongodb').MongoClient;

const read = require('./Read');
const Read = new read();

const insert = require('./Insert');
const Insert = new insert();

const update = require('./Update');
const Update = new update();

const Schema = require('../Schema/Index');
const schema = new Schema();

class Models{

    constructor(){
        this.db = '';
        this.members = '';
        this.initDB();
    }

    initDB(){

      Mongo.connect("mongodb://127.0.0.1:27017/KoperasiDB", {useNewUrlParser:true, useUnifiedTopology:true}, (err, con) => {

        if(err){ console.log("[❌] Failed Connect to Database, Messages : ", err) }
        this.db = con.db('KoperasiDB');
        this.members = this.db.collection('Members');
        this.logs = this.db.collection('Logs');
        schema.createAllCollection(err, con);        

      });

    }

    readAllData(){
        return Read.readAll(this.members);
    }

    insertDataMember(clientParam){
        return Insert.insertDataMember(clientParam, this.members, this.logs);
    }

    updateDataMember(clientParam){
        return Update.updateDataMember(clientParam, this.members);
    }

}

module.exports = Models;
