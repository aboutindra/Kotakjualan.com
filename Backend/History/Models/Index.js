const Mongo  = require('mongodb').MongoClient;
const insert = require('./Insert');
const dalete = require('./Delete');
const update = require('./Update');
const get    = require('./Get'); 


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
        this.db = con.db('test');
    
        this.insert = new insert(this.db);    
        this.delete = new dalete(this.db);
        this.update = new update(this.db);
        this.get    = new get   (this.db);      
        });

        
    }

    insertHistory(clientParam,ress){
        return Insert.insertHistory(clientParam,ress);
    }
    deleteOneHistory(id){
        return Delete.deleteOneHistory(id);
    }
    updateMasukan(param){
        return Update.updateMasukan(param);
    }
    findHistory(param){
        return Get.findHistory(param);
    }

}
module.exports = Models;
