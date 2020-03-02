const Mongo = require('mongodb').MongoClient;

const read = require('./Read');
const Read = new read();

const insert = require('./Insert');
const Insert = new insert();

const init = require('./Init');
const Init = new init();

class Models{

    constructor(){
        this.db = '';
        this.clients = '';
    }

    initDB(){
        Mongo.connect("mongodb://127.0.0.1:27017/KoperasiDB", {useNewUrlParser:true, useUnifiedTopology:true}, (err, con) => {

            if(err){ console.log("[❌] Failed Connect to Database, Messages : ", err) }
            this.db = con.db('KoperasiDB');
            this.clients = this.db.collection('Clients');
            Init.createAllCollection(err, con);

        });

    }

    readAllData(){
        return Read.readAll(this.clients);
    }

    insertDataClient(clientParam){
        return Insert.insertDataClient(clientParam, this.clients);
    }

}

module.exports = Models;
