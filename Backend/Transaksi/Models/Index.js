const Mongo  = require('mongodb').MongoClient;
const insert = require('./Insert');
const dalete = require('./Delete');
const update = require('./Update');
const get    = require('./Get'); 
const init   = require('../Schema/index');
const Init   = new init();

let param = 0;

class Models {
    constructor(){                                

        this.db = null;
        this.insert ;
        this.delete ; 
        this.update ; 
        this.get    ; 
        this.initDB();
        

      }
  
    initDB() {
        

        Mongo.connect("mongodb://127.0.0.1:27017/", { useNewUrlParser: true, useUnifiedTopology: true }, (err, con) => {
            if (err) {
                console.log("[❌] Failed Connect to Database, Messages : ", err);
            }
        this.db = con.db('KoperasiDB');

       
        if(param === 0){
            Init.addCollection(con);
            console.log("[✔] Successfully connected to Database");
            param = param + 1;
        }

        this.insert = new insert(this.db);    
        this.delete = new dalete(this.db);
        this.update = new update(this.db);
        this.get    = new get   (this.db);      

        });

        
    }

    insertTransaksi(param){
        return Insert.insertTransaksi(param);
    }
    deleteOneHistory(id){
        return Delete.deleteOneHistory(id);
    }
    updateTransaksi(param){
        return Update.updateTransaksi(param);
    }
    findTransaksi(param){
        return Get.findTransaksi(param);
    }

}
module.exports = Models;
