const Mongo = require('mongodb').MongoClient;

const Read = require('./Read');
const Insert = require('./Insert');
const Update = require('./Update');
const Delete = require('./Delete');

const init = require('../Schema/Schema');
const Init = new init();

let initCount = 0;

class IndexModels{

    constructor() {
        this.db;
        this.insert;
        this.read;
        this.update;
        this.delete;
        this.initDB();
    }

    initDB(){
        Mongo.connect("mongodb://127.0.0.1:27017/KoperasiDB", {useNewUrlParser:true, useUnifiedTopology:true}, (err, con) => {
            if(err){ console.log("[❌] Failed connected to Database, \nMessages : ", err) }
            this.db = con.db("KoperasiDB");
            this.insert = new Insert(this.db);
            this.read = new Read(this.db);
            this.update = new Update(this.db);
            this.delete = new Delete(this.db);
            if( initCount === 0 ){
                Init.createCollection(err, con);
                console.log("[✔] Successfully connected to Database");
                initCount++;
            }
        })
    }

}
module.exports = IndexModels;