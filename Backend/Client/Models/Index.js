const Mongo = require('mongodb').MongoClient;

const read = require('./Read');
const Read = new read();

const init = require('./Init');
const Init = new init();

class Models{

    constructor(DBAddress){
        console.log(DBAddress);
        this.url = DBAddress;
        this.db = '';
        this.clients = '';
        this.initDB();
    }

    initDB(){
        Mongo.connect(this.url, {useNewUrlParser:true, useUnifiedTopology:true}, (err, con) => {

            if(err){ console.log("[❌] Failed Connect to Database, Messages : ", err) }

            this.db = con.db('KoperasiDB');
            this.clients = this.db.collection('Clients');

            Init.createAllCollection(err, con);

        });

    }

    readAllData(){
        return Read.readAll(this.clients);
    }

}

module.exports = Models;
