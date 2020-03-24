const Schema = require('../Schema/Index');
const schema = new Schema();

const Mongo = require('mongodb').MongoClient;

const Get = require('./Get');
const Post = require('./Post');
const Put = require('./Put');
const Del = require("./Del");

let count = 0;

class Model{

    constructor(){

        this.database;

        this.get;

        this.post;

        this.put;

        this.del;

        this.main();

    }

    main(){

        Mongo.connect('mongodb://127.0.0.1:27017/KoperasiDB', {useNewUrlParser:true, useUnifiedTopology:true}, async (err, con)=>{
            
            if(count == 0){
                await schema.createAllCollection(err, con);
                count++;
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