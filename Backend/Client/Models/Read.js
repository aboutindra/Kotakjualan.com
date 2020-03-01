const Mongo = require('mongodb').MongoClient;

class Read{

    async readAll(clientCol){

       let data = await clientCol.find().toArray();
       console.log("aeaea");
       return data;

    }

}
module.exports = Read;