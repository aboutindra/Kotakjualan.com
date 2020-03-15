const async = require('async');

class Schema{

  createAllCollection(err, con){    

    let db = con.db('KoperasiDB');

    if(err) console.log(err);    

    async.parallel({

      createOrder : async function(){

        await db.createCollection("Order");        

      }

    },function(err, res){

      if(err) console.log("[ ❌ ] Collection Order failed to created");

      console.log("[✔] Collection Order created.");            


    });
    
  }

}

module.exports = Schema;

