const Mongo = require('mongodb').MongoClient;

const read = require('./Read');

const insert = require('./Insert');

const update = require('./Update');

const drop = require('./Drop');

const Schema = require('../Schema/Index');
const schema = new Schema();

let publicCount = 0;

class Models{

    constructor(){

        this.db;
        this.insert ;
        this.update ;
        this.drop ;
        this.read ;

        this.initDB();

    }

    initDB(){
        Mongo.connect("mongodb://127.0.0.1:27017/KoperasiDB", {useNewUrlParser:true, useUnifiedTopology:true}, (err, con) => {

            if(err){ console.log("[❌] Failed Connect to Database, Messages : ", err) }

            if(publicCount === 0){
                schema.createAllCollection(err, con);
                publicCount++;
            }

            this.db = con.db('KoperasiDB');
            this.insert = new insert(this.db);
            this.update = new update(this.db);
            this.drop = new drop(this.db);
            this.read = new read(this.db);

        });

    }
}

module.exports = Models;
