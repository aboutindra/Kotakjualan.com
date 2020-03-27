const Mongo = require('mongodb').MongoClient;
// Mongo.set('useFindAndModify', false);
const insert = require('./Insert');
const dalete = require('./Delete');
const update = require('./Update');

class Models {
    constructor(){

        this.db = null;
        this.insert ;
        this.delete ; 
        this.update ; 
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
        });

        
    }

    insertHistory(clientParam){
        return Insert.insertHistory(clientParam);
    }

    deletesatuRiwayat(id){
        return Delete.deleteOneHistory(id);
    }

    deletebanyakRiwayat(id){
        Delete.deleteManyHistory(id);
    }

    updateMasukan(param){
        Update.updateMasukan(param);
    }

}
module.exports = Models;
