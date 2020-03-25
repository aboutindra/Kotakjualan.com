const init = require('../Schema/Schema');
const Init = new init();
const DB = require('mongodb').MongoClient;
const insert = require('./Insert') ;
const read = require('./Read');
const update = require('./Update');
const drop = require('./Drop');

let initCount = 0;

class ModelsIndex{

    constructor() {
        this.db;
        this.insert;
        this.read;
        this.update;
        this.delete;
        this.initDB();
    }

    initDB(){
        DB.connect("mongodb://127.0.0.1:27017/KoperasiDB", {useNewUrlParser:true, useUnifiedTopology:true}, (err, con) => {

            if(err){ console.log("[❌] Failed Connect to Database, \nMessages : ", err) }

            if(initCount === 0){
                Init.createAllCollection(err, con);
                console.log("[✔] Successfully connected to Database");
                initCount++;
            }

            this.db = con.db('KoperasiDB');
            this.insert = new insert(this.db);
            this.update = new update(this.db);
            this.drop = new drop(this.db);
            this.read = new read(this.db);
        });

    }
}
module.exports = ModelsIndex;